import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {PromoResumeInterface} from "../../interface/iterface.common";

@Component({
  tag: "cnt-flexy-view-adam-promo-employment-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-employment.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoEmployment implements ComponentInterface {
  /**
   * Данные для блока "Опыт работы"
   */
  @Prop() payload: PromoResumeInterface;

  render() {
    return (
      <div class="row">
        <div class="col-md-8 resume-list">
          <h3 class="resume-list-title">обрзаование</h3>
          <EmploymentBlock array={this.payload.employmentBlock}></EmploymentBlock>
        </div>
      </div>
    );
  }
}

const EmploymentBlock = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-employment-block
        payload={item}
      ></cnt-flexy-view-adam-promo-employment-block>
    );
  });
};
