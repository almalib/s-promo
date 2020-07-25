import { Component, ComponentInterface, h, Prop } from '@stencil/core';
import {PromoIntroBlockInterface} from "./res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-intro-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-intro.css',
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoIntro implements ComponentInterface {
  @Prop() deployed: PromoIntroBlockInterface;

  render() {
    return (
      <header class="main-header" style={{backgroundImage: 'url('+this.deployed.img+')'}} >
        <div class="container">
          <div class="row personal-profile">
            <div class="col-md-4 personal-profile-avatar-wrapper">
              <div class="personal-profile-avatar" style={{backgroundImage: 'url('+this.deployed.img+')'}}>
              </div>
            </div>
            <div class="col-md-8">
              <p class="personal-profile-name">{this.deployed.name}</p>
              <p class="personal-profile-work">{this.deployed.speciality}</p>
              <div class="personal-profile-contacts">
                <dl class="contact-list">
                  <dt>Возраст:</dt>
                  <dd>{this.deployed.age}</dd>
                  <dt>Телефон:</dt>
                  <dd><a href={'tel:'+this.deployed.phone+''}>{this.deployed.phone}</a></dd>
                  <dt>Почта:</dt>
                  <dd><a href={'mailto:'+this.deployed.mail+''}>{this.deployed.mail}</a></dd>
                  <dt>Адрес:</dt>
                  <dd>{this.deployed.address}</dd>
                </dl>
              </div>
              <p class="personal-profiles-social">
                <a href=""><i class="fab fa-github"></i></a>
                <a href=""><i class="fab fa-instagram-square"></i></a>
                <a href=""><i class="fab fa-facebook-square"></i></a>
              </p>
            </div>
          </div>
        </div>
      </header>

    );
  }

}
