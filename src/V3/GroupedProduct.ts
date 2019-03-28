import { Product, attributeSetConfig } from "./product";
import { SimpleProduct } from "./SimpleProduct";
import { productAttributeInterface } from "./productAttributeInterface";

class GroupedProduct extends Product {
  private _groupChildProduct: SimpleProduct[];
  constructor(productAttribute: productAttributeInterface) {
    super(productAttribute);
    this.type = "grouped";
    this.attributeSet = [];
  }
  /* getters and setters */
  public getType(): string {
    return this.type;
  }

  public get groupChildProduct(): SimpleProduct[] {
    return this._groupChildProduct;
  }
  public set groupChildProduct(value: SimpleProduct[]) {
    this._groupChildProduct = value;
  }
  /* group */
  public addChildProduct(product: SimpleProduct) {
    this._groupChildProduct.push(product);
    this.setAttribute({
      key: "groupedChildProduct",
      value: this._groupChildProduct
    });
  }
}

export { GroupedProduct };
