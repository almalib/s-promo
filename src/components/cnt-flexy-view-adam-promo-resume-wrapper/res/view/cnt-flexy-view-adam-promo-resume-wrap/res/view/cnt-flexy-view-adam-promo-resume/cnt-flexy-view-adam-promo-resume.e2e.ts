import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-resume', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-resume></cnt-flexy-view-adam-promo-resume>');

    const element = await page.find('cnt-flexy-view-adam-promo-resume');
    expect(element).toHaveClass('hydrated');
  });
});
