import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-intro-wrapper',
  styleUrl: 'cnt-flexy-view-adam-promo-intro-wrapper.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoIntroWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
