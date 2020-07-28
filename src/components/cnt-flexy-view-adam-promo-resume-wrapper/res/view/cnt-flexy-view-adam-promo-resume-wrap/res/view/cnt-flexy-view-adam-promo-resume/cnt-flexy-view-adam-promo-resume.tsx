import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {PromoResumeInterface} from "../../interface/iterface.common";

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
  @Prop() payload: PromoResumeInterface;

  render() {
    return (
      <div class="row">
        <div class="col-md-10">
          <h2 id="resume_header" class="wow section-title">
            Резюме<span class="cursor">_</span>
          </h2>
          <p class="section-description">{this.payload.resumeBlockDescription}</p>
        </div>
      </div>
    );
  }
}

