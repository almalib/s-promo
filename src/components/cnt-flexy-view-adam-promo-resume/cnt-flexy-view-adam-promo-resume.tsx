import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {
  PromoEducationBlockInterface,
  PromoEploymentBlockInterface,
  SkillsBlockInterface,
} from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-resume-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-resume.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoResume implements ComponentInterface {
  /**
   * Данные для блока "образование"
   */
  @Prop() educationBlock: PromoEducationBlockInterface[] = [];

  /**
   * Текст с описанием блока
   */
  @Prop() deployed: any;

  /**
   * Данные для блока "Опыт работы"
   */
  @Prop() employmentBlock: PromoEploymentBlockInterface[] = [];

  /**
   * Данные для блока "Мои навыки"
   */
  @Prop() skillsBlock: SkillsBlockInterface[] = [];

  render() {
    return (
      <section id="resume">
        <div class="container section">
          <div class="row">
            <div class="col-md-10">
              <h2 id="resume_header" class="section-title">
                Резюме_
              </h2>
              <p class="section-description">{this.deployed}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 section-resume resume-list">
              <h3 class="resume-list-title">обрзаование</h3>
              <EducationBlock array={this.educationBlock}></EducationBlock>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 section-resume resume-list">
              <h3 class="resume-list-title">опыт работы</h3>
              <EmploymentBlock array={this.employmentBlock}></EmploymentBlock>
            </div>
          </div>
          <div class="row section-resume progress-list js-progress-list">
            <div class="col-md-12">
              <h3 class="progress-list-title">мои навыки</h3>
            </div>
            <SkillsBlock array={this.skillsBlock}></SkillsBlock>
          </div>
        </div>
      </section>
    );
  }
}

const EducationBlock = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-education
        educationBlock={item}
      ></cnt-flexy-view-adam-promo-education>
    );
  });
};

const EmploymentBlock = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-employment
        employmentBlock={item}
      ></cnt-flexy-view-adam-promo-employment>
    );
  });
};

const SkillsBlock = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-md-5 mr-auto">
        <cnt-flexy-view-adam-promo-skills
          skillsBlock={item}
        ></cnt-flexy-view-adam-promo-skills>
      </div>
    );
  });
};
