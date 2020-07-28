import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoResumeInterface} from "../../interface/iterface.common";

@Component({
  tag: "cnt-flexy-view-adam-promo-education-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-education.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoEducation implements ComponentInterface {
  /**
   * Данные для блока "образование"
   */
  @Prop() payload: PromoResumeInterface;

  render() {
    return (
      <div class="row">
        <div class="col-md-8 resume-list">
          <h3 class="resume-list-title">обрзаование</h3>
          <EducationBlock array={this.payload.educationBlock}></EducationBlock>
        </div>
      </div>
    );
  }
}
const EducationBlock = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-education-block
        payload={item}
      ></cnt-flexy-view-adam-promo-education-block>
    );
  });
};
