import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoEducation } from './cnt-flexy-view-adam-promo-education';

describe('cnt-flexy-view-adam-promo-education', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoEducation],
      html: `<cnt-flexy-view-adam-promo-education></cnt-flexy-view-adam-promo-education>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-education>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-education>
    `);
  });
});
