import React, { useState, useEffect } from 'react';
import { Subscription } from '../interfaces/subscription';
import SubscriptionItem from './SubscriptionItem';
import Modal from './Modal';

const SubscriptionList: React.FC = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState<Subscription | null>(null);

  const timeout = Math.floor(Math.random() * 200)

  useEffect(() => {
    // Fetch subscriptions from API
    fetch('/api/subscriptions')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSubscriptions(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
      setTimeout(() => setModalOpen(true), timeout)
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleOpenModal = (subscription: Subscription) => {
    setSelectedSubscription(subscription);
    setModalOpen(true);
  }

  const activateSubscription = () => {
    if (selectedSubscription) {
      const updatedSubscriptions = subscriptions.map(sub => {
        if (sub.id === selectedSubscription.id) {
          return { ...sub, status: 'active' };
        }
        return sub;
      });
      
      // @ts-ignore
      setSubscriptions(updatedSubscriptions);
      setSelectedSubscription(prev => prev ? { ...prev, status: 'active' } : null);
    }
  };
  
  

  return (
    <div role="main">
      <div className='p-20 bg-slate-700 h-screen'>
        <h1 className='font-bold text-3xl py-7 text-white'>Customer subscriptions</h1>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-2">
        {subscriptions.map(subscription => (
            <SubscriptionItem 
              key={subscription.id} 
              subscription={subscription} 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          {/* <h2 className="text-xl font-bold">{selectedSubscription?.fullName}</h2>
          <p>{selectedSubscription?.email}</p>
          <p className="capitalize">{selectedSubscription?.status}</p>
          {(selectedSubscription?.status === 'trial' || selectedSubscription?.status === 'inactive') && (
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md" 
              onClick={activateSubscription}
            >
              Activate Subscription
            </button>
          )}
          {selectedSubscription?.status === 'active' && <p className='text-green-500'>Subscription was activated</p>} */}
          <h2 className="text-xl font-bold">Hello there!</h2>
          <div>We have a brand new user experience for you that will make you 10 times more productive!</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Try new experience
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default SubscriptionList;
