import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {SkillsBlockInterface} from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-skills-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-skills.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoSkills implements ComponentInterface {
  /**
   * Данные для блока "Мои навыки"
   */
  @Prop() payload: SkillsBlockInterface[] = [];

  render() {
    return (
      <div class="row progress-list">
        <div class="col-md-12">
          <h3 class="progress-list-title">мои навыки</h3>
        </div>
        <SkillsBlock array={this.payload}></SkillsBlock>
      </div>
    );
  }
}

const SkillsBlock = (props) => {
  return props.array.map((item) => {
    return (
      <div class="col-md-5 mr-auto">
        <cnt-flexy-view-adam-promo-skills-block
          payload={item}
        ></cnt-flexy-view-adam-promo-skills-block>
      </div>
    );
  });
}
