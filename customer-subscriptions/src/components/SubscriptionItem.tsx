import React from 'react';
import { Subscription } from '../interfaces/subscription';

interface SubscriptionItemProps {
  subscription: Subscription;
  onOpenModal: (subscription: Subscription) => void;
}

const SubscriptionItem: React.FC<SubscriptionItemProps> = ({ subscription, onOpenModal }) => {
  return (
    <div 
      className="flex items-center cursor-pointer hover:bg-slate-100 px-4 py-2 rounded-md"
      data-cy="customer-item" 
      onClick={() => onOpenModal(subscription)}
    >
      <div className={`w-4 h-4 rounded-full mr-4 ${subscription.status === 'active' ? 'bg-green-500' : 'bg-gray-300'}`}></div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{subscription.fullName}</h2>
        <p className="text-gray-500">{subscription.email}</p>
      </div>
      <p className="text-sm text-gray-700 capitalize">{subscription.status}</p>
    </div>
  );
}

export default SubscriptionItem;
