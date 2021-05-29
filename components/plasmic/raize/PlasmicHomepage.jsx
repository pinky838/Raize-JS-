// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7oPfhPPkksvSwaMRWZCjSk
// Component: RSi1xR0PXoo7E
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
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: RSi1xR0PXoo7E/css
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: wrQaf7yjSm5KS/icon
import ExcludeIcon from "./icons/PlasmicIcon__Exclude"; // plasmic-import: kDe9R8rrVpXCi/icon

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
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
            data-plasmic-name={"macBookPro1"}
            data-plasmic-override={overrides.macBookPro1}
            className={classNames(defaultcss.all, sty.macBookPro1)}
          >
            <div
              data-plasmic-name={"facebook"}
              data-plasmic-override={overrides.facebook}
              className={classNames(defaultcss.all, sty.facebook)}
            >
              <div
                data-plasmic-name={"background"}
                data-plasmic-override={overrides.background}
                className={classNames(defaultcss.all, sty.background)}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__hE9Yr
                )}
              >
                {"Connect with Facebook"}
              </div>

              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg__lRdI)}
                role={"img"}
              />
            </div>

            <div
              data-plasmic-name={"googleConnexion"}
              data-plasmic-override={overrides.googleConnexion}
              className={classNames(defaultcss.all, sty.googleConnexion)}
            >
              <div
                data-plasmic-name={"background2"}
                data-plasmic-override={overrides.background2}
                className={classNames(defaultcss.all, sty.background2)}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___9Xpf
                )}
              >
                {"Connect with Google"}
              </div>

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__pH4Vp)}
                role={"img"}
                src={"/plasmic/raize/images/googleIcon.svg"}
              />
            </div>

            <div
              data-plasmic-name={"github"}
              data-plasmic-override={overrides.github}
              className={classNames(defaultcss.all, sty.github)}
            >
              <div
                data-plasmic-name={"background3"}
                data-plasmic-override={overrides.background3}
                className={classNames(defaultcss.all, sty.background3)}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__q27Aa
                )}
              >
                {"Connect with Github"}
              </div>
            </div>

            {true ? (
              <div
                data-plasmic-name={"gitHubLogo"}
                data-plasmic-override={overrides.gitHubLogo}
                className={classNames(defaultcss.all, sty.gitHubLogo)}
              >
                <div
                  data-plasmic-name={"gitHub2"}
                  data-plasmic-override={overrides.gitHub2}
                  className={classNames(defaultcss.all, sty.gitHub2)}
                >
                  <div
                    data-plasmic-name={"rectangle"}
                    data-plasmic-override={overrides.rectangle}
                    className={classNames(defaultcss.all, sty.rectangle)}
                  />

                  <ExcludeIcon
                    className={classNames(defaultcss.all, sty.svg__wVgNi)}
                    role={"img"}
                  />
                </div>
              </div>
            ) : null}

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__lkJo0)}
              role={"img"}
              src={"/plasmic/raize/images/logoBiggerpng.png"}
            />

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img___2Y4Ud)}
              role={"img"}
              src={"/plasmic/raize/images/rocketBigpng.png"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "macBookPro1",
    "facebook",
    "background",
    "googleConnexion",
    "background2",
    "github",
    "background3",
    "gitHubLogo",
    "gitHub2",
    "rectangle"
  ],

  macBookPro1: [
    "macBookPro1",
    "facebook",
    "background",
    "googleConnexion",
    "background2",
    "github",
    "background3",
    "gitHubLogo",
    "gitHub2",
    "rectangle"
  ],

  facebook: ["facebook", "background"],
  background: ["background"],
  googleConnexion: ["googleConnexion", "background2"],
  background2: ["background2"],
  github: ["github", "background3"],
  background3: ["background3"],
  gitHubLogo: ["gitHubLogo", "gitHub2", "rectangle"],
  gitHub2: ["gitHub2", "rectangle"],
  rectangle: ["rectangle"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    macBookPro1: makeNodeComponent("macBookPro1"),
    facebook: makeNodeComponent("facebook"),
    background: makeNodeComponent("background"),
    googleConnexion: makeNodeComponent("googleConnexion"),
    background2: makeNodeComponent("background2"),
    github: makeNodeComponent("github"),
    background3: makeNodeComponent("background3"),
    gitHubLogo: makeNodeComponent("gitHubLogo"),
    gitHub2: makeNodeComponent("gitHub2"),
    rectangle: makeNodeComponent("rectangle"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */