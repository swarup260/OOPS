import { AbstractProduct } from "./AbstractProduct";

export class ConfigurableProduct extends AbstractProduct {
  constructor(name: string, sku: string) {
    super(name, sku);
    this._type = "congigurable";
  }
}
