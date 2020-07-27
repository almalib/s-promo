import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoPortfolioWrapper } from './cnt-flexy-view-adam-promo-portfolio-wrapper';

describe('cnt-flexy-view-adam-promo-portfolio-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoPortfolioWrapper],
      html: `<cnt-flexy-view-adam-promo-portfolio-wrapper></cnt-flexy-view-adam-promo-portfolio-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-portfolio-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-portfolio-wrapper>
    `);
  });
});
