import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoFooterWrapper } from './cnt-flexy-view-adam-promo-footer-wrapper';

describe('cnt-flexy-view-adam-promo-footer-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoFooterWrapper],
      html: `<cnt-flexy-view-adam-promo-footer-wrapper></cnt-flexy-view-adam-promo-footer-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-footer-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-footer-wrapper>
    `);
  });
});
