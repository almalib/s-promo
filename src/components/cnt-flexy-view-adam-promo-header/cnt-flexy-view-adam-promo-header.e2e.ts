import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-header></cnt-flexy-view-adam-promo-header>');

    const element = await page.find('cnt-flexy-view-adam-promo-header');
    expect(element).toHaveClass('hydrated');
  });
});
