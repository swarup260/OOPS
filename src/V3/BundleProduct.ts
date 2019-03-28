import { attributeSetConfig, Product } from "./product";
import { SimpleProduct } from "./SimpleProduct";
import { productAttributeInterface } from "./productAttributeInterface";

class BundleProduct extends Product {
  private _bundleAttributeList: string[];
  private _bundleChildProduct: SimpleProduct[];
  constructor(productAttribute: productAttributeInterface) {
    super(productAttribute);
    this.type = "bundle";
    this.attributeSet = [];
    this._bundleAttributeList = [];
  }
  /* getters and setters */
  public getType(): string {
    return this.type;
  }

  public get bundleAttributeList(): string[] {
    return this._bundleAttributeList;
  }
  public set bundleAttributeList(value: string[]) {
    this._bundleAttributeList = value;
  }
  public get bundleChildProduct(): SimpleProduct[] {
    return this._bundleChildProduct;
  }
  public set bundleChildProduct(value: SimpleProduct[]) {
    this._bundleChildProduct = value;
  }
  /* bundle */
  public setbundleOptions(value: string) {
    this._bundleAttributeList.push(value);
    this.setAttribute({
      key: "bundleAttribute",
      value: this._bundleAttributeList
    });
  }
  public getBundleOptions(): attributeSetConfig | boolean {
    return this.getAttributeByKey("bundleAttribute");
  }
  public addChildProduct(product: SimpleProduct) {
    this._bundleChildProduct.push(product);
    this.setAttribute({
      key: "bundleChildProduct",
      value: this._bundleChildProduct
    });
  }
}

export { BundleProduct };
