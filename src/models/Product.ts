import { types } from "mobx-state-tree"
import { VersionModel } from "./Version"

export const ProductModel = types
  .model("ProductModel")
  .props({
    familyName: types.string,
    versions: types.array(VersionModel),
    category: types.enumeration("Category", ["Tablet/Laptop", "Desktop/Hub", "Accessories"]),
    url: types.maybe(types.string),
    description: types.maybe(types.string),
    reviewUrl: types.maybe(types.string),
    amazonUrl: types.maybe(types.string),
    rssUrl: types.maybe(types.string),
    rating: types.maybe(types.number),
    designRating: types.maybe(types.number),
    featuresRating: types.maybe(types.number),
    performanceRating: types.maybe(types.number),
    batteryRating: types.maybe(types.number),
    ratingBlurb: types.maybe(types.string),
    soundRating: types.maybe(types.number),
    valueRating: types.maybe(types.number)
  }).views(self => ({
    get averageDays() {
      if (!self.versions) return 0
      if (self.versions.length === 1) return self.versions[0].nextReleaseDays
      let sum = 0
      self.versions.slice(0, -1).map(v => sum += v.nextReleaseDays)
      const average = Math.round(sum / (self.versions.length -1))
      if (self.versions[self.versions.length - 1].nextReleaseDays > average) {
        let newSum = 0
        self.versions.map(v => newSum += v.nextReleaseDays)
        return Math.round(newSum / self.versions.length)
      }
      return average
    },
    get maximumDays() {
      return Math.max(...self.versions.map(v => v.nextReleaseDays))
    },
    get currentDays() {
      return self.versions[self.versions.length - 1].nextReleaseDays
    },
    get currentVersion() {
      return self.versions[self.versions.length - 1]
    }
  })).views(self => ({
    get recommendation() {
      if (self.versions.length === 1) return { recommendation: "neutral", rationale: "Unknown Product Cycle" }
      const progress = Math.round((self.currentDays / self.averageDays) * 100)
      if (progress < 45) {
        return { recommendation: "buy", rationale: "Recently Updated" }
      } else if (progress >= 45 && progress < 60) {
        return { recommendation: "neutral", rationale: "Mid-product Cycle" }
      } else if (progress >= 60 && progress < 80) {
        return { recommendation: "caution", rationale: "Nearing End of Cycle" }
      } else if (progress >= 80 && progress <= 100) {
        return {recommendation: "wait", rationale: "Updates Soon" }
      } else {
        return {recommendation: "overdue", rationale: "Updates Overdue" }
      }
    },
  }))


  export type Product = typeof ProductModel.Type
  export type ProductSnapshot = typeof ProductModel.SnapshotType