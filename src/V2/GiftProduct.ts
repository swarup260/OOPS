import { AbstractProduct } from "./AbstractProduct";
export class GiftProduct extends AbstractProduct {
    constructor(name: string, sku: string) {
        super(name, sku);
        this._type = "gift";
    }
}
