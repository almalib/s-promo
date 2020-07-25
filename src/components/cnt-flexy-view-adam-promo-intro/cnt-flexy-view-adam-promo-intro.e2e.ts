import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-intro', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-intro></cnt-flexy-view-adam-promo-intro>');

    const element = await page.find('cnt-flexy-view-adam-promo-intro');
    expect(element).toHaveClass('hydrated');
  });
});
