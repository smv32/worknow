import delay from 'delay';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import supabase from '../helpers/supabase';
import useUser from '../hooks/useUser';

const Home: NextPage = () => {
  const { user, isLoading, isSignedIn } = useUser();
  const router = useRouter();

  console.log(isSignedIn, isLoading);
  if (isLoading) {
    return <div>loading</div>;
  }

  if (!isSignedIn) {
    // router.push('/login')
  }
  delay(1000).then(() =>
    console.log(isSignedIn, supabase.auth.session(), supabase.auth.user())
  );
  return (
    <div className="grid min-h-screen place-items-center bg-zinc-50 text-2xl">
      {user ? `Hello, ${user.user_metadata.full_name}` : 'Hello World!'}
    </div>
  );
};

export default Home;
