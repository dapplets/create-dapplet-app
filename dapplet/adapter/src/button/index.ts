import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { styles } from "./button.css";
import { description } from "./description";

export interface IButtonProps {
  ctx: any;
  insPointName?: string;
  img: string;
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
    POST: "POST",
  };

  @property() state;
  @property() ctx;
  @property() img;
  @property() label;
  @property() tooltip;
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
      class="dapplet-button"
    >
      ${this.img
        ? html`<img
            style=${styleMap({
              width: "18px",
              height: "18px",
              position: "relative",
              top: "3px",
              marginRight: this.label ? "6px" : undefined,
            })}
            src="${this.img}"
          />`
        : null}
      <span>${this.label}</span>
    </div>`;
  }
}
