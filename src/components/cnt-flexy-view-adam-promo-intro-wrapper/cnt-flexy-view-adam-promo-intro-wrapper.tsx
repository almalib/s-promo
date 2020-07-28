import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoIntroBlockInterface} from "./res/view/cnt-flexy-view-adam-promo-intro/res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-intro-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-intro-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoIntroWrapper implements ComponentInterface {
  /**
   * Данные для блока интро
   */
  @Prop() payload: PromoIntroBlockInterface;

  render() {
    return (
      <cnt-flexy-view-adam-promo-intro payload={this.payload}></cnt-flexy-view-adam-promo-intro>
    );
  }

}
