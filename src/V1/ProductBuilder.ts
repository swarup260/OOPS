import { ProductBuilderInterFace } from "./ProductBuilderInterFace";
import { Product } from "./product";

export class ProductBuilder implements ProductBuilderInterFace {
  public name: string;
  public sku: string;
  public id: number;
  public qty: number;
  public price: number;
  public type: string;
  constructor(name: string) {
    this.name = name;
  }
  setSku(sku: string): ProductBuilder {
    this.sku = sku;
    return this;
  }
  setId(id: number): ProductBuilder {
    this.id = id;
    return this;
  }
  setQty(qty: number): ProductBuilder {
    this.qty = qty;
    return this;
  }
  setPrice(price: number): ProductBuilder {
    this.price = price;
    return this;
  }
  makeSimpleProduct(): ProductBuilder {
    this.type = "simple";
    return this;
  }
  makeConfigurableProduct(): ProductBuilder {
    this.type = "configurable";
    return this;
  }
  makeGroupProduct(): ProductBuilder {
    this.type = "group";
    return this;
  }
  makeGiftProduct(): ProductBuilder {
    this.type = "gift";
    return this;
  }
  makeVirtualProduct(): ProductBuilder {
    this.type = "virtual";
    return this;
  }
  makeDownloadableProduct(): ProductBuilder {
    this.type = "downloadable";
    return this;
  }
  build(): Product {
    return new Product(this);
  }
}
