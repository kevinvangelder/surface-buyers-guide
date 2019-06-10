import { types } from "mobx-state-tree"
import { ProductModel } from "./Product"

export const ProductStore = types
  .model("ProductStore")
  .props({
    products: types.array(ProductModel),
  }).views(self => ({
    get tabletLaptops() {
      return self.products.filter(p => p.category === "Tablet/Laptop")
    },
    get desktopHub() {
      return self.products.filter(p => p.category === "Desktop/Hub")
    },
    get accessories() {
      return self.products.filter(p => p.category === "Accessories")
    }
  }))
