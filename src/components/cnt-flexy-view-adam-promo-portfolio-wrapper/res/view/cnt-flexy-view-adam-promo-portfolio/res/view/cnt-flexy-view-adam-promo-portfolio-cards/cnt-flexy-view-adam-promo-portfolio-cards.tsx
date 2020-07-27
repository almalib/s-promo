import {Component, ComponentInterface, h, Prop} from "@stencil/core";

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
  @Prop() payload: any;

  render() {
    return (
      <div
        class="row project-card"
      >
        <div class="col-md-6 col-lg-5 project-card-img">
          <div
            class="portfolio-card-img"
            style={{
              backgroundImage: "url(" + this.payload.img + ")",
            }}
          ></div>
        </div>
        <div class="col-md-6 col-lg-7 project-card-info">
          <h3 class="project-card-title">{this.payload.title}</h3>
          <p class="project-card-description">
            {this.payload.description}
          </p>
          <p class="project-card-stack">Использованный стек:</p>
          <StackList array={this.payload.stackList}></StackList>
          <a href={this.payload.link} class="project-card-link">
            ссылка
          </a>
        </div>
      </div>
    );
  }
}

const StackList = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-portfolio-stack
        stackList={item}
      ></cnt-flexy-view-adam-promo-portfolio-stack>
    );
  });
};
