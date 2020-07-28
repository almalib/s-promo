import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-education-block",
  styleUrl: "cnt-flexy-view-adam-promo-education-block.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoEducationBlock implements ComponentInterface {
  /**
   * Данные для блока "образование"
   */
  @Prop() payload: any;

  render() {
    return (
      <div class="education">
        <div class="resume-list-block">
          <p class="resume-list-block-title">{this.payload.institution}</p>
          <p class="resume-list-block-date">{this.payload.date}</p>
          <p>{this.payload.speciality}</p>
        </div>
      </div>
    );
  }
}
