import type { NextPage } from 'next';
import Head from 'next/head'
import SubscriptionList from '../components/SubscriptionList';

const Home: NextPage = () => {
  return (
    <div>
    <Head><title>Customer subscriptions</title></Head>
    <SubscriptionList />
    </div>
  );
}

export default Home;
