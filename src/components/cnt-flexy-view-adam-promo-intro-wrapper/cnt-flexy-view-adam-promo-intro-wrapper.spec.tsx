import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoIntroWrapper } from './cnt-flexy-view-adam-promo-intro-wrapper';

describe('cnt-flexy-view-adam-promo-intro-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoIntroWrapper],
      html: `<cnt-flexy-view-adam-promo-intro-wrapper></cnt-flexy-view-adam-promo-intro-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-intro-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-intro-wrapper>
    `);
  });
});
