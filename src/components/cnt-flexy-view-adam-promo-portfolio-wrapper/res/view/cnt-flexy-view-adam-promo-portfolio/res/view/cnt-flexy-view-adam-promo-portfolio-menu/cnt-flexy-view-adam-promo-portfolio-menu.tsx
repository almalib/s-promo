import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
  State,
} from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-menu",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio-menu.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolioMenu implements ComponentInterface {
  @Prop() payload: any;

  /**
   *
   */
  @State() lastClickedCategory;

  /**
   * Клик по категории
   */
  @Event() clickOnPortfoliosCategory: EventEmitter;

  render() {
    return (
      <li
        onClick={() =>
          this.clickOnPortfoliosCategoryHandler(this.payload.id)
        }

      >
        <a
          class={{
            active: this.payload.id === this.lastClickedCategory}}

        >
          {this.payload.item}
        </a>
      </li>
    );
  }

  public clickOnPortfoliosCategoryHandler(id) {
    this.clickOnPortfoliosCategory.emit(id);
  }
}
