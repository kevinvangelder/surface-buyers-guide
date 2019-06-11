import React from 'react';
import { Stack, Text, Link, FontWeights, Pivot, PivotItem, PivotLinkFormat, PivotLinkSize, Separator } from 'office-ui-fabric-react';
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
        <Text variant="mega" block style={{marginBottom: 24}}>Surface Buyer's Guide</Text>
        <Text block variant="xLarge" style={{marginBottom: 16}}>Should I buy a Surface product or wait until the next version?</Text>
        <Text block style={{marginBottom: 16}}>Based on the release cycle of each product we give a recommendation of whether to purchase it now or wait until the next update. We make no guarantees regarding the accuracy of our recommendations, however we hope you will find the information useful as you make your purchasing decision. We are able to provide this information without advertisements or a membership fee through affiliate links to the recommended products. If you find any mistaken or missing information please <Link href="https://github.com/kevinvangelder/surface-buyers-guide/issues">report an issue</Link>.</Text>
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
        <div style={{flexDirection: "row", display: "flex", width: 1008, flex: 1}}>
          <div style={{flexDirection: "column", flex: 1}}>
            <Text block variant="large" style={{marginBottom: 10}}>About</Text>
            <Text block style={{marginBottom: 10}}>A service of <Link href="http://vangelder.tech">VanGelder Technologies</Link><br />inspired by <Link href="https://buyersguide.macrumors.com/">MacRumors Buyer's Guide</Link></Text>
            <Text block style={{marginBottom: 10}}>This site is not endorsed by Microsoft</Text>
            <Text block style={{marginBottom: 10}}><Link href="https://github.com/kevinvangelder/surface-buyers-guide/issues">Report an issue</Link></Text>
          </div>
          <div style={{flexDirection: "column", flex: 1}}>
            <Text block variant="large" style={{marginBottom: 10}}>Legal</Text>
            <Text block style={{marginBottom: 10}}><Link href="https://www.microsoft.com/en-us/surface">Surface</Link> is a registered &trade; of <Link href="https://microsoft.com">Microsoft</Link></Text>
            <Text block style={{marginBottom: 10}}>Images provided and &copy; by <Link href="https://news.microsoft.com/presskits/surface/">Microsoft</Link></Text>
            <Text block style={{marginBottom: 10}}>Built with <Link href="https://developer.microsoft.com/en-us/fabric">Microsoft Fabric</Link></Text>
          </div>
          <div style={{flexDirection: "column", flex: 1}}>
            <Text block variant="large" style={{marginBottom: 10}}>Sites We ❤️</Text>
            <Text block style={{marginBottom: 10}}>Find your next wallpaper at <Link href="https://wallpaperhub.app/">WallpaperHub</Link></Text>
          </div>
        </div>
      </Stack>
    </Stack>
  </div>
));
