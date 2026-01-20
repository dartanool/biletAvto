import { Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  from: string;
  to: string;
  departureTime: string;
  price: number;
  status: 'completed' | 'upcoming' | 'cancelled';
  passengers: number;
}

const mockOrders: Order[] = [
  {
    id: '123456',
    date: '2024-02-15',
    from: 'Москва',
    to: 'Санкт-Петербург',
    departureTime: '10:00',
    price: 1200,
    status: 'upcoming',
    passengers: 1
  },
  {
    id: '123455',
    date: '2024-01-20',
    from: 'Москва',
    to: 'Казань',
    departureTime: '08:30',
    price: 1500,
    status: 'completed',
    passengers: 2
  },
  {
    id: '123454',
    date: '2024-01-10',
    from: 'Санкт-Петербург',
    to: 'Москва',
    departureTime: '15:00',
    price: 1200,
    status: 'cancelled',
    passengers: 1
  },
];

export function OrdersSection() {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'upcoming':
        return 'Предстоящая';
      case 'completed':
        return 'Завершена';
      case 'cancelled':
        return 'Отменена';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-primary mb-6">История заказов</h2>

        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">У вас пока нет заказов</p>
            <a
              href="/"
              className="inline-block mt-4 bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Найти билеты
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-gray-500">Заказ #{order.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-light flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-semibold text-primary">{order.from}</div>
                          <div className="text-sm text-gray-500">→</div>
                          <div className="font-semibold text-primary">{order.to}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(order.date).toLocaleDateString('ru-RU')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{order.departureTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <CreditCard className="w-4 h-4" />
                          <span className="text-sm font-semibold">{order.price} ₽</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:items-end">
                    <div className="text-sm text-gray-500">
                      Пассажиров: {order.passengers}
                    </div>
                    <button className="bg-light text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm whitespace-nowrap">
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
