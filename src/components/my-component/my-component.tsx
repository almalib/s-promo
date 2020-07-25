import { Component, h } from "@stencil/core";
import {
  educationBlock,
  helloBlockDescription,
  promoMenuItems,
  resumeBlockDescription,
  employmentBlock,
  skillsBlock, portfolioCardsItems, portfolioBlockMenuItems, stackList, footerBlock, introBlock,
} from "../../utils/mock";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: false,
})
export class MyComponent {
  render() {
    return (
      <div>
        <cnt-flexy-view-adam-promo-header-1_01
          categories={promoMenuItems}
        ></cnt-flexy-view-adam-promo-header-1_01>
        <cnt-flexy-view-adam-promo-intro-1_01
          deployed={introBlock}
        ></cnt-flexy-view-adam-promo-intro-1_01>
        <cnt-flexy-view-adam-promo-hello-1_01
          deployed={helloBlockDescription}
        ></cnt-flexy-view-adam-promo-hello-1_01>
        <cnt-flexy-view-adam-promo-resume-1_01
          deployed={resumeBlockDescription}
          educationBlock={educationBlock}
          employmentBlock={employmentBlock}
          skillsBlock={skillsBlock}
        ></cnt-flexy-view-adam-promo-resume-1_01>
        <cnt-flexy-view-adam-promo-portfolio-1_01
          portfolioBlockMenuItems={portfolioBlockMenuItems}
          portfolioCardsItems={portfolioCardsItems}
          stackList={stackList}
        ></cnt-flexy-view-adam-promo-portfolio-1_01>
        <cnt-flexy-view-adam-promo-footer-1_01 categories={footerBlock}></cnt-flexy-view-adam-promo-footer-1_01>
      </div>
    );
  }
}
