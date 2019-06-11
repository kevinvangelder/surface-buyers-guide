import * as React from "react"
import { color } from "../../theme"
import { Text, PrimaryButton, Separator, Button, Link } from "../../../node_modules/office-ui-fabric-react";
import { Label } from "../label";
import { Product } from "../../models";

const SECTION = {
  padding: "24px",
  borderRadius: "2px",
  boxShadow: "0 1.6px 3.6px 0 rgba(0,0,0,0.132),0 0.3px 0.9px 0 rgba(0,0,0,0.108)",
  display: "block",
  width: "100%",
  marginBottom: "24px",
  backgroundColor: "#ffffff"
}
const DAYS: any = {
  overdue: {
    color: color.darkTan,
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: 10
  },
  wait: {
    color: color.shiraz,
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: 10
  },
  buy: {
    color: color.limeade,
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: 10
  },
  caution: {
    color: color.lightning,
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: 10
  },
  neutral: {
    color: color.gray,
    fontWeight: "700",
    alignSelf: "center",
    marginLeft: 10
  }
}
const ROW: any = {
  flexDirection: "row",
  display: "flex"
}
const FLEX_LEFT_FIXED: any = {
  flexDirection: "row",
  display: "flex",
  width: 220
}
const IMAGES: any = {
  "Surface Pro": require("../../images/Surface-Pro-6.jpg"),
  "Surface Laptop": require("../../images/Surface-Laptop-2.jpg"),
  "Surface Book": require("../../images/Surface-Book-2.png"),
  "Surface Go": require("../../images/Surface-Go-6.png"),
  "Surface Studio": require("../../images/Surface-Studio-2.png"),
  "Surface Hub": require("../../images/Surface-Hub-2S.png"),
  "Surface Headphones": require("../../images/Surface-Headphones.png"),
  "Surface Pen": require("../../images/Surface-Pen.jpg"),
  "Surface Dial": require("../../images/Surface-Dial.png"),
  "Surface Signature Type Cover": require("../../images/Signature-Type-Cover.jpg"),
  "Surface Pro Type Cover": require("../../images/Surface-Type-Cover.jpg"),
  "Surface Go Signature Type Cover": require("../../images/Surface-Go-Signature-Type-Cover.jpg"),
  "Surface Keyboard": require("../../images/Surface-Keyboard.png"),
  "Surface Mouse": require("../../images/Surface-Mouse.png"),
  "Surface Mobile Mouse": require("../../images/Surface-Mobile-Mouse.jpg"),
  "Surface Arc Mouse": require("../../images/Surface-Arc-Mouse.png"),
}
const ALT: any = {
  buy: "Buy now, recently updated",
  neutral: "Neutral, mid-product cycle",
  caution: "Caution, nearing end of product cycle",
  wait: "Wait, updates soon",
  overdue: "Don't buy, updates overdue"
}

interface ProductSectionProps {
  product: Product,
  k: number
}

export class ProductSection extends React.Component<ProductSectionProps, {}> {

  render() {
    const { product, k } = this.props
    return (
      <section style={SECTION} key={k}>
        <div style={ROW}>
          {IMAGES[product.familyName] && <img src={IMAGES[product.familyName]} style={{width: 400, objectFit: "cover", objectPosition: "center"}} alt={`Should I buy ${product.currentVersion.versionName}? Recommendation: ${ALT[product.recommendation.recommendation]}`} />}
          <div style={{flex: 1, marginLeft: 16}}>
            <Text variant="xxLarge" block>{product.familyName}</Text>
            <Label preset={product.recommendation.recommendation} rationale={product.recommendation.rationale} /><br />
            {product.currentVersion.priceLow && product.currentVersion.priceHigh && <Text variant="large" style={{marginBottom: 16}}>${product.currentVersion.priceLow} - ${product.currentVersion.priceHigh}</Text>}
            {product.currentVersion.price && <Text variant="large" style={{marginBottom: 16}} block>${product.currentVersion.price}</Text>}
            {product.description && <Text block style={{marginBottom: 16}}>{product.description}</Text>}
            {product.url && <PrimaryButton href={product.url}>Buy Now</PrimaryButton>}
            {product.amazonUrl && <Link href={product.amazonUrl} style={{marginLeft: 16, paddingTop: 4, display: "inline-block"}}>Amazon</Link>}
          </div>
        </div>
        <Separator />
        <div style={ROW}>
          <div style={{paddingRight: 10, flex: 1}}>
            <div style={ROW}>
              <div style={FLEX_LEFT_FIXED}>
                <Text variant="xLarge" style={{alignSelf: "center", fontWeight: 500}}>Days since last release</Text>
              </div>
              <div style={{width: 300}}>
                <Text block>{product.currentVersion.versionName}: {product.currentVersion.prettyDate}</Text>
                <progress value={product.currentDays} max={product.maximumDays} className={product.recommendation.recommendation} style={{width: 250}} /><Text variant="xLarge" style={DAYS[product.recommendation.recommendation]}>{product.currentDays}</Text>
              </div>
            </div>
            <Separator />
            <div style={ROW}>
              <div style={FLEX_LEFT_FIXED}>
                <Text variant="xLarge" style={{fontWeight: 500}}>Average</Text>
              </div>
              <div style={{width: 300}}>
                <progress value={product.averageDays} max={product.maximumDays} style={{width: 250, marginTop: 8}} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.averageDays}</Text>
              </div>
            </div>
            <Separator />
            {product.versions.reverse().slice(1).map((v: any, k: number) => {
              return (
                <div style={ROW}>
                  <div style={FLEX_LEFT_FIXED}>
                    {k === 0 && <Text variant="xLarge" style={{fontWeight: 500}}>Previous Releases</Text>}
                  </div>
                  <div style={{marginBottom: 16, width: 300}}>
                    <Text block>{v.versionName}: {v.prettyDate}</Text>
                    <progress value={v.nextReleaseDays} max={product.maximumDays} style={{width: 250}} /><Text variant="xLarge" style={{marginLeft: 10}}>{v.nextReleaseDays}</Text>
                  </div>
                </div>
              )
            })}
          </div>
          <Separator vertical />
          {product.rating && this.renderProductReview()}
          {!product.rating && this.renderReviewUnavailable()}
        </div>
      </section>
    )
  }

  ratingStyle = (rating: number | null | undefined): string => {
    if (!rating || rating < 2.5) {
      return "overdue"
    } else if (rating >= 2.5 && rating < 5) {
      return "wait"
    } else if (rating >= 5 && rating < 7.5) {
      return "caution"
    } else if (rating >= 7.5) {
      return "buy"
    }
    return "overdue"
  }

  renderReviewUnavailable = () => {
    return (
      <div style={{marginLeft: 16, width: 406}}>
        <Text variant="xLarge" style={{fontWeight: 500}} block>Product Review Unavailable</Text>
      </div>
    )
  }

  renderProductReview = () => {
    const { product } = this.props
    return (
      <div style={{marginLeft: 16}}>
        <Text variant="xLarge" style={{fontWeight: 500}} block>Product Review</Text>
        <Text block style={{marginTop: 10}}>By <Link href={product.reviewUrl}>CNet</Link></Text>
        <Text block style={{marginTop: 10}}>{product.ratingBlurb}</Text>
        <Text variant="large" block style={{marginTop: 10}}>Overall</Text>
        {product.rating && <div style={ROW}>
          <progress value={product.rating} max={10} style={{marginTop: 8, height: 14, width: 240}} className={this.ratingStyle(product.rating)} /><Text variant="xLarge" style={DAYS[this.ratingStyle(product.rating)]}>{product.rating}</Text>
        </div>}
        {product.designRating && 
        <div>
          <Text block style={{marginTop: 10}}>Design</Text>
          <div style={ROW}>
            <progress value={product.designRating} max={10} style={{marginTop: 8, height: 10, width: 240}} className={this.ratingStyle(product.designRating)} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.designRating}</Text>
          </div>
        </div>}
        {product.featuresRating &&
        <div>
          <Text block>Features</Text>
          <div style={ROW}>
            <progress value={product.featuresRating} max={10} style={{marginTop: 8, height: 10, width: 240}} className={this.ratingStyle(product.featuresRating)} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.featuresRating}</Text>
          </div>
        </div>}
        {product.performanceRating &&
        <div>
          <Text block>Performance</Text>
          <div style={ROW}>
            <progress value={product.performanceRating} max={10} style={{marginTop: 8, height: 10, width: 240}} className={this.ratingStyle(product.performanceRating)} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.performanceRating}</Text>
          </div>
        </div>}
        {product.batteryRating &&
        <div>
          <Text block>Battery</Text>
          <div style={ROW}>
            <progress value={product.batteryRating} max={10} style={{marginTop: 8, height: 10, width: 240}} className={this.ratingStyle(product.batteryRating)} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.batteryRating}</Text>
          </div>
        </div>}
        {product.soundRating &&
        <div>
          <Text block>Sound</Text>
          <div style={ROW}>
            <progress value={product.soundRating} max={10} style={{marginTop: 8, height: 10, width: 240}} className={this.ratingStyle(product.soundRating)} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.soundRating}</Text>
          </div>
        </div>}
        {product.valueRating &&
        <div>
          <Text block>Value</Text>
          <div style={ROW}>
            <progress value={product.valueRating} max={10} style={{marginTop: 8, height: 10, width: 240}} className={this.ratingStyle(product.valueRating)} /><Text variant="xLarge" style={{marginLeft: 10}}>{product.valueRating}</Text>
          </div>
        </div>}
        <Button href={product.reviewUrl}>Read Full Review</Button>
      </div>
    )
  }
}