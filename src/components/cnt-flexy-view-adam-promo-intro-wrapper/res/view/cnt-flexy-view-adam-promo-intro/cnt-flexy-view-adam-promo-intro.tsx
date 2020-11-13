import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { PromoIntroBlockInterface } from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-intro",
  styleUrl: "cnt-flexy-view-adam-promo-intro.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoIntro implements ComponentInterface {
  /**
   * Данные для блока интро
   */
  @Prop() payload: PromoIntroBlockInterface;

  render() {
    return (
      <header
        class="main-header"
        style={{ backgroundImage: `url(${this.payload.img})` }}
      >
        <div class="container">
          <div class="row personal-profile">
            <div class="col-md-4 personal-profile-avatar-wrapper">
              <div
                class="personal-profile-avatar"
                style={{ backgroundImage: `url(${this.payload.img})` }}
              ></div>
            </div>
            <div class="col-md-8">
              <p class="personal-profile-name">{this.payload.name}</p>
              <p class="personal-profile-work">{this.payload.speciality}</p>
              <div class="personal-profile-contacts">
                <dl class="contact-list">
                  <dt>Возраст:</dt>
                  <dd>{this.payload.age}</dd>
                  <dt>Телефон:</dt>
                  <dd>
                    <a href={"tel:" + this.payload.phone + ""}>
                      {this.payload.phone}
                    </a>
                  </dd>
                  <dt>Почта:</dt>
                  <dd>
                    <a href={"mailto:" + this.payload.mail + ""}>
                      {this.payload.mail}
                    </a>
                  </dd>
                  <dt>Адрес:</dt>
                  <dd>{this.payload.address}</dd>
                </dl>
              </div>
              <p class="personal-profiles-social">
                <a href="https://github.com/almalib/ng-promo" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/free_side/" target="_blank">
                  <i class="fab fa-instagram-square"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
