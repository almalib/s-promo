import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "cnt-flexy-view-adam-promo-hello",
  styleUrl: "cnt-flexy-view-adam-promo-hello.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoHello implements ComponentInterface {
  /**
   * Описание блока Hello
   */
  @Prop() payload: string;

  render() {
    return (
      <section id="hello">
        <div class="container section">
          <div class="row">
            <div class="col-md-10">
              <h2 id="hello-header" class="wow section-title">
                Привет<span class="cursor">_</span>
              </h2>
              <p class="section-description">{this.payload}</p>
              <a href="https://yadi.sk/i/HEsm3mU63t59xw" class="section-btn site-btn">
                <i class="fas fa-download"></i>Скачать резюме
              </a>
            </div>
          </div>
        </div>
        <hr />
      </section>
    );
  }
}
