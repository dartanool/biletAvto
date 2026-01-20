import { Search, Calendar, MapPin, Clock, Shield, CreditCard, Headphones, Bus, CheckCircle, RotateCcw, Smartphone, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [showTelegramModal, setShowTelegramModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTelegramModal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const popularRoutes = [
    { from: 'Москва', to: 'Санкт-Петербург', price: 'от 1200 ₽', duration: '9ч' },
    { from: 'Москва', to: 'Казань', price: 'от 1500 ₽', duration: '12ч' },
    { from: 'Санкт-Петербург', to: 'Москва', price: 'от 1200 ₽', duration: '9ч' },
    { from: 'Москва', to: 'Нижний Новгород', price: 'от 800 ₽', duration: '7ч' },
    { from: 'Екатеринбург', to: 'Челябинск', price: 'от 600 ₽', duration: '4ч' },
    { from: 'Москва', to: 'Воронеж', price: 'от 900 ₽', duration: '8ч' },
  ];

  const advantages = [
    {
      icon: Search,
      title: 'Удобный поиск',
      description: 'Процесс покупки билета сделан максимально удобным для наших пользователей'
    },
    {
      icon: Bus,
      title: 'Обширный выбор среди перевозчиков',
      description: 'В системе зарегистрировано огромное число маршрутов и уникальных направлений'
    },
    {
      icon: CheckCircle,
      title: 'Без касс и очередей',
      description: 'Покупая билеты онлайн, Вам больше не придется ехать на автовокзал и ждать очереди'
    },
    {
      icon: RotateCcw,
      title: 'Возврат билетов',
      description: 'Возможность возврата билета в любое время с получением возмещения на банковскую карту'
    }
  ];

  const newsAndPromotions = [
    {
      title: 'Скидка 15% на первую поездку',
      description: 'Регистрируйтесь и получайте бонусы',
      date: '15.01.2024'
    },
    {
      title: 'Новые маршруты в Сочи',
      description: 'Открыты дополнительные рейсы',
      date: '12.01.2024'
    },
    {
      title: 'Программа лояльности',
      description: 'Копите баллы и экономьте на поездках',
      date: '10.01.2024'
    }
  ];

  const onlineReasons = [
    {
      icon: Clock,
      title: 'Экономия времени',
      description: 'Покупка за 2 минуты без очередей'
    },
    {
      icon: Shield,
      title: 'Безопасные платежи',
      description: 'Защита данных и гарантия возврата'
    },
    {
      icon: Smartphone,
      title: 'Всегда под рукой',
      description: 'Билет в телефоне, печать не нужна'
    },
    {
      icon: CreditCard,
      title: 'Любой способ оплаты',
      description: 'Карты, кошельки, терминалы'
    },
    {
      icon: Headphones,
      title: 'Поддержка 24/7',
      description: 'Помощь в любое время суток'
    }
  ];

  const partners = [
    { name: 'Антариз', logo: '/antariz.webp', url: 'https://antariz.ru' },
    { name: 'МУП "Городские Маршруты"', logo: '/autobus03.webp', url: 'https://gorodskiemarshruti.ru' },
    { name: 'Покатили', logo: '/pocatili.png', url: 'https://pokatili.ru' },
    { name: 'Проезд03', logo: '/proezd03.png', url: 'https://proezd03.ru' },
    { name: 'Профавто', logo: '/profavto03.png', url: 'https://profavto03.ru' },
    { name: 'QR-Plata', logo: '/qrplata.webp', url: 'https://qr-plata.ru' },
    { name: 'МУП "Управления Трамвая"', logo: '/tram03.webp', url: 'https://tramway-ulan-ude.ru' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching:', { fromCity, toCity, date });
  };

  return (
    <>
      <main>
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/background.jpg)', backgroundPosition: 'center 70%' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/25 to-light/30"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 mt-6 drop-shadow-lg">
                Билеты на автобус
              </h1>
            </div>

            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 sm:mb-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-primary mb-2">
                      Откуда
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light w-5 h-5" />
                      <input
                        type="text"
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        placeholder="Город отправления"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-primary mb-2">
                      Куда
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light w-5 h-5" />
                      <input
                        type="text"
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        placeholder="Город назначения"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative sm:col-span-2 lg:col-span-1">
                    <label className="block text-sm font-medium text-primary mb-2">
                      Дата
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light w-5 h-5" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Найти билеты</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">
              Популярные направления
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {popularRoutes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-light"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="text-base sm:text-lg font-semibold text-primary mb-1">
                        {route.from}
                      </div>
                      <div className="flex items-center text-gray-400 my-2">
                        <div className="w-full h-px bg-light"></div>
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-primary">
                        {route.to}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{route.duration}</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-accent">
                      {route.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-5 sm:p-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Новости и акции
              </h2>
              <a href="#" className="text-accent hover:text-primary transition-colors font-medium flex items-center gap-1">
                Все новости
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsAndPromotions.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-white rounded-xl p-5 sm:p-6 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 sm:mb-12 text-center">
              5 причин купить билеты на автобус онлайн
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {onlineReasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-5 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-light rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-light/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Купите билет через Telegram
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Покупайте билеты на автобус быстро и удобно через наш Telegram-бот. Всего несколько кликов — и билет у вас на телефоне!
            </p>
            <div className="bg-white rounded-xl p-6 sm:p-8 mb-8 shadow-md">
              <ol className="text-left space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="text-gray-700">Перейдите по ссылке <a href="https://t.me/BiletAvto_bot" className="text-light hover:text-accent font-medium">t.me/BiletAvto_bot</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="text-gray-700">Выберите направление, дату и время поездки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="text-gray-700">Оплатите билет удобным способом</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span className="text-gray-700">Получите электронный билет на телефон</span>
                </li>
              </ol>
            </div>
            <a
              href="https://t.me/BiletAvto_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#0088cc] text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-all shadow-md"
            >
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 3.99-1.73 6.65-2.87 7.98-3.42 3.79-1.57 4.58-1.84 5.09-1.85.11 0 .36.03.52.17.14.12.18.28.2.44-.01.06.01.24 0 .38z"/>
              </svg>
              Перейти в Telegram-бот
            </a>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8 sm:mb-12 text-center">
              Наши партнеры
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 items-start justify-items-center">
              {partners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 w-full group"
                >
                  <div className="flex items-center justify-center w-full mb-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full h-auto max-h-12 sm:max-h-16 lg:max-h-24 object-contain group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-center text-gray-700 font-medium group-hover:text-primary transition-colors px-1">
                    {partner.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {showTelegramModal && (
        <div className="fixed bottom-3 right-3 z-50 max-w-[220px] sm:max-w-xs">
          <div className="bg-white rounded-lg p-3 shadow-2xl relative border-2 border-accent">
            <button
              onClick={() => setShowTelegramModal(false)}
              className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="text-center pr-2">
              <div className="w-12 h-12 mx-auto mb-1.5 flex items-center justify-center">
                <img src="/логотг.jpg" alt="БилетАвто" className="w-full h-full object-contain rounded-full border border-black" />
              </div>
              <h3 className="text-sm font-bold text-primary mb-1">
                Купи легко через Telegram
              </h3>
              <p className="text-gray-600 text-[10px] mb-2">
                Быстро и удобно через наш бот
              </p>
              <a
                href="https://t.me/BiletAvto_bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowTelegramModal(false)}
                className="inline-flex items-center justify-center gap-1.5 bg-[#0088cc] text-white px-3 py-2 rounded-lg font-semibold text-xs hover:opacity-90 transition-all shadow-md w-full"
              >
                <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 3.99-1.73 6.65-2.87 7.98-3.42 3.79-1.57 4.58-1.84 5.09-1.85.11 0 .36.03.52.17.14.12.18.28.2.44-.01.06.01.24 0 .38z"/>
                </svg>
                Перейти в Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
