import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoEducationBlock } from './cnt-flexy-view-adam-promo-education-block';

describe('cnt-flexy-view-adam-promo-education-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoEducationBlock],
      html: `<cnt-flexy-view-adam-promo-education-block></cnt-flexy-view-adam-promo-education-block>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-education-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-education-block>
    `);
  });
});
