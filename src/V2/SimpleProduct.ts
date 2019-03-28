import { AbstractProduct } from "./AbstractProduct";
export class SimpleProduct extends AbstractProduct {
  constructor(name: string, sku: string) {
    super(name, sku);
    this._type = "simple";
    this._attributSets = [];
  }
  /* setter and getter function */

  public get price(): number {
    return this.price;
  }

  public get specialPrice(): number {
    return this.specialPrice;
  }
  public set specialPrice(specialPrice: number) {
    this.specialPrice = specialPrice;
  }

  public get status(): boolean {
    return this.status;
  }

  public get qty(): number {
    return this._qty;
  }
  public set qty(value: number) {
    this._qty = value;
  }
  public get type(): string {
    return this.type;
  }

  /**
   * getAllAttribute
   */
  public getAllAttribute() {
    return this._attributSets;
  }

  /* public getAttributeKey(key: string) {
    for (const attribute of this._attributSets) {
      if (attribute.key == key) {
        return attribute.value;
      }
    }
  }
  public setAttribut(key: string, value: any) {
    this._attributSets.push({ key: key, value: value });
  } */

  /* helper function  */

  public toString(): string {
    return JSON.stringify(this, undefined, 3);
  }
}
