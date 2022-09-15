import { css } from "lit";

export const styles = css`
    

    .dapplet-widget-button {
        user-select: none;
        border: 1px solid rgb(207, 217, 222);
        padding: 0 10px;
        height: 35px;
        cursor: pointer;
        border-radius: 9999px;
        margin: 0 8px 12px 0;
        font-weight: 600;
        color: #000;
        box-sizing: border-box;
        font-size: 15px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        line-height: 33px;
        transition: background-color .2s ease-in-out;
    }

    .dapplet-widget-button:hover {
        background-color: rgba(15, 20, 25, 0.1);
    }
`;
