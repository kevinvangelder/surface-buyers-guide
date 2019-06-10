import * as React from "react"
import { color } from "../../theme"
import { Text } from "../../../node_modules/office-ui-fabric-react";

const PRESETS = {
  overdue: {
    borderColor: color.darkTan,
    borderWidth: "1px",
    borderStyle: "solid",
    display: "inline-block",
    borderRadius: 3,
    color: color.white,
    margin: "12px 0",
  },
  wait: {
    borderColor: color.shiraz,
    borderWidth: "1px",
    borderStyle: "solid",
    display: "inline-block",
    borderRadius: 3,
    color: color.white,
    margin: "12px 0",
  },
  buy: {
    borderColor: color.limeade,
    borderWidth: "1px",
    borderStyle: "solid",
    display: "inline-block",
    borderRadius: 3,
    color: color.white,
    margin: "12px 0",
  },
  caution: {
    borderColor: color.lightning,
    borderWidth: "1px",
    borderStyle: "solid",
    display: "inline-block",
    borderRadius: 3,
    color: color.white,
    margin: "12px 0",
  },
  neutral: {
    borderColor: color.gray,
    borderWidth: "1px",
    borderStyle: "solid",
    display: "inline-block",
    borderRadius: 3,
    color: color.white,
    margin: "12px 0",
  },
}
const RATIONALE = {
  paddingLeft: 8,
  paddingRight: 8,
  color: color.black,
  fontWeight: 600,
}
const LABEL = {
  overdue: {
    backgroundColor: color.darkTan,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontWeight: 900,
    display: "inline-block"
  },
  wait: {
    backgroundColor: color.shiraz,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontWeight: 900,
    display: "inline-block",
  },
  buy: {
    backgroundColor: color.limeade,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontWeight: 900,
    display: "inline-block",
  },
  caution: { 
    backgroundColor: color.lightning,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontWeight: 900,
    display: "inline-block",
  },
  neutral: {
    backgroundColor: color.gray,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontWeight: 900,
    display: "inline-block",
  }
}
const text = {
  overdue: "WAIT",
  wait: "WAIT",
  buy: "BUY NOW",
  caution: "CAUTION",
  neutral: "NEUTRAL"
}

export class Label extends React.Component {
  render() {
    const { preset, rationale } = this.props
    return (
      <div style={PRESETS[preset]}>
        <Text style={LABEL[preset]}>{text[preset]}</Text>
        {rationale && <Text style={RATIONALE}>{rationale}</Text>}
      </div>
    )
  }
}