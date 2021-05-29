// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ExcludeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 36"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M23.553 34.678a22.5 22.5 0 01-6.97 1.1c-2.435 0-4.78-.387-6.976-1.102 1.015.122 1.39-.539 1.39-1.109 0-.248-.004-.686-.01-1.272-.007-.678-.015-1.554-.021-2.564-6.27 1.363-7.593-3.023-7.593-3.023C2.349 24.103.871 23.409.871 23.409c-2.047-1.4.155-1.371.155-1.371 2.261.159 3.451 2.324 3.451 2.324 2.012 3.447 5.276 2.452 6.56 1.873.205-1.457.788-2.451 1.432-3.015-5.005-.57-10.267-2.503-10.267-11.146 0-2.463.878-4.476 2.32-6.053-.232-.571-1.005-2.863.22-5.969 0 0 1.894-.606 6.199 2.312 1.798-.5 3.726-.75 5.643-.76 1.914.01 3.843.26 5.643.76C26.53-.554 28.418.052 28.418.052c1.23 3.106.457 5.398.224 5.969 1.446 1.577 2.318 3.59 2.318 6.053 0 8.664-5.27 10.571-10.29 11.13.808.696 1.529 2.071 1.529 4.176 0 2.016-.013 3.772-.021 4.935-.004.576-.007 1.007-.007 1.252 0 .573.366 1.235 1.382 1.11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ExcludeIcon;
/* prettier-ignore-end */
