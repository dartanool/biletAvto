export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">РАСПИСАНИЕ</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Главная</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Расписание</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Расписание маршруток</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Расписание пригородных маршрутов</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Страны</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">ИНФОРМАЦИЯ</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Новости и акции</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Возврат билета</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Вопросы и ответы</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Телефоны автовокзалов</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Поиск полисов</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Партнерам</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">ДОКУМЕНТЫ</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Договор оферты</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Согласие на обработку персональных данных</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">КОНТАКТЫ</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>ОГРН: 1180327010951, ООО «БИЛЕТ АВТО»</li>
              <li>ИНН/КПП: 0326562943/032601001</li>
              <li className="mt-3">Адрес для почтовых отправлений: 670002, г. Улан-Удэ, ул. Буйко 20а, офис 3</li>
              <li className="mt-3">Телефон для справок: <a href="tel:89021668003" className="hover:text-accent transition-colors">8 (9021) 66-80-03</a> (с 04:00 до 13:00 по МСК)</li>
              <li>Телефон тех. поддержки: <a href="tel:83012268003" className="hover:text-accent transition-colors">8 (3012) 26-80-03</a></li>
              <li>Наша почта: <a href="mailto:info@biletavto.ru" className="hover:text-accent transition-colors">info@biletavto.ru</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h5 className="font-semibold mb-3 text-sm">МЫ В СОЦСЕТЯХ</h5>
              <div className="flex gap-4">
                <a href="https://vk.com/biletavto" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#0077FF] hover:opacity-80 flex items-center justify-center transition-all" title="ВКонтакте">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.63h-1.9c-.54 0-.71-.43-1.69-1.41-.85-.83-1.23-.94-1.44-.94-.3 0-.38.08-.38.47v1.29c0 .35-.11.56-1.03.56-1.51 0-3.18-.92-4.35-2.63-1.77-2.43-2.25-4.27-2.25-4.64 0-.21.08-.41.47-.41h1.9c.35 0 .48.16.62.54.73 2.11 1.95 3.96 2.45 3.96.19 0 .27-.09.27-.57v-2.21c-.06-.99-.58-1.08-.58-1.43 0-.17.14-.34.37-.34h2.99c.3 0 .4.16.4.52v2.98c0 .3.13.4.22.4.19 0 .35-.1.7-.45 1.08-1.22 1.85-3.11 1.85-3.11.1-.21.27-.41.62-.41h1.9c.38 0 .46.19.38.52-.15.77-1.13 2.52-2.58 4.23-.39.49-.3.7 0 1.13.27.35 1.23 1.2 1.86 1.93.37.44.67.81.75 1.06.07.28-.05.43-.46.43z"/>
                  </svg>
                </a>
                <a href="https://ok.ru/biletavto" target="_blank" rel="noopener noreferrer" className="w-12 h-12 hover:opacity-80 transition-all" title="Одноклассники">
                  <img src="/png-clipart-odnoklassniki-odnoklassniki-thumbnail.png" alt="Одноклассники" className="w-full h-full object-contain rounded-full" />
                </a>
                <a href="https://t.me/BiletAvto_bot" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#0088cc] hover:opacity-80 flex items-center justify-center transition-all" title="Telegram">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 3.99-1.73 6.65-2.87 7.98-3.42 3.79-1.57 4.58-1.84 5.09-1.85.11 0 .36.03.52.17.14.12.18.28.2.44-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">ПОПУЛЯРНЫЕ СПОСОБЫ ОПЛАТЫ</h5>
              <div className="flex gap-4 items-center flex-wrap">
                <img src="/visa.svg" alt="Visa" className="h-8 sm:h-10 lg:h-12 brightness-110 contrast-125" />
                <img src="/mastercard.svg" alt="MasterCard" className="h-8 sm:h-10 lg:h-12" />
                <img src="/maestro.svg" alt="Maestro" className="h-8 sm:h-10 lg:h-12" />
                <img src="/qr_sbp.svg" alt="СБП" className="h-8 sm:h-10 lg:h-12" />
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3 text-sm">ЭЛЕКТРОННАЯ ОПЛАТА</h5>
              <ul className="space-y-1 text-gray-300 text-xs">
                <li>В общественном транспорте: <a href="https://proezd03.ru" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Proezd03.ru</a></li>
                <li>С помощью QR-кода: <a href="https://qr-plata.ru" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">QR-plata.ru</a></li>
                <li className="mt-3 flex items-start gap-2">
                  <span>Безопасность оплаты обеспечивают:</span>
                  <img src="/sber_fulli.png" alt="Сбербанк" className="h-8 sm:h-10 lg:h-12" />
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xs text-gray-400 mb-4">
            Мы используем информацию, зарегистрированную в файлах «cookies», в частности, в рекламных и статистических целях, а также для того, чтобы адаптировать наши сайты к индивидуальным потребностям Пользователей. Вы можете изменить настройки касающиеся «cookies» в вашем браузере. Изменение настроек может ограничить функциональность сайта.
          </div>

          <div className="text-center text-sm text-gray-300 pt-4 border-t border-gray-700">
            <p className="mb-2">&copy; 2026, ООО «БИЛЕТ АВТО». Все права защищены.</p>
            <p className="text-xs">«Biletavto» — Сайт заказа билетов на автобус</p>
            <a href="#" className="text-xs text-gray-400 hover:text-accent transition-colors mt-2 inline-block">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
