import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-employment-block',
  styleUrl: 'cnt-flexy-view-adam-promo-employment-block.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoEmploymentBlock implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
