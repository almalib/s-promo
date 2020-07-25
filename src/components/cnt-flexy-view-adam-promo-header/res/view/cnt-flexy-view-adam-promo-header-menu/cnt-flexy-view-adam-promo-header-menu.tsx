import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoMenuItemsInterface} from "../../interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-header-menu',
  styleUrl: 'cnt-flexy-view-adam-promo-header-menu.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoHeaderMenu implements ComponentInterface {
@Prop() menuItems: PromoMenuItemsInterface;

  render() {
    return (
      <li>
        <a href={this.menuItems.id}>{this.menuItems.item}</a>
      </li>
    );
  }

}
