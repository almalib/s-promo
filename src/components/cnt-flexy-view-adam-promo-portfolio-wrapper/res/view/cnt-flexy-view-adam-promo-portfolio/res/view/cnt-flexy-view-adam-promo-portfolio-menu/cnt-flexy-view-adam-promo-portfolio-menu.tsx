import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
} from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-menu",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio-menu.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolioMenu implements ComponentInterface {
  /**
   * Данные для категорий
   */
  @Prop() payload: any;

  /**
   * Клик по категории евент
   */
  @Event() clickOnPortfoliosCategory: EventEmitter;

  /**
   * Последняя кликнутая категория
   */
  // @State() lastClickedCategory = "all";

  render() {
    return (
      <li
        onClick={() => this.clickOnPortfoliosCategoryHandler(this.payload.id)}
      >
        <span
          // class={{
          //   active: this.payload.id === this.lastClickedCategory
          // }}
        >
          {this.payload.item}
        </span>
      </li>
    );
  }


  public clickOnPortfoliosCategoryHandler(id) {
    // this.lastClickedCategory = id;
    this.clickOnPortfoliosCategory.emit(id);
  }
}
