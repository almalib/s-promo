import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-resume-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-resume-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoResumeWrapper implements ComponentInterface {
  /**
   * Текст с описанием блока
   */
  @Prop() payload: any;

  render() {
    return (
      <cnt-flexy-view-adam-promo-resume-wrap payload={this.payload}></cnt-flexy-view-adam-promo-resume-wrap>
    );
  }

}
