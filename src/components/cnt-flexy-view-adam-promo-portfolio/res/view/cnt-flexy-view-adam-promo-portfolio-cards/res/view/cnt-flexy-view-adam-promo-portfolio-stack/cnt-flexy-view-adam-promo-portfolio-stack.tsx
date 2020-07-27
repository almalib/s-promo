import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-stack",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio-stack.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolioStack implements ComponentInterface {
  /**
   * Данные для компонента stack
   */
  @Prop() stackList: any;

  render() {
    return <li>{this.stackList}</li>;
  }
}
