import { Component, h } from "@stencil/core";
import {
  helloBlockDescription,
  promoMenuItems,
  footerBlock,
  introBlock,
  portfolio, resume,
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
        <cnt-flexy-view-adam-promo-header-wrapper-1_01
          categories={promoMenuItems}
        ></cnt-flexy-view-adam-promo-header-wrapper-1_01>
        <cnt-flexy-view-adam-promo-intro-wrapper-1_01
          payload={introBlock}
        ></cnt-flexy-view-adam-promo-intro-wrapper-1_01>
        <cnt-flexy-view-adam-promo-hello-wrapper-1_01
          payload={helloBlockDescription}
        ></cnt-flexy-view-adam-promo-hello-wrapper-1_01>
        <cnt-flexy-view-adam-promo-resume-wrapper-1_01
          payload={resume}
        ></cnt-flexy-view-adam-promo-resume-wrapper-1_01>
        <cnt-flexy-view-adam-promo-portfolio-wrapper-1_01
          payload={portfolio}
        ></cnt-flexy-view-adam-promo-portfolio-wrapper-1_01>
        <cnt-flexy-view-adam-promo-footer-wrapper-1_01
          categories={footerBlock}
        ></cnt-flexy-view-adam-promo-footer-wrapper-1_01>
      </div>
    );
  }
}
