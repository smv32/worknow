import { NextPage } from 'next';
import Head from 'next/head';
import useUser from '../hooks/useUser';

import * as Label from '@radix-ui/react-label';

function Input() {
  return (
    <div className="space-y-2">
      <Label.Root
        className="mb-2 px-2 text-sm font-medium tracking-wide text-slate-600"
        htmlFor="form-email"
      >
        Email
      </Label.Root>
      <input
        type="text"
        className="block w-full rounded-lg border-zinc-300 bg-transparent"
        defaultValue={'anjali@gmail.com'}
        id="form-email"
        name="email"
      />
    </div>
  );
}

const Profile: NextPage = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      <Head>
        <title>Profile | WorkNow</title>
      </Head>
      <div className="min-h-screen bg-zinc-50">
        <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-6 py-10 px-6">
          <h2 className="text-2xl font-semibold tracking-wide text-slate-600">
            Your Profile
          </h2>
          <div className="grid grid-cols-1 gap-y-8 gap-x-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-medium text-slate-500">
                First Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border-zinc-300 bg-transparent"
              />
            </div>
            <Input />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
