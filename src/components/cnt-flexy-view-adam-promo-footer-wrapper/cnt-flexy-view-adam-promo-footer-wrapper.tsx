import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-footer-wrapper',
  styleUrl: 'cnt-flexy-view-adam-promo-footer-wrapper.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoFooterWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
