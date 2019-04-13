import { SimpleProduct } from "./SimpleProduct";
import { SimpleProduct } from "./SimpleProduct";
import { ConfigurableProduct } from "./ConfigurableProduct";
import { BundleProduct } from "./BundleProduct";
import { GroupedProduct } from "./GroupedProduct";
import { Product } from "./product";
import { productAttributeInterface } from "./productAttributeInterface";
import { AttributeSetsMixins } from "./utils/Mixins";

enum ProductType {
  Simple = "simple",
  Configurable = "configurable",
  GroupedProduct = "grouped",
  BundleProduct = "bundle"
}

class ProductFactory {
  public static createProduct(
    productAttribute: productAttributeInterface,
    type: ProductType
  ): any {
    switch (type) {
      case ProductType.Simple:
        const SimpleP = AttributeSetsMixins(SimpleProduct);
        return new SimpleP(productAttribute);
      case ProductType.Configurable:
        const ConfigurableP = AttributeSetsMixins(ConfigurableProduct);
        return new ConfigurableP(productAttribute);
      case ProductType.BundleProduct:
        const BundleP = AttributeSetsMixins(BundleProduct);
        return new BundleP(productAttribute);
      case ProductType.GroupedProduct:
        const GroupedP = AttributeSetsMixins(GroupedProduct);
        return new GroupedP(productAttribute);
      default:
        const SimpleD = AttributeSetsMixins(SimpleProduct);
        return new SimpleD(productAttribute);
    }
  }
}

export { ProductFactory, ProductType };
