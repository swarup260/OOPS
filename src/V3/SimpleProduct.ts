import { Product, attributeSetConfig } from "./product";
import { productAttributeInterface } from "./productAttributeInterface";

/* Simple Product */
class SimpleProduct extends Product {
  protected attributeSet: attributeSetConfig[];
  constructor(productAttribute: productAttributeInterface) {
    super(productAttribute);
    this.type = "simple";
    this.attributeSet = [];
  }
  /* getters and setters */
  public getType(): string {
    return this.type;
  }
  /* custom attribute */
  public setCustomOption(attributeSetConfig: attributeSetConfig) {
    this.setAttribute(attributeSetConfig);
    const isCustomFlag: attributeSetConfig = {
      key: "isCustomFlag",
      value: "true"
    };
    this.setAttribute(isCustomFlag);
  }
  public isCustom(): boolean | attributeSetConfig {
    return this.getAttributeByKey("isCustomFlag");
  }
}

export { SimpleProduct };
