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
      return self.daysUntilNextRelease || differenceInDays(new Date(), self.releaseDate)
    },
    get prettyDate() {
      return format(self.releaseDate, "MMM YYYY")
    }
  }))