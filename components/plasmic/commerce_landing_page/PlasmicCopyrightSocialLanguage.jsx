// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijbX9dfpBRbW1FGSgs1NJo
// Component: 8qv09TA5T27G7x
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: z08NHQzGDufhl_/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: ijbX9dfpBRbW1FGSgs1NJo/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: 8qv09TA5T27G7x/css
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: N-jxP7Xg6EP8Z1/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: hxl6muyYy4ZBPD/icon
import PintrestIcon from "./icons/PlasmicIcon__Pintrest"; // plasmic-import: 9JNCxLztTPkrUr/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: ETtjmWExJ617-B/icon

export const PlasmicCopyrightSocialLanguage__VariantProps = new Array();

export const PlasmicCopyrightSocialLanguage__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCopyrightSocialLanguage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__armYk)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__fb4Y1)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"© 2021 ShoeShop, Inc. All Rights Reserved."}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__c503F)}>
            <Button
              iconOnly={true}
              link={"http://twitter.com"}
              startIcon={
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg___1LT9A)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button___3TKtA)}
              iconOnly={true}
              link={"http://youtube.com"}
              startIcon={
                <YoutubeIcon
                  className={classNames(projectcss.all, sty.svg___4YIi5)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button__wrv54)}
              iconOnly={true}
              link={"http://pinterest.com"}
              startIcon={
                <PintrestIcon
                  className={classNames(projectcss.all, sty.svg__gann9)}
                  role={"img"}
                />
              }
            />
          </div>
        </p.Stack>

        <Button
          className={classNames("__wab_instance", sty.button___2KcUo)}
          endIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__wVdXe)}
              role={"img"}
            />
          }
          showEndIcon={true}
          startIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__o9EnB)}
              role={"img"}
            />
          }
        >
          {"English"}
        </Button>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
          internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */
