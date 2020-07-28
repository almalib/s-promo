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
  @State() lastClickedCategory: any;

  render() {
    return (
      <li
        onClick={() => this.clickOnPortfoliosCategoryHandler(this.payload)}
      >
        <span
          class={{
            active: this.payload.id === this.lastClickedCategory?.id
          }}
        >
          {this.payload.item}
        </span>
      </li>
    );
  }

  public clickOnPortfoliosCategoryHandler(id) {
    this.clickOnPortfoliosCategory.emit(this.lastClickedCategory = id);
  }
}
