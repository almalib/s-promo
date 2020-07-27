import {
  Component,
  ComponentInterface,
  EventEmitter,
  Event,
  h,
  Prop,
  State,
} from "@stencil/core";
import { PromoPortfolioBlockMenuItemsInterface } from "../cnt-flexy-view-adam-promo-portfolio/res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-menu-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio-menu.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolioMenu implements ComponentInterface {
  @Prop() payload: PromoPortfolioBlockMenuItemsInterface;

  /**
   *Последняя кликнутая категория
   */
  @State() lastClickedCategory;

  /**
   * Клик по категории
   */
  @Event() clickOnPortfoliosCategory: EventEmitter<
    PromoPortfolioBlockMenuItemsInterface
  >;

  render() {
    return (
      <li
        onClick={() => this.clickOnPortfoliosCategoryHandler(this.payload.id)}
      >
        <a
          class={{
            active: this.payload.id === this.lastClickedCategory,
          }}
        >
          {this.payload.item}
        </a>
      </li>
    );
  }

  public clickOnPortfoliosCategoryHandler(id) {
    console.log(this.payload.id);
    this.clickOnPortfoliosCategory.emit((this.lastClickedCategory = id));
  }
}
// <div class="row portfolio-menu">
//   <div class="col-md-12">
//     <nav>
//       <ul>
//         {this.portfolioBlockMenuItems.map((item) => {
//           return (
//             <cnt-flexy-view-adam-promo-portfolio-menu
//               portfolioBlockMenuItems={item}
//               onClickOnPortfoliosCategory={(item) =>
//                 this.portfolioCardsFilter(item.detail)
//               }
//             ></cnt-flexy-view-adam-promo-portfolio-menu>
//           );
//         })}
//       </ul>
//     </nav>
//   </div>
// </div>
// <div
