import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import initials from 'initials';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useUser from '../hooks/useUser';
import supabase from '../helpers/supabase';

const links = ['Home', 'Jobs', 'Resources'];
const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3">
      <div className="container mx-auto flex justify-between border-b py-4">
        <div>
          <ul className="flex h-12 items-center gap-2">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href="/">
                  <a
                    className={clsx(
                      'rounded-lg px-3 py-2 text-slate-600',
                      idx == 1 && 'bg-zinc-100 text-slate-800',
                      'transition-colors hover:text-slate-900'
                    )}
                  >
                    {link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <UserStatus />
      </div>
    </nav>
  );
};

function UserStatus() {
  const { isLoading, user } = useUser();
  const router = useRouter();

  if (isLoading) {
    return null;
  }
  if (!user) {
    return (
      <div className="flex h-12 items-center gap-8">
        <Link href={'/login'}>
          <button className="text-sm font-semibold tracking-wide">
            Sign In
          </button>
        </Link>
        <Link href={'/signup'}>
          <button className="appearance-none rounded bg-blue-600 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-blue-700">
            Create Account
          </button>
        </Link>
      </div>
    );
  }

  const name = user.user_metadata.full_name;

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <UserProfile name={name || 'Z'} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          className="z-50 w-40 rounded-xl border bg-white shadow-lg"
          align="end"
          sideOffset={12}
        >
          <DropdownMenu.Item>
            <button
              className="w-full px-4 py-2 text-left text-slate-500 hover:bg-gray-100"
              onClick={() => {
                supabase.auth.signOut();
                router.push('/');
              }}
            >
              Sign Out
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

const UserProfile = ({ name }: { name: string }) => {
  return (
    <Avatar.Root className="inline-flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-black">
      <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-gray-700 py-1 via-gray-900 to-black font-medium text-white ring-2 ring-gray-900 ring-offset-2">
        {initials(name)}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default Navbar;
