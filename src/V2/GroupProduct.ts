import { AbstractProduct } from "./AbstractProduct";
export class GroupProduct extends AbstractProduct {
    constructor(name: string, sku: string) {
        super(name, sku);
        this._type = "group";
    }
}
