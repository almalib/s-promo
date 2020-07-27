import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-footer-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-footer-wrapper></cnt-flexy-view-adam-promo-footer-wrapper>');

    const element = await page.find('cnt-flexy-view-adam-promo-footer-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
