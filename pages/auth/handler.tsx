import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import supabase from '../../helpers/supabase';

const Handler: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    async function hello() {
      const { data, error } = await supabase.auth.getSessionFromUrl({
        storeSession: true
      });

      if (!error) {
        router.push('/jobs', undefined, {});
      } else{
          console.log(error)
      }
    }

    hello();
  });
  return <div></div>;
};

export default Handler;
