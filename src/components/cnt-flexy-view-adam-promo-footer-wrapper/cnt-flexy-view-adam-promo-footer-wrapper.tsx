import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoFooterBlockInterface} from "./res/view/cnt-flexy-view-adam-promo-footer/res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-footer-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-footer-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoFooterWrapper implements ComponentInterface {
  /**
   * Данные для футера
   */
  @Prop() categories: PromoFooterBlockInterface;

  render() {
    return (
      <cnt-flexy-view-adam-promo-footer categories={this.categories}></cnt-flexy-view-adam-promo-footer>
    );
  }

}
