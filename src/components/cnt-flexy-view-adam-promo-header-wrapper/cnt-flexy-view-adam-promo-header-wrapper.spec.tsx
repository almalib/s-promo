import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoHeaderWrapper } from './cnt-flexy-view-adam-promo-header-wrapper';

describe('cnt-flexy-view-adam-promo-header-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoHeaderWrapper],
      html: `<cnt-flexy-view-adam-promo-header-wrapper></cnt-flexy-view-adam-promo-header-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-header-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-header-wrapper>
    `);
  });
});
