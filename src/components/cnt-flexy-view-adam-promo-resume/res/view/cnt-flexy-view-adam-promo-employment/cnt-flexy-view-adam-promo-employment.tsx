import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { PromoEploymentBlockInterface } from "../../interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-employment",
  styleUrl: "cnt-flexy-view-adam-promo-employment.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoEmployment implements ComponentInterface {
  /**
   * Данные для блока "Опыт работы"
   */
  @Prop() employmentBlock: PromoEploymentBlockInterface;

  render() {
    return (
      <div class="resume-list-block">
        <p class="resume-list-block-title">{this.employmentBlock.job}</p>
        <p class="resume-list-block-date">{this.employmentBlock.date}</p>
        <p>{this.employmentBlock.speciality}</p>
      </div>
    );
  }
}
