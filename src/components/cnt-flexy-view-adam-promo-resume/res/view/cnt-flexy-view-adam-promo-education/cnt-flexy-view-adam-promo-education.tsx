import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoEducationBlockInterface} from "../../interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-education',
  styleUrl: 'cnt-flexy-view-adam-promo-education.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoEducation implements ComponentInterface {
  /**
   * Данные для блока "образование"
   */
  @Prop() educationBlock: PromoEducationBlockInterface;

  render() {
    return (
      <div class="resume-list-block">
        <p class="resume-list-block-title">
          {this.educationBlock.institution}
        </p>
        <p class="resume-list-block-date">{this.educationBlock.date}</p>
        <p>{this.educationBlock.speciality}</p>
      </div>
    );
  }

}
