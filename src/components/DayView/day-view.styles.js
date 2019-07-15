import { css } from "@emotion/core";

export const dayView = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const dayList = css`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const dayDetails = css`
    background: #fefefe;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
    padding: 0 1em;
`;

export default {
    dayDetails,
    dayList,
    dayView
};
