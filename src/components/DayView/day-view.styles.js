import { css } from "emotion";

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
    flex-grow: 1;
    padding: 0 1em;
`;

export default {
    dayDetails,
    dayList,
    dayView
};
