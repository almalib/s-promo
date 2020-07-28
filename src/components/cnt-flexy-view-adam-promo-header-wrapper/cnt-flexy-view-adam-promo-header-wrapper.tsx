import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoMenuItemsInterface} from "./res/view/cnt-flexy-view-adam-promo-header/res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-header-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-header-wrapper.css',
  shadow: false,
})
export class CntFlexyViewAdamPromoHeaderWrapper implements ComponentInterface {
  /**
   * Элементы меню
   */
  @Prop() categories: PromoMenuItemsInterface[] = [];

  render() {
    return (
      <cnt-flexy-view-adam-promo-header
        categories={this.categories}
      ></cnt-flexy-view-adam-promo-header>
    );
  }

}
