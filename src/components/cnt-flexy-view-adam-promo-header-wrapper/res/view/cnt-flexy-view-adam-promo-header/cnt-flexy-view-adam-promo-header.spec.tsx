import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoHeader } from './cnt-flexy-view-adam-promo-header';

describe('cnt-flexy-view-adam-promo-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoHeader],
      html: `<cnt-flexy-view-adam-promo-header></cnt-flexy-view-adam-promo-header>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-header>
    `);
  });
});
