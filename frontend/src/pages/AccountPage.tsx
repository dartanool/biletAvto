import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar } from '../components/account/Sidebar';
import { ProfileSection } from '../components/account/sections/ProfileSection';
import { OrdersSection } from '../components/account/sections/OrdersSection';
import { TicketsSection } from '../components/account/sections/TicketsSection';

export function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Личный кабинет</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/account/profile" replace />} />
              <Route path="/profile" element={<ProfileSection />} />
              <Route path="/orders" element={<OrdersSection />} />
              <Route path="/tickets" element={<TicketsSection />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
