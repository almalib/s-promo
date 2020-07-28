import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-hello-wrapper-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-hello-wrapper.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoHelloWrapper implements ComponentInterface {
  /**
   * Описание блока Hello
   */
  @Prop() payload: string;

  render() {
    return (
      <cnt-flexy-view-adam-promo-hello payload={this.payload}></cnt-flexy-view-adam-promo-hello>
    );
  }

}
