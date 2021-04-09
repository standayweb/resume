// @flow
import React from "react";
import { css } from "glamor";

const style = css({
  color: "#86888a",
  margin: "0 0 48px 0",
  textAlign: "center",
  "@media(min-width: 600px)": {
    textAlign: "left",
  },
  "@media(min-width: 1050px)": {
    textAlign: "center",
  },
});

const Current = () => (
  <p className={style}>
    Current&nbsp;Position: Co-Founder&nbsp;&&nbsp;CEO&nbsp;at Hone.gg
  </p>
);

export default Current;
