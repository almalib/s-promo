import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-adam-promo-skills-block',
  styleUrl: 'cnt-flexy-view-adam-promo-skills-block.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoSkillsBlock implements ComponentInterface {
  /**
   * Данные для блока "Мои навыки"
   */
  @Prop() payload: any;

  render() {
    return (
      <div>
        <div class="progress-list-skill">
          <p>
            <span class="progress-list-skill-title">{this.payload.technology}</span>
            <span class="progress-list-skill-value">{this.payload.percent}</span>
          </p>
          <div class="progress">
            <div
              class="wow progress-bar"
              style={{width: this.payload.percent}}
            ></div>
          </div>
        </div>
      </div>
    );
  }

}
