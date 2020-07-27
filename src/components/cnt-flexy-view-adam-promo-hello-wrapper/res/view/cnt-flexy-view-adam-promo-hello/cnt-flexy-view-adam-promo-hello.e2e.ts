import { newE2EPage } from '@stencil/core/testing';

describe('cnt-flexy-view-adam-promo-hello', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cnt-flexy-view-adam-promo-hello></cnt-flexy-view-adam-promo-hello>');

    const element = await page.find('cnt-flexy-view-adam-promo-hello');
    expect(element).toHaveClass('hydrated');
  });
});
