import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { PromoMenuItemsInterface } from "./res/interface/common.interface";

@Component({
  tag: "cnt-flexy-view-adam-promo-header-1_01",
  styleUrl: "cnt-flexy-view-adam-promo-header.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewAdamPromoHeader implements ComponentInterface {
  /**
   * Элементы меню
   */
  @Prop() categories: PromoMenuItemsInterface[] = [];

  /**
   *
   */
  public menuTag: HTMLElement;

  /**
   *
   */
  public mobileMenuTag: HTMLElement;

  componentDidLoad() {
    this.switchedHeaderStyles();
    window.onscroll = () => {
      this.switchedHeaderStyles();
    };
  }

  render() {
    return (
      <div>
        <div class="menu" ref={(el) => (this.menuTag = el)}>
          <div class="container">
            <div class="row">
              <div class="menu-wrapper d-none col-md-12 d-lg-block">
                <nav>
                  <ul>
                    <MenuItems array={this.categories}></MenuItems>
                  </ul>
                </nav>
              </div>
              <div class="menu-wrapper col-md-12 d-lg-none">
                <button
                  type="button"
                  class="menu-mobile-button"
                  onClick={() => this.openAndCloseMobileMenu()}
                >
                  <span>
                    <i class="fa fa-bars"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mobile-menu d-lg-none"
          ref={(el) => (this.mobileMenuTag = el)}
        >
          <div class="container">
            <div
              class="mobile-menu-close"
              onClick={() => this.openAndCloseMobileMenu()}
            >
              <span>
                <i class="fas fa-times"></i>
              </span>
            </div>
            <nav class="mobile-menu-wrapper">
              <ul>
                <li onClick={() => this.closeMobileMenu()}>
                  <a href="#hello">Привет</a>
                </li>
                <li onClick={() => this.closeMobileMenu()}>
                  <a href="#resume">Резюме</a>
                </li >
                <li onClick={() => this.closeMobileMenu()}>
                  <a href="#portfolio">Портфолио</a>
                </li >
                <li onClick={() => this.closeMobileMenu()}>
                  <a href="#contact">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  /**
   * Метод для смены внешнего вида главного меню при скролле
   */
  public switchedHeaderStyles() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
      this.menuTag.classList.add("menu-active");
    } else {
      this.menuTag.classList.remove("menu-active");
    }
  }

  /**
   * Открытие и закрытие мобильного меню при нажатии на иконки
   */
  public openAndCloseMobileMenu() {
    this.mobileMenuTag.classList.toggle("active");
  }

  /**
   * Закрытие мобильного меню при нажатии на ссылки
   */

  public closeMobileMenu() {
    this.mobileMenuTag.classList.remove("active");
  }
}

const MenuItems = (props) => {
  return props.array.map((item) => {
    return (
      <cnt-flexy-view-adam-promo-header-menu
        menuItems={item}
      ></cnt-flexy-view-adam-promo-header-menu>
    );
  });
};
