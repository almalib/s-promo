import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-intro-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-intro-wrapper></cnt-flexy-view-adam-promo-intro-wrapper>');

    const element = await page.find('cnt-flexy-view-adam-promo-intro-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
