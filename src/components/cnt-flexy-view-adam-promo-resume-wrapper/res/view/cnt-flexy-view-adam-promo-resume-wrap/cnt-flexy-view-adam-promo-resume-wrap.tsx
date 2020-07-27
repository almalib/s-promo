import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-resume-wrap',
  styleUrl: 'cnt-flexy-view-adam-promo-resume-wrap.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoResumeWrap implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
