import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import supabase from '../helpers/supabase';

function useUser() {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);
    setIsLoading(false);
  });

  return { user, isLoading };
}

export default useUser;
