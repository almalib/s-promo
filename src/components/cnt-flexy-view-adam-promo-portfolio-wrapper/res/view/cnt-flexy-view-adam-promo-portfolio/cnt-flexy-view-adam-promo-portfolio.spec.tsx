import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoPortfolio } from './cnt-flexy-view-adam-promo-portfolio';

describe('cnt-flexy-view-adam-promo-portfolio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoPortfolio],
      html: `<cnt-flexy-view-adam-promo-portfolio></cnt-flexy-view-adam-promo-portfolio>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-portfolio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-portfolio>
    `);
  });
});
