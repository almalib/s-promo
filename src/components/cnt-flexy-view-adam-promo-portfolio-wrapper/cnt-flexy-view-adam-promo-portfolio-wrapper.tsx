import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-portfolio-wrapper',
  styleUrl: 'cnt-flexy-view-adam-promo-portfolio-wrapper.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoPortfolioWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
