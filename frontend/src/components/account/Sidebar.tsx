import { User, History, Ticket, LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

const sidebarItems: SidebarItem[] = [
  { label: 'Профиль', path: '/account/profile', icon: User },
  { label: 'История заказов', path: '/account/orders', icon: History },
  { label: 'Мои билеты', path: '/account/tickets', icon: Ticket },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4">
      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-accent text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
