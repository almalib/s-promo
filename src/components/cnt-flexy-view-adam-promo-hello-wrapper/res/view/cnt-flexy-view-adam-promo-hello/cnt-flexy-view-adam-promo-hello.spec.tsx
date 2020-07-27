import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoHello } from './cnt-flexy-view-adam-promo-hello';

describe('cnt-flexy-view-adam-promo-hello', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoHello],
      html: `<cnt-flexy-view-adam-promo-hello></cnt-flexy-view-adam-promo-hello>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-hello>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-hello>
    `);
  });
});
