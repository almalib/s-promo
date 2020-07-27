import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-portfolio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-portfolio></cnt-flexy-view-adam-promo-portfolio>');

    const element = await page.find('cnt-flexy-view-adam-promo-portfolio');
    expect(element).toHaveClass('hydrated');
  });
});
