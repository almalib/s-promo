import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-resume-wrap",
  styleUrl: "cnt-flexy-view-adam-promo-resume-wrap.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoResumeWrap implements ComponentInterface {
  /**
   * Текст с описанием блока
   */
  @Prop() payload: any;
  render() {
    return (
      <section id="resume">
        <div class="container section">
          <cnt-flexy-view-adam-promo-resume-1_01
            payload={this.payload}
          ></cnt-flexy-view-adam-promo-resume-1_01>
          <cnt-flexy-view-adam-promo-education-1_01
            payload={this.payload}
          ></cnt-flexy-view-adam-promo-education-1_01>
          <cnt-flexy-view-adam-promo-employment-1_01
            payload={this.payload}
          ></cnt-flexy-view-adam-promo-employment-1_01>
          <cnt-flexy-view-adam-promo-skills-1_01
            payload={this.payload}
          ></cnt-flexy-view-adam-promo-skills-1_01>
        </div>
      </section>
    );
  }
}
