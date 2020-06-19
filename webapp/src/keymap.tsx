/// <reference path="../../built/pxtlib.d.ts" />

import * as React from "react";
import * as data from "./data";
import * as sui from "./sui";

type ISettingsProps = pxt.editor.ISettingsProps;

interface KeymapState {
    above?: boolean;
}

interface KeymapData {
    title: string;
    map: { [key: string]: string[] };
};

const _data: { [key: string]: KeymapData[] } = {
    "arcade": [ {
            title: "player 1",
            map: {
                "up": ["↑", "W"],
                "down": ["↓", "S"],
                "left": ["→", "A"],
                "right": ["←", "D"],
                "a": ["Z", "space"],
                "b": ["X", "enter"]
            }
        },
        {
            title: "player 2",
            map: {
                "up": ["I"],
                "down": ["K"],
                "left": ["J"],
                "right": ["L"],
                "a": ["U"],
                "b": ["O"]
            }
        } ],
    "xtronpro": [ {
            title: "key map",
            map: {
                "up": ["↑", "W"],
                "down": ["↓", "S"],
                "left": ["→", "A"],
                "right": ["←", "D"],
                "a": ["Z", "space"],
                "b": ["X", "enter"]
            }
        }]
    }
export class Keymap extends data.Component<ISettingsProps, KeymapState> {
    private keymap: KeymapData[];
    constructor(props: ISettingsProps) {
        super(props);

        const board = pxt.appTarget && pxt.appTarget.appTheme
            && pxt.appTarget.appTheme.boardName.toLowerCase();
        this.keymap = board && _data[board];
    }

    componentDidMount() {
        const el = this.refs["keymap"] as HTMLDivElement;
        if (el.parentElement.clientHeight < el.parentElement.scrollHeight) {
            this.setState({ above: true });
        } else {
            this.setState({ above: false });
        }
    }

    hideKeymap = () => {
        this.props.parent.showKeymap(false);
    }

    renderCore() {
        return <div className={`keymap ${this.state.above ? 'above' : ''}`} ref="keymap">
            <i className="icon large close remove circle" role="presentation" onClick={this.hideKeymap}></i>
            {this.keymap && this.keymap.map((col, i) => {
                return <div key={i}>
                    <span className="keymap-title">{col.title}</span>
                    {
                        Object.keys(col.map).map( (el, j) => {
                            return <div key={j}>
                                {col.map[el].map( (key, j) => {
                                    return <div className="keymap-key" key={j}>{key}</div>
                                })}
                                <span className="keymap-name">{el}</span>
                            </div>
                        })
                    }
                </div>
            })}
        </div>;
    }
}