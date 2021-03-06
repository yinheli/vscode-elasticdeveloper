'use strict'

import { TextToken } from "./textToken";

export class Entity {

    private _textTokens:TextToken[] = [];

    public get textTokens():TextToken[] {
        return this._textTokens;
    }

    public addTextToken(textToken:TextToken) {
        if(textToken.hasText) {
            this._textTokens.push(textToken);
        }
    }
}