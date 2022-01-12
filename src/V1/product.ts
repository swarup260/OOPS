import { ProductBuilder } from "./ProductBuilder";
import { ProductBuilderInterFace } from "./ProductBuilderInterFace";

export class Product {
  public name: string;
  public sku: string;
  public id: number;
  public qty: number;
  public price: number;
  public specialPrice: number;
  public status: Boolean;
  public creationDate: Date;
  public updationDate: Date;
  public type: string;
  private _attributSets: any;

  constructor(product: ProductBuilderInterFace) {
    this.name = product.name;
    this.sku = product.sku;
    this.id = product.id;
    this.price = product.price;
    this.qty = product.qty || 0;
    this.specialPrice = product.specialPrice || 0.0;
    this.status = product.status || true;
    this.creationDate = product.creationDate || new Date();
    this.updationDate = product.updationDate || new Date();
    this.type = product.type || "simple";
    this._attributSets = product.attributSets || new Array();
  }

  public addAttribute(Attribute): Product {
    this._attributSets.push({
      attributeType: Attribute.key,
      attribueValue: Attribute.value
    });
    return this;
  }

  public get _attributeSets(): any {
    return this._attributSets;
  }

  public getAttributeValue(key: string): any {
    for (const attribute of this._attributSets) {
      if (attribute.attributeType == key) {
        return attribute.attribueValue;
      }
    }
  }

  public toString(): string {
    return JSON.stringify(this, undefined, 3);
  }
}
