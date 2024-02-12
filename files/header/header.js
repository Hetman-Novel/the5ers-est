// Определение операционной системы и браузер
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
}

// Проверка. Если одно из устройст с тачскрином
if (isMobile.any()) {
   // Если ПК. Добавляется класс _touch к Body
   document.body.classList.add('_touch');
   // Собераются все стрелки с классом menu__arrow в переменную
   let menuArrows = document.querySelectorAll('.menu__arrow');
   // Есть ли стрелки в массиве
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }
} else {
   // Если тачскрин. Добавляется класс _pc к Body
   document.body.classList.add('_pc');
}

// Меню бургер
const iconsMenu = document.querySelectorAll('.menu__icon');
const closesMenu = document.querySelectorAll('.header__close-menu');
const btnMenu = document.getElementById('top-panel-btn-menu');
const menuBody = document.querySelector('.menu__body');
const menu_item_has_children = document.querySelector('.menu-item-has-children');
if (iconsMenu) {
   /*
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      //iconsMenu.classList.toggle('_active');
      //menuBody.classList.toggle('_active');
      if (menu_item_has_children) {
         menu_item_has_children.classList.remove('_active');
      }
   });
   */
   iconsMenu.forEach(iconMenu => {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         menuBody.classList.toggle('_active');
         //iconMenu.classList.toggle('_active');
      });
      if (menu_item_has_children) {
         menu_item_has_children.classList.remove('_active');
      }
   });
   btnMenu.addEventListener("click", function (e) {
      btnMenu.classList.toggle('_active');
   });
}
if (closesMenu) {
   closesMenu.forEach(closeMenu => {
      closeMenu.addEventListener("click", function (e) {
         document.body.classList.remove('_lock');
         menuBody.classList.remove('_active');
      });
   });
}
/*
if (closeMenu) {
   closeMenu.addEventListener("click", function (e) {
      closeMenu.classList.remove('_active');
   });
}*/
/*
const menuItems = document.querySelectorAll('.menu-item');
if (menuItems) {
   closeMenu.addEventListener("click", function (e) {
      menuItems.forEach(menuItem => {
         menuItem.classList.toggle('_active');
      });
   });
}
*/

/*
if (document.querySelector('.header').classList.contains('n_hidden')) {
   document.querySelector('.header').classList.remove('n_hidden');
}
document.querySelector('.header')
*/

const headerElement = document.querySelector('.header');
if (headerElement) {
   const callback = function (entries, observe) {
      if (entries[0].isIntersecting) {
         headerElement.classList.remove('n_scroll');
      } else {
         headerElement.classList.add('n_scroll');
      }
   }
   const headerObserver = new IntersectionObserver(callback);
   headerObserver.observe(headerElement);
}

let lastScroll = 0;
const defaultOffset = 200;
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTo;
const containHide = () => headerElement.classList.contains('n_hidden');

/*window.addEventListener('scroll', () => {
   
   if (scrollPosition() > lastScroll && !containHide()) {
      // scroll down
      headerElement.classList.add('n_hidden');
   } else if (scrollPosition() < lastScroll && containHide()) {
      // scroll top
      headerElement.classList.remove('n_hidden');
   }

   lastScroll = scrollPosition();
})*/