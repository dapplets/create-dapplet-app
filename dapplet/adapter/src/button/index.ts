import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./button.css";
import { loader } from "./loader.html";
import { description } from "./description";

export interface IButtonProps {
    ctx: any;
    insPointName?: string;
    img: string;
    basic?: boolean;
    label: string;
    tooltip?: string;
    disabled: boolean;
    hidden?: boolean;
    exec: (ctx: any, me: this) => void;
    init: (ctx: any, me: this) => void;
}

export class Button extends LitElement implements IButtonProps {
    public static override styles = styles;
    public static widgetParamsDescription = description;
    public static contextInsPoints = {
        POST: "SOUTH",
        QUOTE_POST: "SOUTH",
        PROFILE: "BUTTON_GROUP",
    };

    @property() state;
    @property() ctx;
    @property() img;
    @property() label;
    @property() tooltip;
    @property() loading = false;
    @property() disabled = false;
    @property() hidden = false;
    @property() exec: (ctx: any, me: this) => void;
    @property() init: (ctx: any, me: this) => void;

    connectedCallback() {
        super.connectedCallback();
        this.init?.(this.ctx, this.state);
    }

    private _clickHandler(e) {
        this.exec?.(this.ctx, this.state);
        e.stopPropagation();
    }

    override render() {
        if (this.hidden) return null;
      
            return html`<div
                @click=${this._clickHandler}
                title=${this.tooltip}
                class="dapplet-widget-profile-button"
            >
                ${this.img
                    ? html`<img
                          style=${styleMap({
                              width: this.basic ? "36px" : "18px",
                              height: this.basic ? "36px" : "18px",
                              position: "relative",
                              top: this.basic ? undefined : "3px",
                              marginRight: this.label ? "6px" : undefined,
                          })}
                          src="${this.img}"
                      />`
                    : null}
                <span>${this.label}</span>
            </div>`;
        }
    
}
