import { productAttributeInterface } from "./productAttributeInterface";

interface attributeSetConfig {
  key: string;
  value: any;
}

interface productConfig {
  name: string;
  sku: string;
  id: number;
  qty: number;
  status: boolean;
  price: number;
  specialPrice: number;
  getType(): string;
  setAttribute(attributeSetConfig: attributeSetConfig): void;
  getAllAttribute(): attributeSetConfig[];
  getAttributeByKey(key: string): boolean | attributeSetConfig;
}

abstract class Product implements productConfig {
  public name: string;
  public sku: string;
  protected type: string;
  public id: number;
  public qty: number;
  public status: boolean;
  public price: number;
  public specialPrice: number;
  protected attributeSet: attributeSetConfig[];

  constructor(productAttribute: productAttributeInterface) {
    this.name = productAttribute.name;
    this.sku = productAttribute.sku;
    this.price = productAttribute.price;
    this.qty = productAttribute.qty || 0;
    this.status = productAttribute.status || true;
    this.specialPrice = productAttribute.specialPrice || 0.0;
  }

  getType(): string {
    throw new Error("Type Not Define");
  }

  public setAttribute(attributeSetConfig: attributeSetConfig) {
    this.attributeSet.push(attributeSetConfig);
  }

  public getAllAttribute(): attributeSetConfig[] {
    return this.attributeSet;
  }
  public getAttributeByKey(key: string): boolean | attributeSetConfig {
    for (const attribute of this.attributeSet) {
      if (key == attribute.key) {
        return attribute;
      }
    }
    return false;
  }

  /* helper function */
  /**
   * toString
   */
  public toString(): string {
    return JSON.stringify(this, undefined, 3);
  }
}

export { attributeSetConfig, productConfig, Product };
