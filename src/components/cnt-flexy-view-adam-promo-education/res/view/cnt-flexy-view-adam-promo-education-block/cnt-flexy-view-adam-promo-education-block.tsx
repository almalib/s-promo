import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-education-block',
  styleUrl: 'cnt-flexy-view-adam-promo-education-block.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoEducationBlock implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
