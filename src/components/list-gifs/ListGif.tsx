import React, {Component} from "react";
import {GifService} from "../../services/gif.service";

export class ListGif extends Component {

    private _gifService: GifService;

    constructor(props: any) {
        super(props);
        this._gifService = new GifService();
        this.handleService = this.handleService.bind(this);

    }

    async handleService() {
        const all = await this._gifService.getAll();
        console.log(all);
    }

    render() {
        return (
            <div>
                <h1>List Gif</h1>
                <button onClick={this.handleService}>Test</button>
            </div>
        )
    }
}
