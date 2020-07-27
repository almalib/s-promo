import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-header-wrapper',
  styleUrl: 'cnt-flexy-view-adam-promo-header-wrapper.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoHeaderWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
