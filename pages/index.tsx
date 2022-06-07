import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useUser from '../hooks/useUser';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if(!isLoading && !user) {
      router.push('/login')
    }

  })

  
  if(!user) {
    // TODO: Add a loading state
    return <div></div>
  }


  return (
    <div className="grid min-h-screen place-items-center bg-zinc-50 text-2xl">
      {user ? `Hello, ${user.user_metadata.full_name}` : 'Hello World!'}
    </div>
  );
};

export default Home;
