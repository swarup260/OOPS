import { Product, attributeSetConfig } from "./product";
import { SimpleProduct } from "./SimpleProduct";
import { productAttributeInterface } from "./productAttributeInterface";
/* Configurable */
class ConfigurableProduct extends Product {
  private _configurableAttributeList: string[];
  private _configurableChildProduct: SimpleProduct[];
  constructor(productAttribute: productAttributeInterface) {
    super(productAttribute);
    this.type = "configurable";
    this.attributeSet = [];
    this._configurableAttributeList = [];
    this._configurableChildProduct = [];
  }
  /* getters and setters */
  public getType(): string {
    return this.type;
  }
  public get configurableAttributeList(): string[] {
    return this._configurableAttributeList;
  }
  public set configurableAttributeList(value: string[]) {
    this._configurableAttributeList = value;
  }
  public get configurableChildProduct(): SimpleProduct[] {
    return this._configurableChildProduct;
  }
  public set configurableChildProduct(value: SimpleProduct[]) {
    this._configurableChildProduct = value;
  }
  /* configurable */
  public setConfigurableOptions(value: string) {
    this._configurableAttributeList.push(value);
    this.setAttribute({
      key: "configurableAttribute",
      value: this._configurableAttributeList
    });
  }
  public getConfigurableOptions(): attributeSetConfig | boolean {
    return this.getAttributeByKey("configurableAttribute");
  }
  public addChildProduct(product: SimpleProduct) {
    this._configurableChildProduct.push(product);
    this.setAttribute({
      key: "configurableChildProduct",
      value: this._configurableChildProduct
    });
  }
}

export { ConfigurableProduct };
