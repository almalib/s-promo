import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoPortfolioInterface} from "./res/view/cnt-flexy-view-adam-promo-portfolio/res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-portfolio-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-portfolio-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoPortfolioWrapper implements ComponentInterface {
  /**
   * Карточки портфолио
   */
  @Prop() payload: PromoPortfolioInterface;

  render() {
    return (
      <cnt-flexy-view-adam-promo-portfolio payload={this.payload}></cnt-flexy-view-adam-promo-portfolio>
    );
  }

}
