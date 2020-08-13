import * as React from "react";

import { FieldEditorComponent } from '../blocklyFieldView';
import { ImageEditor } from "./ImageEditor/ImageEditor";
import { setTelemetryFunction } from './ImageEditor/store/imageReducer';
import { TimelineFrame } from "./ImageEditor/TimelineFrame";

export interface ImageFieldEditorProps {
    singleFrame: boolean;
    options:any;
    
}

export interface ImageFieldEditorState {
    galleryVisible: boolean;
    galleryFilter?: string;
    segmentPos:string;
}

export type ImageType = pxt.sprite.Bitmap | pxt.sprite.ImageState;

export class ImageFieldEditor<U extends ImageType> extends React.Component<ImageFieldEditorProps, ImageFieldEditorState> implements FieldEditorComponent<U> {
    protected blocksInfo: pxtc.BlocksInfo;
    protected ref: ImageEditor;
    protected closeEditor: () => void;
    protected animationItems?:any[];
    protected options: any;

    constructor(props: ImageFieldEditorProps) {
        super(props);

        this.state = {
            galleryVisible: false,
            segmentPos:"left"
        };
        setTelemetryFunction(tickImageEditorEvent);
    }

    protected onAnimations = () => {
        this.setState({
            galleryVisible: false,
            segmentPos:"center"
        });
    }

    protected onGallery = () => {
        this.setState({
            galleryVisible: true,
            segmentPos:"right"
        });
    }

    protected onItemEditor = () => {
        this.setState({
            galleryVisible: false,
            segmentPos:"left"
        });
    }
    
    

    render() {
        const { singleFrame} = this.props;
        if(singleFrame){
            return <div className="image-editor-wrapper">
                <div className="gallery-editor-header">
                    <div className={`gallery-editor-toggle ${this.state.galleryVisible ? "right" : "left"} ${pxt.BrowserUtils.isEdge() ? "edge" : ""}`} onClick={this.toggleGallery} role="button" aria-pressed={this.state.galleryVisible}>
                        <div className="gallery-editor-toggle-label gallery-editor-toggle-left">
                            {lf("Editor")}
                        </div>
                        <div className="gallery-editor-toggle-label gallery-editor-toggle-right">
                            {lf("Gallery")}
                        </div>
                        <div className="gallery-editor-toggle-handle"/>
                    </div>
                </div>
                <div className="image-editor-gallery-content">
                    <ImageEditor ref="image-editor" singleFrame={this.props.singleFrame} options={this.props.options} onDoneClicked={this.onDoneClick} />
                    <ImageEditorGallery
                        items={this.blocksInfo && pxt.sprite.getGalleryItems(this.blocksInfo, "Image")}
                        hidden={!this.state.galleryVisible}
                        filterString={this.state.galleryFilter}
                        onItemSelected={this.onGalleryItemSelect} />
                </div>
            </div>
        } 

        return <div className="image-editor-wrapper">
            <div className="gallery-editor-header">
                <div className={`gallery-editor-segment ${this.state.segmentPos} ${pxt.BrowserUtils.isEdge() ? "edge" : ""}`}  role="button" aria-pressed={this.state.galleryVisible}>
                    <div className="gallery-editor-toggle-label gallery-editor-segment-left" onClick={this.onItemEditor}>
                        {lf("Editor")}
                    </div>
                    <div className="gallery-editor-toggle-label gallery-editor-segment-center" onClick={this.onAnimations}>
                        {lf("Animations")}
                    </div>
                    <div className="gallery-editor-toggle-label gallery-editor-segment-right" onClick={this.onGallery}>
                        {lf("Gallery")}
                    </div>
                    <div className="gallery-editor-toggle-handle"/>
                </div>
            </div>
            <div className="image-editor-gallery-content">
                <ImageEditor ref="image-editor" singleFrame={this.props.singleFrame} options={this.props.options} onDoneClicked={this.onDoneClick} />
                <ImageEditorAnimations 
                    items={this.animationItems}
                    hidden={!(this.state.segmentPos == "center")}
                    onItemSelected={this.onAnimationItemSelect}/>
                <ImageEditorGallery
                    items={this.blocksInfo && pxt.sprite.getGalleryItems(this.blocksInfo, "Image")}
                    hidden={!this.state.galleryVisible}
                    filterString={this.state.galleryFilter}
                    onItemSelected={this.onGalleryItemSelect} />
            </div>
        </div>


    }

    componentDidMount() {
        this.ref = this.refs["image-editor"] as ImageEditor;
        tickImageEditorEvent("image-editor-shown");
    }

    componentWillUnmount() {
        tickImageEditorEvent("image-editor-hidden");
    }

    init(value: U, close: () => void, options?: any) {
        this.closeEditor = close;
        this.options = options;
        if (this.props.singleFrame) {
            let bitmap = value as pxt.sprite.Bitmap;
            if (bitmap.height == 0 || bitmap.width == 0) {
                // Default to 16 x 16 if image is empty
                bitmap = new pxt.sprite.Bitmap(16, 16);
            }
            this.initSingleFrame(bitmap, options);
        }
        else {
            this.initAnimation(value as any, options);
        }

        if (options) {
            this.blocksInfo = options.blocksInfo;

            if (options.filter) {
                this.setState({
                    galleryFilter: options.filter
                });
            }
            if (!this.props.singleFrame){
                let allAnis =  options.editorFrames as pxt.sprite.BitmapData[][];//pxt.sprite.BitmapData[][]
                let allFrames:any = [];
                allAnis.forEach(ani => {
                    let frames =  ani.map(b => pxt.sprite.Bitmap.fromData(b));
                    let renderFrames = frames.map(frame => ({ bitmap: frame.data() }));
                    allFrames.push(renderFrames);
                    
                });
                this.animationItems = allFrames;
            }

        }
    }

    getValue() {
        if (this.ref) {
            return (this.props.singleFrame ? this.ref.getCurrentFrame() : this.ref.getAnimation()) as U;
        }
        return null;
    }

    getPersistentData() {
        if (this.ref) {
            return this.ref.getPersistentData();
        }

        return null;
    }

    restorePersistentData(oldValue: any) {
        if (this.ref) {
            this.ref.restorePersistentData(oldValue);

            if (this.options && this.options.disableResize) {
                this.ref.disableResize();
            }
        }
    }

    onResize() {
        if (this.ref) {
            this.ref.onResize();
        }
    }

    protected initSingleFrame(value: pxt.sprite.Bitmap, options?: any) {
        this.ref.initSingleFrame(value);

        if (options.disableResize) {
            this.ref.disableResize();
        }
    }

    protected initAnimation(value: pxt.sprite.AnimationData, options?: any) {
        if (!value) {
            value = {
                frames: [new pxt.sprite.Bitmap(16, 16).data()],
                interval: 100
            };
        }

        this.ref.initAnimation(value.frames.map(b => pxt.sprite.Bitmap.fromData(b)), value.interval, options.mainIndex);
        // this.ref.initAnimation(value.frames.map(b => pxt.sprite.Bitmap.fromData(b)), value.interval);

        if (options.disableResize) {
            this.ref.disableResize();
        }
    }

    protected toggleGallery = () => {
        if (this.state.galleryVisible) {
            tickImageEditorEvent("gallery-hide");
        }
        else {
            tickImageEditorEvent("gallery-show");
        }
        this.setState({
            galleryVisible: !this.state.galleryVisible
        });
    }

    protected onGalleryItemSelect = (item: pxt.sprite.GalleryItem) => {
        if (this.ref) {
            this.ref.setCurrentFrame(pxt.sprite.getBitmap(this.blocksInfo, item.qName));
        }

        tickImageEditorEvent("gallery-selection");

        this.setState({
            galleryVisible: false,
            segmentPos:"left"
        });
    }

    protected onAnimationItemSelect = (item: pxt.sprite.ImageState[]) => {
        if (this.ref) {
            this.ref.setCurrentMainFrame(item);
        }

        tickImageEditorEvent("animations-selection");

        this.setState({
            galleryVisible: false,
            segmentPos:"left"
        });
    }

    

    protected onDoneClick = () => {
        if (this.closeEditor) this.closeEditor();
    }
}

interface ImageEditorGalleryProps {
    items?: pxt.sprite.GalleryItem[];
    hidden: boolean;
    onItemSelected: (item: pxt.sprite.GalleryItem) => void;
    filterString?: string;
}

class ImageEditorGallery extends React.Component<ImageEditorGalleryProps, {}> {
    protected handlers: (() => void)[] = [];

    render() {
        let { items, hidden, filterString } = this.props;

        if (filterString) {
            items = pxt.sprite.filterItems(items, filterString.split(" "));
        }

        return <div className={`image-editor-gallery ${items && !hidden ? "visible" : ""}`}>
            {items && items.map((item, index) =>
                <button
                    key={index}
                    id={`:${index}`}
                    role="menuitem"
                    className="sprite-gallery-button sprite-editor-card"
                    title={item.alt}
                    data-value={item.qName}
                    onClick={this.clickHandler(index)}>
                        <img src={item.src} data-value={item.qName} alt={item.alt}/>
                </button>
            )}
        </div>
    }

    clickHandler(index: number) {
        if (!this.handlers[index]) {
            this.handlers[index] = () => {
                let { items, onItemSelected, filterString, hidden } = this.props;

                if (filterString) {
                    items = pxt.sprite.filterItems(items, filterString.split(" "));
                }

                if (!hidden && items && items[index]) {
                    onItemSelected(items[index]);
                }
            }
        }

        return this.handlers[index];
    }
}

interface ImageEditorAnimationProps{
    items:any[];
    hidden: boolean;
    onItemSelected: (item: pxt.sprite.ImageState[]) => void;

    //onItemSelected: (item: pxt.sprite.GalleryItem) => void;

}

class ImageEditorAnimations extends React.Component<ImageEditorAnimationProps,{}>{
    protected handlers: (() => void)[] = [];

    render() {
        let { items, hidden } = this.props;
        let colors = [
            "#000000",
            "#ffffff",
            "#ff2121",
            "#ff93c4",
            "#ff8135",
            "#fff609",
            "#249ca3",
            "#78dc52",
            "#003fad",
            "#87f2ff",
            "#8e2ec4",
            "#a4839f",
            "#5c406c",
            "#e5cdc4",
            "#91463d",
            "#000000"
        ]
        // if (filterString) {
        //     items = pxt.sprite.filterItems(items, filterString.split(" "));
        // }
        //frames: pxt.sprite.ImageState[];
        return <div className={`image-editor-gallery ${items && !hidden ? "visible" : ""}`}>
            {items && items.map((item, index) =>
                <button
                    key={index}
                    id={`:${index}`}
                    role="menuitem"
                    className="sprite-gallery-button sprite-editor-card"
                    title={item.alt}
                    data-value={item.qName}
                    onClick={this.clickHandler(index)}>
                        <TimelineFrame frames={true ? item : [item[0]]} colors={colors} interval={100} animating={true} />
                </button>
            )}
        </div>
    }

    clickHandler(index: number) {
        if (!this.handlers[index]) {
            this.handlers[index] = () => {
                let { items, onItemSelected, hidden } = this.props;
        
                if (!hidden && items && items[index]) {
                    onItemSelected(items[index]);
                }
            }
        }

        return this.handlers[index];
    }
}

function tickImageEditorEvent(event: string) {
    pxt.tickEvent("image.editor", {
        action: event
    });
}

function parseImageArrayString(str: string) {
    str = str.replace(/[\[\]]/mg, "");
    return str.split(",").map(s => pxt.sprite.imageLiteralToBitmap(s));
}