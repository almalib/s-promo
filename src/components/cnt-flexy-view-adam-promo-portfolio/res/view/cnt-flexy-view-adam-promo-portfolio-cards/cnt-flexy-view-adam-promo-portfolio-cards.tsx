import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-portfolio-cards",
  styleUrl: "cnt-flexy-view-adam-promo-portfolio-cards.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoPortfolioCards implements ComponentInterface {
  /**
   * Карточки портфолио
   */
  @Prop() portfolioCardsItems: any;

  /**
   * Данные для компонента stack
   */
  @Prop() stackList: any;

  render() {
    return (
      <div
        class="row project-card"
        data-toggle="modal"
        data-target="#portfolioModal"
        data-portfolio-tag="web-sites"
      >
        <div class="col-md-6 col-lg-5 project-card-img">
          <div
            class="portfolio-card-img"
            style={{
              backgroundImage: "url(" + this.portfolioCardsItems.img + ")",
            }}
          ></div>
        </div>
        <div class="col-md-6 col-lg-7 project-card-info">
          <h3 class="project-card-title">{this.portfolioCardsItems.title}</h3>
          <p class="project-card-description">
            {this.portfolioCardsItems.description}
          </p>
          <p class="project-card-stack">Used stack:</p>
          <StackList array={this.stackList}></StackList>
          <a
            href={this.portfolioCardsItems.link}
            class="project-card-link"
          >
            ссылка
          </a>
        </div>
      </div>
    );
  }
}

const StackList = (props) => {
  return props.array.map(item => {
    return <cnt-flexy-view-adam-promo-portfolio-stack stackList={item}></cnt-flexy-view-adam-promo-portfolio-stack>
  })
}
