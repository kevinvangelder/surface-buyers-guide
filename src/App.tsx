import React from 'react';
import { Stack, Text, Link, FontWeights, Pivot, PivotItem, PivotLinkFormat, PivotLinkSize, Separator, Layer, Button, PrimaryButton } from 'office-ui-fabric-react';
import { observer } from "mobx-react";
import "./App.css"
import { ProductSection } from './views/product-section';
import { Product } from "./models/"

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const App = observer(props => (
  <div>
    <Stack
      horizontalAlign="start"
      verticalAlign="start"
      styles={{
        root: {
          backgroundColor: '#faf9f8'
        }
      }}
      gap={15}
    >
      <Stack
        horizontalAlign="start"
        verticalAlign="start"
        verticalFill
        styles={{
          root: {
            width: "960px",
            margin: '0 auto',
            color: '#605e5c'
          }
        }}
      >
        <Text variant="mega" block>Surface Buyer's Guide</Text>
        <Pivot linkFormat={PivotLinkFormat.tabs} linkSize={PivotLinkSize.large} style={{display: "block", width: "100%", marginTop: "16px"}}>
          <PivotItem headerText="Tablet/Laptop">
            {props.productStore.tabletLaptops.map((p: Product, k: number) => {
              return (<ProductSection product={p} k={k} />)
            })}
          </PivotItem>
          <PivotItem headerText="Desktop/Hub">
            {props.productStore.desktopHub.map((p: any, k: number) => {
              return (<ProductSection product={p} k={k} />)
            })}
          </PivotItem>
          <PivotItem headerText="Accessories">
            {props.productStore.accessories.map((p: any, k: number) => {
              return (<ProductSection product={p} k={k} />)
            })}
          </PivotItem>
        </Pivot>
        <Separator />
      </Stack>
    </Stack>
    <Stack
      horizontalAlign="start"
      verticalAlign="start"
      styles={{ root: { backgroundColor: "#e4e4e4" }}}>
      <Stack
        horizontalAlign="start"
        verticalAlign="start"
        styles={{
          root: {
            width: "960px",
            margin: "0 auto",
            padding: "40px 0" 
          }
        }}>
        <Text>A service of <Link href="http://vangelder.tech">VanGelder Technologies</Link><br />inspired by <Link href="https://buyersguide.macrumors.com/">MacRumors Buyer's Guide</Link></Text>
        <Text>Images provided by <Link href="https://news.microsoft.com/presskits/surface/">Microsoft</Link></Text>
        <Text><Link href="https://www.microsoft.com/en-us/surface">Surface</Link> is a registered Trademark of <Link href="https://microsoft.com">Microsoft</Link></Text>
        <Text>Built with <Link href="https://developer.microsoft.com/en-us/fabric">Microsoft Fabric</Link></Text>
        <Text>This site is not associated with or endorsed by Microsoft</Text>
        <Text><Link>Report an issue</Link></Text>
        <Text>Find your next wallpaper at <Link href="https://wallpaperhub.app/">WallpaperHub</Link></Text>
      </Stack>
    </Stack>
  </div>
));
