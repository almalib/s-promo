import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {SkillsBlockInterface} from "../../interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-skills",
  styleUrl: "cnt-flexy-view-adam-promo-skills.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoSkills implements ComponentInterface {
  /**
   * Данные для блока "Мои навыки"
   */
  @Prop() skillsBlock: SkillsBlockInterface;
  render() {
    return (
        <div>
          <div class="progress-list-skill">
            <p>
              <span class="progress-list-skill-title">{this.skillsBlock.technology}</span>
              <span class="progress-list-skill-value">{this.skillsBlock.percent}</span>
            </p>
            <div class="progress">
              <div
                class="progress-bar"
              ></div>
            </div>
          </div>
        </div>

    );
  }
}
