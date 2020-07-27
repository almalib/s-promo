export interface PromoPortfolioInterface {
  portfolioCategory:
    { id: string,
      item: string
    }[],
  portfolioCardsItems:
    {
      img: string,
      title: string,
      description: string,
      link: string,
      category: string,
      stackList: string[]
    }[],
};
