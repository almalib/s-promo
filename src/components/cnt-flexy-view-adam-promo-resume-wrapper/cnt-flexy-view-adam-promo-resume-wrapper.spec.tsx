import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoResumeWrapper } from './cnt-flexy-view-adam-promo-resume-wrapper';

describe('cnt-flexy-view-adam-promo-resume-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoResumeWrapper],
      html: `<cnt-flexy-view-adam-promo-resume-wrapper></cnt-flexy-view-adam-promo-resume-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-resume-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-resume-wrapper>
    `);
  });
});
