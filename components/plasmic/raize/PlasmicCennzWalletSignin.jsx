// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7oPfhPPkksvSwaMRWZCjSk
// Component: XxhJKkLZ0g
import * as React from "react";
import Head from "next/head";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_raize.module.css"; // plasmic-import: 7oPfhPPkksvSwaMRWZCjSk/projectcss
import * as sty from "./PlasmicCennzWalletSignin.module.css"; // plasmic-import: XxhJKkLZ0g/css

export const PlasmicCennzWalletSignin__VariantProps = new Array();

export const PlasmicCennzWalletSignin__ArgProps = new Array();

function PlasmicCennzWalletSignin__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style global jsx>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames(defaultcss.all, sty.header)}
          >
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__uy3Yf)}
              role={"img"}
              src={"/plasmic/raize/images/raizEpng.png"}
            />
          </div>

          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__gcxpS)}
            role={"img"}
            src={"/plasmic/raize/images/noUser3.svg"}
          />

          <img
            alt={""}
            className={classNames(defaultcss.img, sty.img__bmjQx)}
            role={"img"}
            src={"/plasmic/raize/images/walletCennzpng2.png"}
          />

          <div
            data-plasmic-name={"figmaPaste"}
            data-plasmic-override={overrides.figmaPaste}
            className={classNames(defaultcss.all, sty.figmaPaste)}
          />

          <img
            data-plasmic-name={"cennzWallet"}
            data-plasmic-override={overrides.cennzWallet}
            alt={""}
            className={classNames(defaultcss.img, sty.cennzWallet)}
            role={"img"}
            src={"/plasmic/raize/images/cpng.png"}
          />

          <div
            data-plasmic-name={"signInToYourWallet"}
            data-plasmic-override={overrides.signInToYourWallet}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.signInToYourWallet
            )}
          >
            {"Sign in to your CENNZ wallet"}
          </div>

          <div
            data-plasmic-name={"btnbtn"}
            data-plasmic-override={overrides.btnbtn}
            className={classNames(defaultcss.all, sty.btnbtn)}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.text
              )}
            >
              {"Sign in"}
            </div>
          </div>

          <div
            data-plasmic-name={"makeANewCennzAccount2"}
            data-plasmic-override={overrides.makeANewCennzAccount2}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.makeANewCennzAccount2
            )}
          >
            <span>
              <span style={{ textDecoration: "underline" }}>
                {"Make a new CENNZ Account "}
              </span>
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "figmaPaste",
    "cennzWallet",
    "signInToYourWallet",
    "btnbtn",
    "text",
    "makeANewCennzAccount2"
  ],

  header: ["header"],
  figmaPaste: ["figmaPaste"],
  cennzWallet: ["cennzWallet"],
  signInToYourWallet: ["signInToYourWallet"],
  btnbtn: ["btnbtn", "text"],
  text: ["text"],
  makeANewCennzAccount2: ["makeANewCennzAccount2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCennzWalletSignin__ArgProps,
      internalVariantPropNames: PlasmicCennzWalletSignin__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCennzWalletSignin__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCennzWalletSignin";
  } else {
    func.displayName = `PlasmicCennzWalletSignin.${nodeName}`;
  }
  return func;
}

export const PlasmicCennzWalletSignin = Object.assign(
  // Top-level PlasmicCennzWalletSignin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    figmaPaste: makeNodeComponent("figmaPaste"),
    cennzWallet: makeNodeComponent("cennzWallet"),
    signInToYourWallet: makeNodeComponent("signInToYourWallet"),
    btnbtn: makeNodeComponent("btnbtn"),
    text: makeNodeComponent("text"),
    makeANewCennzAccount2: makeNodeComponent("makeANewCennzAccount2"),
    // Metadata about props expected for PlasmicCennzWalletSignin
    internalVariantProps: PlasmicCennzWalletSignin__VariantProps,
    internalArgProps: PlasmicCennzWalletSignin__ArgProps
  }
);

export default PlasmicCennzWalletSignin;
/* prettier-ignore-end */
