import { Product, attributeSetConfig } from "../product";

class Catalog {
  private _productCollection: Product[];
  private _attributeSet: attributeSetConfig[];

  constructor(public name: string) {
    this._productCollection = [];
    this._attributeSet = [];
  }

  public addProduct(product: Product): void {
    this._productCollection.push(product);
  }

  public get productCollection(): Product[] {
    return this._productCollection;
  }

  public setAttribute(attributeSetConfig: attributeSetConfig) {
    this._attributeSet.push(attributeSetConfig);
  }

  public getAllAttribute(): attributeSetConfig[] {
    return this._attributeSet;
  }
  public getAttributeByKey(key: string): boolean | attributeSetConfig {
    for (const attribute of this._attributeSet) {
      if (key == attribute.key) {
        return attribute;
      }
    }
    return false;
  }
  /* helper  */
  /**
   * toString
   */
  public toString(): string {
    return JSON.stringify(this, undefined, 3);
  }
}

export { Catalog };
