import { css, jsx } from "@emotion/core";

export const app = css`
    background: lightblue;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const appHeader = css`
    display: flex;
    padding: 0 1em;
`;

export const appBody = css`
    flex-grow: 1;
    overflow: auto;
`;

export const appFooter = css`
    padding: 0 1em;
`;

export default {
    app,
    appBody,
    appFooter,
    appHeader
};
