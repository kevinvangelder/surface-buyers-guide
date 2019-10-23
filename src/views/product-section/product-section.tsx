import * as React from "react"
import { color } from "../../theme"
import { Text, PrimaryButton, Separator } from "../../../node_modules/office-ui-fabric-react";
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
  "Surface Pro": require("../../images/Surface-Pro-7.jpg"),
  "Surface Laptop": require("../../images/Surface-Laptop-3.jpg"),
  "Surface Book": require("../../images/Surface-Book-2.png"),
  "Surface Pro X": require("../../images/Surface-Pro-X.jpg"),
  "Surface Go": require("../../images/Surface-Go-6.png"),
  "Surface Studio": require("../../images/Surface-Studio-2.png"),
  "Surface Hub": require("../../images/Surface-Hub-2S.png"),
  "Surface Headphones": require("../../images/Surface-Headphones.png"),
  "Surface Earbuds": require("../../images/Surface-Earbuds.jpg"),
  "Surface Pen": require("../../images/Surface-Pen.jpg"),
  "Surface Pro X Signature Keyboard With Slim Pen Bundle": require("../../images/Surface-Pro-X-Keyboard-Bundle.jpg"),
  "Surface Pro X Keyboard": require("../../images/Surface-Pro-X-Keyboard.jpg"),
  "Surface Slim Pen": require("../../images/Surface-Slim-Pen.jpg"),
  "Surface Dial": require("../../images/Surface-Dial.png"),
  "Surface Pro Signature Type Cover": require("../../images/Signature-Type-Cover.jpg"),
  "Surface Pro Type Cover": require("../../images/Surface-Type-Cover.jpg"),
  "Surface Go Signature Type Cover": require("../../images/Surface-Go-Signature-Type-Cover.jpg"),
  "Surface Keyboard": require("../../images/Surface-Keyboard.png"),
  "Surface Mouse": require("../../images/Surface-Mouse.png"),
  "Surface Mobile Mouse": require("../../images/Surface-Mobile-Mouse.jpg"),
  "Surface Arc Mouse": require("../../images/Surface-Arc-Mouse.jpg"),
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
            {/* {product.url && <PrimaryButton href={product.url} target="_blank">Buy Now</PrimaryButton>} */}
            {product.amazonUrl && <PrimaryButton href={product.amazonUrl} style={{marginLeft: 16}} target="_blank">Buy Now</PrimaryButton>}
          </div>
        </div>
        <Separator />
        <div style={ROW}>
          <div style={{paddingRight: 10, flex: 1}}>
            <div style={ROW}>
              <div style={FLEX_LEFT_FIXED}>
                <Text variant="xLarge" style={{alignSelf: "center", fontWeight: 500}}>Days since last release</Text>
              </div>
              <div style={{width: 320}}>
                <Text block>{product.currentVersion.versionName}: {product.currentVersion.prettyDate}</Text>
                <progress value={product.currentDays} max={product.maximumDays} className={product.recommendation.recommendation} style={{width: 250}} /><Text variant="xLarge" style={DAYS[product.recommendation.recommendation]}>{product.currentDays}</Text>
              </div>
            </div>
            <Separator />
            <div style={ROW}>
              <div style={FLEX_LEFT_FIXED}>
                <Text variant="xLarge" style={{fontWeight: 500}}>Average</Text>
              </div>
              <div style={{width: 320}}>
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
                  <div style={{marginBottom: 16, width: 320}}>
                    <Text block>{v.versionName}: {v.prettyDate}</Text>
                    <progress value={v.nextReleaseDays} max={product.maximumDays} style={{width: 250}} /><Text variant="xLarge" style={{marginLeft: 10}}>{v.nextReleaseDays}</Text>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}