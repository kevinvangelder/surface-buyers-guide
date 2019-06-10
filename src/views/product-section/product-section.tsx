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
    fontWeight: "700"
  },
  wait: {
    color: color.shiraz,
    fontWeight: "700"
  },
  buy: {
    color: color.limeade,
    fontWeight: "700"
  },
  caution: {
    color: color.lightning,
    fontWeight: "700"
  },
  neutral: {
    color: color.gray,
    fontWeight: "700"
  }
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

interface ProductSectionProps {
  product: Product,
  k: number
}

export class ProductSection extends React.Component<ProductSectionProps, {}> {

  render() {
    const { product, k } = this.props
    return (
      <section style={SECTION} key={k}>
        <div style={{flexDirection: "row", display: "flex"}}>
          {IMAGES[product.familyName] && <img src={IMAGES[product.familyName]} style={{width: 400, objectFit: "cover", objectPosition: "center"}} />}
          <div style={{flex: 1, marginLeft: 16}}>
            <Text variant="xxLarge" block>{product.familyName}</Text>
            <Label preset={product.recommendation.recommendation} rationale={product.recommendation.rationale} /><br />
            {product.currentVersion.priceLow && product.currentVersion.priceHigh && <Text variant="large" style={{marginBottom: 16}}>${product.currentVersion.priceLow} - ${product.currentVersion.priceHigh}</Text>}
            {product.currentVersion.price && <Text variant="large" style={{marginBottom: 16}} block>${product.currentVersion.price}</Text>}
            {product.description && <Text block style={{marginBottom: 16}}>{product.description}</Text>}
            {product.url && <PrimaryButton href={product.url}>Buy Now</PrimaryButton>}
            {product.reviewUrl && <Button href={product.reviewUrl} style={{marginLeft: 16}}>Product Review</Button>}
            {product.amazonUrl && <Link href={product.amazonUrl} style={{marginLeft: 16, paddingTop: 4, display: "inline-block"}}>Amazon</Link>}
          </div>
        </div>
        <Separator />
        <div style={{flexDirection: "row", display: "flex"}}>
          <div style={{paddingRight: 16}}>
            <Text block>{product.currentVersion.versionName}: {product.currentVersion.prettyDate}</Text>
            <progress value={product.currentDays} max={product.maximumDays} className={product.recommendation.recommendation} style={{width: 340}} /><Text variant="xLarge" style={DAYS[product.recommendation.recommendation]}> {product.currentDays}</Text>
            <Separator />
            <Text block>Average:</Text>
            <progress value={product.averageDays} max={product.maximumDays} style={{width: 340}} /><Text variant="xLarge"> {product.averageDays}</Text>
            <Separator />
            {product.versions.reverse().slice(1).map((v: any) => {
              return (
                <div>
                  <Text block>{v.versionName}: {v.prettyDate}</Text>
                  <progress value={v.nextReleaseDays} max={product.maximumDays} style={{width: 340}} /><Text variant="xLarge"> {v.nextReleaseDays}</Text>
                </div>
              )
            })}
          </div>
          <Separator vertical />
          <div>

          </div>
        </div>
      </section>
    )
  }
}