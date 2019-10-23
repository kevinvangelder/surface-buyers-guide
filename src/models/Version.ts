import { types } from "mobx-state-tree"
import { differenceInDays, format } from "date-fns"

export const VersionModel = types
  .model("VersionModel")
  .props({
    versionName: types.string,
    releaseDate: types.Date,
    priceLow: types.maybeNull(types.number),
    price: types.maybeNull(types.number),
    priceHigh: types.maybeNull(types.number),
    daysUntilNextRelease: types.maybeNull(types.number),
  }).views(self => ({
    get nextReleaseDays() {
      if (self.daysUntilNextRelease) return self.daysUntilNextRelease
      return differenceInDays(new Date(), self.releaseDate) >= 0 ? differenceInDays(new Date(), self.releaseDate) : 0
    },
    get prettyDate() {
      return format(self.releaseDate, "MMM YYYY")
    }
  }))