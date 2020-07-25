import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {PromoMenuItemsInterface} from "./res/interface/common.interface";

@Component({
  tag: 'cnt-flexy-view-adam-promo-header-1_01',
  styleUrl: 'cnt-flexy-view-adam-promo-header.css',
  shadow: false,
  scoped: false
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

  componentDidLoad() {
    this.switchedHeaderStyles();
    window.onscroll = () => {
      this.switchedHeaderStyles()
    }
  }

  render() {
    return (
      <div class="menu" ref={(el) => this.menuTag = el}>
        <div class="container">
          <div class="row">
            <div class="menu-wrapper col-md-12 d-lg-block">
              <nav>
                <ul>
                  <MenuItems array={this.categories}></MenuItems>
                </ul>
              </nav>
            </div>
          </div>
          <div class="menu-wrapper col-md-12 d-lg-none">
            <button type="button" class="menu_mobile-button">
              <span>
                <i class="fa fa-bars"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // public switchedMenusColor () {
  //   window.onscroll = () => {
  //     let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrolled > 400) {
  //       this.menuTag.classList.add("menu_active");
  //     } else {
  //     }
  //   }
  // }

  public switchedHeaderStyles() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 0){
      this.menuTag.classList.add("menu-active");
    }else{
      this.menuTag.classList.remove("menu-active");
    }
  }
}

const MenuItems = (props) => {
  return props.array.map(item => {
    return <cnt-flexy-view-adam-promo-header-menu menuItems={item}></cnt-flexy-view-adam-promo-header-menu>
  })
}
