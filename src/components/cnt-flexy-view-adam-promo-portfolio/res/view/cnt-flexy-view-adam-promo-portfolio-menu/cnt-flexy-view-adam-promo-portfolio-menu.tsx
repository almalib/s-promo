import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {PromoPortfolioBlockMenuItemsInterface} from "../../interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-menu",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio-menu.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolioMenu implements ComponentInterface {
  @Prop() portfolioBlockMenuItems: PromoPortfolioBlockMenuItemsInterface;

  render() {
    return (

    <li>
      <a
        data-portfolio-target-tag="all"
        class=""
      >
        {this.portfolioBlockMenuItems.item}
      </a>
    </li>
    );
  }
}
