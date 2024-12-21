import React from 'react';
import { HeadphonesIcon, Mail, Phone, Clock } from 'lucide-react';

export const SupportDetails: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <HeadphonesIcon className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold">Support</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Admin Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+91 98765 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>admin@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>10:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Emergency Support (24/7)</h3>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-yellow-600" />
            <span>+91 98765 67890</span>
          </div>
        </div>
      </div>
    </div>
  );
};