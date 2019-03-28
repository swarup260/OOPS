import { AbstractProduct } from "./AbstractProduct";
export class BundleProduct extends AbstractProduct {
    constructor(name: string, sku: string) {
        super(name, sku);
        this._type = "bundle";
    }
}
