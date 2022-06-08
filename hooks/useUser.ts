import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import supabase from '../helpers/supabase';

function useUser() {
  const [user, setUser] = useState<User | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);
    if (user != null) {
      setIsSignedIn(true);
    }
    setIsLoading(false);
  });

  return { user, isLoading, isSignedIn };
}

export default useUser;
