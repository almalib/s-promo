import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoHelloWrapper } from './cnt-flexy-view-adam-promo-hello-wrapper';

describe('cnt-flexy-view-adam-promo-hello-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoHelloWrapper],
      html: `<cnt-flexy-view-adam-promo-hello-wrapper></cnt-flexy-view-adam-promo-hello-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-hello-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-hello-wrapper>
    `);
  });
});
