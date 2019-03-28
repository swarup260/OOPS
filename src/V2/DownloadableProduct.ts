import { AbstractProduct } from "./AbstractProduct";
export class DownloadableProduct extends AbstractProduct {
    constructor(name: string, sku: string) {
        super(name, sku);
        this._type = "downloadable";
    }
}
