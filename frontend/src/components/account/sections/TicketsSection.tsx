import { Download, RotateCcw, Calendar, MapPin, Clock, User, Shield } from 'lucide-react';

interface Ticket {
  id: string;
  orderNumber: string;
  date: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  seatNumber: string;
  passengerName: string;
  price: number;
  canReturn: boolean;
  hasInsurance: boolean;
  insurancePolicyNumber?: string;
}

const mockTickets: Ticket[] = [
  {
    id: 'TKT-001',
    orderNumber: '123456',
    date: '2024-02-15',
    from: 'Москва',
    to: 'Санкт-Петербург',
    departureTime: '10:00',
    arrivalTime: '19:00',
    seatNumber: '12',
    passengerName: 'Иванов Иван Иванович',
    price: 1200,
    canReturn: true,
    hasInsurance: true,
    insurancePolicyNumber: 'POL-2024-001234'
  },
];

export function TicketsSection() {
  const handleDownloadPDF = (ticketId: string) => {
    console.log('Скачивание билета:', ticketId);
  };

  const handleDownloadInsurance = (ticketId: string, policyNumber?: string) => {
    console.log('Скачивание страхового полиса:', policyNumber, 'для билета:', ticketId);
  };

  const handleReturnTicket = (ticketId: string) => {
    if (confirm('Вы уверены, что хотите вернуть этот билет?')) {
      console.log('Возврат билета:', ticketId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-primary mb-6">Мои билеты</h2>

        {mockTickets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">У вас пока нет активных билетов</p>
            <a
              href="/"
              className="inline-block mt-4 bg-accent text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Купить билеты
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {mockTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="border-2 border-gray-200 rounded-lg p-5 hover:border-light transition-all"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-500">Билет {ticket.id}</span>
                      <span className="text-sm text-gray-400">• Заказ #{ticket.orderNumber}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-light flex-shrink-0 mt-1" />
                        <div>
                          <div className="font-bold text-primary text-lg">{ticket.from}</div>
                          <div className="text-sm text-gray-500 my-1">→</div>
                          <div className="font-bold text-primary text-lg">{ticket.to}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date(ticket.date).toLocaleDateString('ru-RU')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Отправление: {ticket.departureTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Прибытие: {ticket.arrivalTime}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{ticket.passengerName}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-500">Место</div>
                        <div className="text-xl font-bold text-primary">{ticket.seatNumber}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Стоимость</div>
                        <div className="text-xl font-bold text-accent">{ticket.price} ₽</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:w-48">
                    <button
                      onClick={() => handleDownloadPDF(ticket.id)}
                      className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg hover:opacity-90 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      Скачать PDF
                    </button>

                    {ticket.hasInsurance && (
                      <button
                        onClick={() => handleDownloadInsurance(ticket.id, ticket.insurancePolicyNumber)}
                        className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:opacity-90 transition-all"
                      >
                        <Shield className="w-4 h-4" />
                        Скачать полис
                      </button>
                    )}

                    {ticket.canReturn && (
                      <button
                        onClick={() => handleReturnTicket(ticket.id)}
                        className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:opacity-90 transition-all"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Вернуть билет
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Информация о возврате билетов</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Возврат билетов возможен не позднее, чем за 2 часа до отправления</li>
          <li>• Комиссия за возврат составляет 10% от стоимости билета</li>
          <li>• Деньги возвращаются на карту в течение 5-7 рабочих дней</li>
        </ul>
      </div>
    </div>
  );
}
