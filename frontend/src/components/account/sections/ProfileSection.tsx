import { useState } from 'react';
import { Edit2, Save, X, Mail, Phone, Lock } from 'lucide-react';

interface ProfileData {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
  birthDate: string;
}

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);

  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    email: 'ivan@example.com',
    phone: '+7 (900) 123-45-67',
    birthDate: '1990-01-01'
  });

  const [editedData, setEditedData] = useState<ProfileData>(profileData);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [newEmail, setNewEmail] = useState('');

  const handleSave = () => {
    setProfileData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(profileData);
    setIsEditing(false);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Смена пароля:', passwordData);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setIsChangingPassword(false);
  };

  const handleEmailChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Смена email:', newEmail);
    setNewEmail('');
    setIsChangingEmail(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Личная информация</h2>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
            >
              <Edit2 className="w-4 h-4" />
              Редактировать
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
              >
                <Save className="w-4 h-4" />
                Сохранить
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
              >
                <X className="w-4 h-4" />
                Отмена
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Фамилия
            </label>
            <input
              type="text"
              value={isEditing ? editedData.lastName : profileData.lastName}
              onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Имя
            </label>
            <input
              type="text"
              value={isEditing ? editedData.firstName : profileData.firstName}
              onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Отчество
            </label>
            <input
              type="text"
              value={isEditing ? editedData.middleName : profileData.middleName}
              onChange={(e) => setEditedData({ ...editedData, middleName: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Дата рождения
            </label>
            <input
              type="date"
              value={isEditing ? editedData.birthDate : profileData.birthDate}
              onChange={(e) => setEditedData({ ...editedData, birthDate: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Телефон
            </label>
            <input
              type="tel"
              value={isEditing ? editedData.phone : profileData.phone}
              onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
              disabled={!isEditing}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none disabled:bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={profileData.email}
                disabled
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
              <button
                onClick={() => setIsChangingEmail(true)}
                className="flex items-center justify-center gap-2 bg-light text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                <span>Изменить</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-primary mb-4">Безопасность</h3>

        {!isChangingPassword ? (
          <button
            onClick={() => setIsChangingPassword(true)}
            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
          >
            <Lock className="w-4 h-4" />
            Сменить пароль
          </button>
        ) : (
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Текущий пароль
              </label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Новый пароль
              </label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Подтвердите новый пароль
              </label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none"
                required
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
              >
                <Save className="w-4 h-4" />
                Сохранить
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsChangingPassword(false);
                  setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
                }}
                className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
              >
                <X className="w-4 h-4" />
                Отмена
              </button>
            </div>
          </form>
        )}
      </div>

      {isChangingEmail && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-primary mb-4">Изменить email</h3>
            <form onSubmit={handleEmailChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Новый email
                </label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-light focus:border-transparent outline-none"
                  placeholder="новый@email.com"
                  required
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsChangingEmail(false);
                    setNewEmail('');
                  }}
                  className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
