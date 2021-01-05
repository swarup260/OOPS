import { expect } from "chai";
import { ProductFactory, ProductType } from "../../src/V3/ProductFactory";
import { SimpleProduct } from "../../src/V3/SimpleProduct";
import { ConfigurableProduct } from "../../src/V3/ConfigurableProduct";
import { BundleProduct } from "../../src/V3/BundleProduct";
import { GroupedProduct } from "../../src/V3/GroupedProduct";

describe("Product", () => {
  it("Function should return a instace of SimpleProduct", () => {
    const product = ProductFactory.createProduct(
      {
        name: "choco",
        sku: "456",
        price: 15
      },
      ProductType.Simple
    );
    expect(product).instanceof(SimpleProduct);
  });
  it("Function should return a instace of Configurable Product", () => {
    const product = ProductFactory.createProduct(
      {
        name: "choco",
        sku: "456",
        price: 15
      },
      ProductType.Configurable
    );
    expect(product).instanceof(ConfigurableProduct);
  });
  it("Function should return a instace of GroupProduct", () => {
    const product = ProductFactory.createProduct(
      {
        name: "choco",
        sku: "456",
        price: 15
      },
      ProductType.GroupedProduct
    );
    expect(product).instanceof(GroupedProduct);
  });
  it("Function should return a instace of BundleProduct", () => {
    const product = ProductFactory.createProduct(
      {
        name: "choco",
        sku: "456",
        price: 15
      },
      ProductType.BundleProduct
    );
    expect(product).instanceof(BundleProduct);
  });
});
