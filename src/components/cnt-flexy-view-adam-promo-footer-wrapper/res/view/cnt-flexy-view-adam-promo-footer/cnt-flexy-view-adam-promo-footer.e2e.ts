import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-footer></cnt-flexy-view-adam-promo-footer>');

    const element = await page.find('cnt-flexy-view-adam-promo-footer');
    expect(element).toHaveClass('hydrated');
  });
});
