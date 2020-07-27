import {Component, ComponentInterface, h, Prop, Event, EventEmitter} from '@stencil/core';
import {PromoMenuItemsInterface} from "../../interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-mobile-menu',
  styleUrl: 'cnt-flexy-view-adam-promo-mobile-menu.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoMobileMenu implements ComponentInterface {

  /**
   * Ссылки меню
   */
  @Prop() menuItems: PromoMenuItemsInterface;

  /**
   *
   */
  @Event() closeMobileMenu: EventEmitter<void>;

  render() {
    return (
      <li onClick={() => this.closeMobileMenuHandler()}>
        <a href={this.menuItems.id}>{this.menuItems.item}</a>
      </li>
    );
  }

  public closeMobileMenuHandler() {
    this.closeMobileMenu.emit();
  }
}
