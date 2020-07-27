import {Component, ComponentInterface, h, Prop} from "@stencil/core";
import {PromoFooterBlockInterface} from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-footer-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-footer.css",
  shadow: false,
  scoped: true
})
export class CntFlexyViewAdamPromoFooter implements ComponentInterface {
  /**
   * Данные для футера
   */
  @Prop() categories: PromoFooterBlockInterface;

  render() {
    return (
      <div class="background" style={{backgroundImage: 'url('+this.categories.img+')'}}>
        <div id="contact" class="container section">
          <div class="row">
            <div class="col-md-12">
              <p id="contacts_header" class="wow section-title">
                Мои контакты<span class="cursor">_</span>
              </p>
            </div>
          </div>
          <div class="row contacts">
            <div class="col-md-5 col-lg-4">
              <div class="contacts-list">
                <dl class="contact-list">
                  <dt>Phone:</dt>
                  <dd>
                    <a href={'tel:'+this.categories.phone+''}>{this.categories.phone}</a>
                  </dd>
                  <dt>Skype:</dt>
                  <dd>
                    <a href={'skype:'+this.categories.skype+''}>{this.categories.skype}</a>
                  </dd>
                  <dt>Email:</dt>
                  <dd>
                    <a href={'mailto:'+this.categories.mail+''}>{this.categories.mail}</a>
                  </dd>
                </dl>
              </div>
              <div class="contacts-social">
                <ul>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Instagram</a>
                  </li>
                  <li>
                    <a href="">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-7 col-lg-5">
              <div class="contacts-form">
                <p class="contacts-form-title">
                  Вы также можете написать мне письмо прямо здесь_
                </p>
                <form>
                  <div class="form-group">
                    <input
                      class="form-field"
                      type="text"
                      placeholder="Ваше имя"
                    />
                    <span class="form-validation"></span>
                    <span class="form-invalid-icon">
                      <i class="mdi mdi-close"></i>
                    </span>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-field"
                      type="email"
                      placeholder="Ваша почта"
                    />
                    <span class="form-validation"></span>
                    <span class="form-invalid-icon">
                      <i class="mdi mdi-close"></i>
                    </span>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-field"
                      placeholder="Ваше сообщение"
                    ></textarea>
                    <span class="form-validation"></span>
                    <span class="form-invalid-icon">
                      <i class="mdi mdi-close"></i>
                    </span>
                  </div>
                  <button
                    class="site-btn site-btn-form"
                    type="submit"
                    value="Send"
                  >
                    Отправить
                  </button>
                </form>
              </div>
              <div class="footer">
                <p>© 2020 Адам Абдулаев. Все права защищены</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
