document.addEventListener("DOMContentLoaded", function() {

   // Currency and Weekdays
   // Variable to track whether "All" button has been clicked for currency
   let allCurrencyClicked = false
   // Function to handle button clicks for currency
   function handleCurrencyButtonClick(event) {
      const clickedButton = event.target
      if (clickedButton.id === 'ec-currency-all') {
         // Clicked on "Select All Currencies" button
         allCurrencyClicked = !allCurrencyClicked
         document.querySelectorAll('.economic-calendar__block-list-currency button').forEach(button => {
            button.classList.toggle('checked', allCurrencyClicked)
         })
      } else {
         // Clicked on a specific currency button
         clickedButton.classList.toggle('checked')

         // Получаем значение атрибута data-current
         const dataCurrency = clickedButton.getAttribute('data-currency')
         console.log(dataCurrency)
      }
   }
   // Attach click event listener to all buttons in currency list
   document.querySelectorAll('.economic-calendar__block-list-currency button').forEach(button => {
      button.addEventListener('click', handleCurrencyButtonClick)
   })
   // Variable to track whether "All" button has been clicked for weekdays
   let allWeekdaysClicked = false;
   // Function to handle button clicks for weekdays
   function handleWeekdaysButtonClick(event) {
      const clickedButton = event.target
      if (clickedButton.id === 'ec-weekdays-all') {
         // Clicked on "Select All Weekdays" button
         allWeekdaysClicked = !allWeekdaysClicked

         document.querySelectorAll('.economic-calendar__block-list-weekdays button').forEach(button => {
            button.classList.toggle('checked', allWeekdaysClicked)
         })
      } else {
         // Clicked on a specific weekday button
         clickedButton.classList.toggle('checked')

         // Получаем значение атрибута data-weekdays
         const dataWeekdays = clickedButton.getAttribute('data-weekdays')
         console.log(dataWeekdays)
      }
   }
   // Attach click event listener to all buttons in weekdays list
   document.querySelectorAll('.economic-calendar__block-list-weekdays button').forEach(button => {
      button.addEventListener('click', handleWeekdaysButtonClick)
   })

	// Directions
   /*const ec_orders = document.querySelectorAll('.js-order')
   ec_orders.forEach(function(ec_order) {
      ec_order.addEventListener('click', function() {
         ec_order.classList.toggle('reverse-order')
      })
   })
   */

   let ec_filter_btn = document.getElementById('ec-filter-btn')
   if (ec_filter_btn) {
      ec_filter_btn.addEventListener('click', () => {
         document.querySelector('.economic-calendar__column-wrapper').classList.toggle('open')
         ec_filter_btn.classList.toggle('active')
      })
   }
})

if (window.matchMedia("(min-width: 721px)").matches) {
   document.querySelector('.economic-calendar__block-list-weekdays.mobile').remove()
}
if (window.matchMedia("(max-width: 720.98px)").matches) {
   document.querySelector('.economic-calendar__block-list-weekdays.desktop').remove()
}

// Получаем блоки и их родителя
const blockHead = document.querySelector('.economic-calendar__block-head');
if (blockHead) {
   const columns = document.querySelectorAll('.economic-calendar__block-head-column:nth-child(3), .economic-calendar__block-head-column:nth-child(4)');
   let wrapperCreated = false; // Переменная для отслеживания создания контейнера

   // Проверяем ширину экрана при загрузке страницы
   wrapColumnsIfNeeded();

   // Добавляем обработчик события изменения размера окна
   window.addEventListener('resize', wrapColumnsIfNeeded);

   // Функция для обертывания блоков при необходимости
   function wrapColumnsIfNeeded() {
   if (window.innerWidth <= 720 && !wrapperCreated) {
      // Создаем новый контейнер для обертывания блоков
      const wrapper = document.createElement('div');
      wrapper.classList.add('economic-calendar__column-wrapper');

      // Обертываем каждый блок
      columns.forEach(column => {
         wrapper.appendChild(column.cloneNode(true));
         column.remove();
      });

      // Вставляем новый контейнер перед блоком head
      blockHead.insertBefore(wrapper, blockHead.firstChild);

      // Устанавливаем флаг, что контейнер создан
      wrapperCreated = true;
   } else if (window.innerWidth > 720 && wrapperCreated) {
      // Если ширина больше 720px и контейнер был создан, восстанавливаем блоки
      const wrapper = blockHead.querySelector('.economic-calendar__column-wrapper');
      if (wrapper) {
         columns.forEach(column => {
         wrapper.removeChild(wrapper.firstChild);
         blockHead.appendChild(column);
         });
         wrapper.remove();

         // Сбрасываем флаг, что контейнер создан
         wrapperCreated = false;
      }
   }
   }
}