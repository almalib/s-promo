import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-skills-block',
  styleUrl: 'cnt-flexy-view-adam-promo-skills-block.css',
  shadow: true,
})
export class CntFlexyViewAdamPromoSkillsBlock implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
