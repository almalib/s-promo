import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-employment-block",
  styleUrl: "cnt-flexy-view-adam-promo-employment-block.css",
  shadow: false,
  scoped: false
})
export class CntFlexyViewAdamPromoEmploymentBlock
  implements ComponentInterface {
  /**
   * Данные для блока "Опыт работы"
   */
  @Prop() payload: any;

  render() {
    return (
      <div class="resume-list-block">
        <p class="resume-list-block-title">{this.payload.job}</p>
        <p class="resume-list-block-date">{this.payload.date}</p>
        <p>{this.payload.speciality}</p>
      </div>
    );
  }
}
