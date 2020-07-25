import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import {
  PromoPortfolioBlockMenuItemsInterface,
  PromoPortfolioCardsItemsInterface,
} from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolio implements ComponentInterface {
  /**
   * Меню портфолио
   */
  @Prop() portfolioBlockMenuItems: PromoPortfolioBlockMenuItemsInterface[] = [];

  /**
   * Карточки портфолио
   */
  @Prop() portfolioCardsItems: PromoPortfolioCardsItemsInterface[] = [];

  /**
   * Данные для компонента stack
   */
  @Prop() stackList: any;

  render() {
    return (
      <section id="portfolio">
        <div class="container section">
          <div class="row">
            <div class="col-md-12">
              <h2 id="portfolio-header" class="section-title">
                Мои проекты_
              </h2>
            </div>
          </div>
          <div class="row portfolio-menu">
            <div class="col-md-12">
              <nav>
                <ul>
                  <PortfolioBlockMenu
                    array={this.portfolioBlockMenuItems}
                  ></PortfolioBlockMenu>
                </ul>
              </nav>
            </div>
          </div>
          <div class="portfolio-cards">
            {this.portfolioCardsItems.map(item => {
              return (
                <cnt-flexy-view-adam-promo-portfolio-cards
                  portfolioCardsItems={item}
                  stackList={this.stackList}
                ></cnt-flexy-view-adam-promo-portfolio-cards>
              );
              }
            )}

          </div>
        </div>
      </section>
    );
  }
}

const PortfolioBlockMenu = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-portfolio-menu
        portfolioBlockMenuItems={item}
      ></cnt-flexy-view-adam-promo-portfolio-menu>
    );
  });
};

