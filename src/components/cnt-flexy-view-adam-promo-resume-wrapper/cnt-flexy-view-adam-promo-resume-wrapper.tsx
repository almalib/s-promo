import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-resume-wrapper',
  styleUrl: 'cnt-flexy-view-adam-promo-resume-wrapper.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoResumeWrapper implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
