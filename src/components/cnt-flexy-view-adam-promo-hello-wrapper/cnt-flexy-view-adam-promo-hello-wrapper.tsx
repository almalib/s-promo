import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-hello-wrapper',
  styleUrl: 'cnt-flexy-view-adam-promo-hello-wrapper.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoHelloWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
