import { SimpleProduct } from "./SimpleProduct";
import { ConfigurableProduct } from "./ConfigurableProduct";
import { BundleProduct } from "./BundleProduct";
import { GroupedProduct } from "./GroupedProduct";
import { Product } from "./product";
import { productAttributeInterface } from "./productAttributeInterface";

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
  ): Product {
    switch (type) {
      case ProductType.Simple:
        return new SimpleProduct(productAttribute);
      case ProductType.Configurable:
        return new ConfigurableProduct(productAttribute);
      case ProductType.BundleProduct:
        return new BundleProduct(productAttribute);
      case ProductType.GroupedProduct:
        return new GroupedProduct(productAttribute);
      default:
        return new SimpleProduct(productAttribute);
    }
  }
}

export { ProductFactory, ProductType };
