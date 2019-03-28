import { AbstractProduct } from "./AbstractProduct";
import { SimpleProduct } from "./SimpleProduct";
import { ConfigurableProduct } from "./ConfigurableProduct";
import { GroupProduct } from "./GroupProduct";
import { BundleProduct } from "./BundleProduct";
import { GiftProduct } from "./GiftProduct";
import { DownloadableProduct } from "./DownloadableProduct";

enum productType {
  "simple",
  "congigurable",
  "grouped",
  "bundle",
  "gift",
  "downloadable"
}

export class ProductFactory {
  public static createProduct(
    name: string,
    sku: string,
    type: productType
  ): AbstractProduct {
    switch (type) {
      case productType.simple:
        return new SimpleProduct(name, sku);
        break;
      case productType.congigurable:
        return new ConfigurableProduct(name, sku);
        break;
      case productType.grouped:
        return new GroupProduct(name, sku);
        break;
      case productType.bundle:
        return new BundleProduct(name, sku);
        break;
      case productType.gift:
        return new GiftProduct(name, sku);
        break;
      case productType.downloadable:
        return new DownloadableProduct(name, sku);
        break;
      default:
        return new SimpleProduct(name, sku);
        break;
    }
  }
}
