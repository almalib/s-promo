import { Component, ComponentInterface, h, Prop, State } from "@stencil/core";
import {PromoPortfolioInterface} from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolio implements ComponentInterface {
  /**
   * Карточки портфолио
   */
  @Prop() payload: PromoPortfolioInterface;

  /**
   *
   */
  @State() portfolioCardsItemsState = this.payload.portfolioCardsItems;

  render() {
    return (
      <section id="portfolio">
        <div class="container section">
          <div class="row">
            <div class="col-md-12">
              <h2 id="portfolio-header" class="wow section-title">
                Мои проекты<span class="cursor">_</span>
              </h2>
            </div>
          </div>
          <div class="row portfolio-menu">
            <div class="col-md-12">
              <nav>
                <ul>
                  {this.payload.portfolioCategory.map((item) => {
                    return (
                      <cnt-flexy-view-adam-promo-portfolio-menu
                        payload={item}
                          onClickOnPortfoliosCategory={(item) =>
                          this.portfolioCardsFilter(item.detail)
                        }
                      ></cnt-flexy-view-adam-promo-portfolio-menu>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div class="portfolio-cards">
            {this.portfolioCardsItemsState.map((item) => {
              return (
                <cnt-flexy-view-adam-promo-portfolio-cards
                  payload={item}
                ></cnt-flexy-view-adam-promo-portfolio-cards>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /**
   * Фильтрация по категориям
   * @param id
   */
  public portfolioCardsFilter(id) {
    return id !== "all"
      ? (this.portfolioCardsItemsState = this.payload.portfolioCardsItems.filter(
          (item) => item.category === id
        ))
      : (this.portfolioCardsItemsState = this.payload.portfolioCardsItems);
  }
}
