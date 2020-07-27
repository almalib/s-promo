import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoFooter } from './cnt-flexy-view-adam-promo-footer';

describe('cnt-flexy-view-adam-promo-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoFooter],
      html: `<cnt-flexy-adam-promo-footer></cnt-flexy-adam-promo-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-adam-promo-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-adam-promo-footer>
    `);
  });
});
