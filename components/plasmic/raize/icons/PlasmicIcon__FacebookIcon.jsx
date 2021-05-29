// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 36"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.11 35.926V19.538h5.5l.824-6.386H12.11V9.074c0-1.849.514-3.109 3.165-3.109l3.382-.002V.251C18.072.174 16.065 0 13.73 0 8.853 0 5.515 2.976 5.515 8.442v4.71H0v6.387h5.515v16.387h6.595z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebookIconIcon;
/* prettier-ignore-end */
