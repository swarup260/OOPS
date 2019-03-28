export abstract class AbstractProduct {
  public name: string;
  public sku: string;
  public id: number;
  protected _qty: number;
  public price: number;
  public specialPrice: number;
  public status: boolean;
  public creationDate: Date;
  public updationDate: Date;
  protected _type: string;
  protected _attributSets: [];

  constructor(name: string, sku: string) {
    this.name = name;
    this.sku = sku;
    this.creationDate = new Date();
    this.updationDate = new Date();
  }
  public get type(): string {
    return this._type;
  }

  public get qty(): number {
    return this._qty;
  }
  public set qty(value: number) {
    this._qty = value;
  }

  public toString(): string {
    return JSON.stringify(this, undefined, 3);
  }
}
