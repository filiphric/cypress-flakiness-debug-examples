export type SubscriptionStatus = 'active' | 'trial' | 'inactive';

export interface Subscription {
  id: string;
  fullName: string;
  email: string;
  status: SubscriptionStatus;
}
