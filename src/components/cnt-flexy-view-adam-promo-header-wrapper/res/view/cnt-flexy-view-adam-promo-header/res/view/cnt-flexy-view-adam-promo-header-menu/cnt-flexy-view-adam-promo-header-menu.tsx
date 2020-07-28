import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoMenuItemsInterface} from "../../interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-header-menu',
  styleUrl: 'cnt-flexy-view-adam-promo-header-menu.css',
  shadow: false,
  scoped: false
})
export class CntFlexyViewAdamPromoHeaderMenu implements ComponentInterface {

  /**
   * Ссылки меню
   */
  @Prop() menuItems: PromoMenuItemsInterface;

  /**
   *
   */
  public menuItemTag: HTMLElement;

  render() {
    return (
      <li class="menu-items">
        <a onClick={() => console.log(this.menuItemTag)} ref ={(el) => (this.menuItemTag = el)}class="menu-links anchor" href={this.menuItems.id}>{this.menuItems.item}</a>
      </li>
    );
  }
}
