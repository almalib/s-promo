import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-resume-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-resume.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoResume implements ComponentInterface {

  /**
   * Текст с описанием блока
   */
  @Prop() payload: any;

  render() {
    return (
      <div class="row">
        <div class="col-md-10">
          <h2 id="resume_header" class="wow section-title">
            Резюме<span class="cursor">_</span>
          </h2>
          <p class="section-description">{this.payload}</p>
        </div>
      </div>
      // <section id="resume">
      //   <div class="container section">
      //
      //     <div class="row">
      //       <div class="col-md-8 section-resume resume-list">
      //         <h3 class="resume-list-title">обрзаование</h3>
      //         <EducationBlock array={this.educationBlock}></EducationBlock>
      //       </div>
      //     </div>
      //     <div class="row">
      //       <div class="col-md-8 section-resume resume-list">
      //         <h3 class="resume-list-title">опыт работы</h3>
      //         <EmploymentBlock array={this.employmentBlock}></EmploymentBlock>
      //       </div>
      //     </div>
      //     <div class="row section-resume progress-list">
      //       <div class="col-md-12">
      //         <h3 class="progress-list-title">мои навыки</h3>
      //       </div>
      //       <SkillsBlock array={this.skillsBlock}></SkillsBlock>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

