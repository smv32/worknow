import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import initials from 'initials';
import Link from 'next/link';
import { useRouter } from 'next/router';
import supabase from '../helpers/supabase';
import useUser from '../hooks/useUser';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Find Opportunities', href: '/jobs', current: false },
  { name: 'Get Resources', href: '#', current: false }
];

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className=" mx-left px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="mr-4 flex flex-shrink-0 items-center">
                  <div className="text-3xl font-bold text-blue-300">work</div>
                  <div className="text-3xl font-bold text-blue-600">Now</div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <Link href='/login'>
                  <button className="ml-2 rounded bg-gray-800 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    Sign in
                  </button>
                </Link> */}
                <UserStatus />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

const UserProfile = ({ name }: { name: string }) => {
  return (
    <Avatar.Root className="inline-flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-black">
      <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-rose-100 to-teal-100 font-medium text-gray-900 ring-2 ring-gray-100 ring-offset-2">
        {initials(name)}
      </Avatar.Fallback>
    </Avatar.Root>
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
          <button className="text-sm font-semibold text-slate-50 tracking-wide">
            Sign In
          </button>
        </Link>
        <Link href={'/signup'}>
          <button className="appearance-none rounded-lg bg-zinc-50 px-4 py-2 text-sm font-semibold tracking-wide text-blue-600 transition-colors hover:bg-zinc-200">
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