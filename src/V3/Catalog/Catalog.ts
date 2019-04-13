import { Product, attributeSetConfig } from "../product";
import { AttributeSetsMixins } from "../utils/Mixins";

class Catalog {
  private _productCollection: Product[];
  // private _attributeSet: attributeSetConfig[];

  constructor(public name: string) {
    this._productCollection = [];
    // this._attributeSet = [];
  }

  public addProduct(product: Product): void {
    this._productCollection.push(product);
  }

  public get productCollection(): Product[] {
    return this._productCollection;
  }

  /* helper  */
  /**
   * toString
   */
  public toString(): string {
    return JSON.stringify(this, undefined, 3);
  }
}

const Category = AttributeSetsMixins(Catalog);
console.log(typeof Catalog);

export { Category };
