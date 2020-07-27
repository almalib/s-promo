import { newSpecPage } from '@stencil/core/testing';
import { CntFlexyViewAdamPromoSkillsBlock } from './cnt-flexy-view-adam-promo-skills-block';

describe('cnt-flexy-view-adam-promo-skills-block', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CntFlexyViewAdamPromoSkillsBlock],
      html: `<cnt-flexy-view-adam-promo-skills-block></cnt-flexy-view-adam-promo-skills-block>`,
    });
    expect(page.root).toEqualHtml(`
      <cnt-flexy-view-adam-promo-skills-block>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cnt-flexy-view-adam-promo-skills-block>
    `);
  });
});
