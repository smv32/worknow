import { NextPage } from 'next';
import Head from 'next/head';
import Input from '../components/Input';

import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import supabase from '../helpers/supabase';

function Divider() {
  return (
    <div className="flex items-center">
      <hr className="w-full border-b " />
      <span className="px-3 text-sm uppercase text-zinc-600">or</span>

      <hr className="w-full border-b" />
    </div>
  );
}

function OAuthButtons() {
  return (
    <IconContext.Provider value={{ size: '1.5rem' }}>
      <div className="grid  gap-4">
        <button
          className="flex h-11 w-full items-center rounded-md border border-gray-300 bg-white px-8 text-zinc-500"
          onClick={() => supabase.auth.signIn({ provider: 'apple' })}
        >
          <FcGoogle />
          <span className="grow">Sign in with Google</span>
        </button>
        <button className="flex h-11 w-full items-center rounded-md bg-black px-8 text-zinc-50">
          <FaApple />
          <span className="grow">Sign in with Apple</span>
        </button>
      </div>
    </IconContext.Provider>
  );
}

const SignInForm = () => {
  return (
    <div className="w-full max-w-[24rem] space-y-10 px-8 py-10">
      <OAuthButtons />
      <Divider />
      <form action="w-full">
        <div className="space-y-10">
          <Input label="Email" type="email" id="email" />
          <Input label="Password" type="password" />
        </div>
      </form>
    </div>
  );
};

const SignIn: NextPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 place-items-center md:grid-cols-2">
      <Head>
        <title>Sign In | WorkNow</title>
      </Head>
      <div className="hidden h-screen w-full bg-gradient-to-tl from-gray-700 via-gray-900 to-black md:block"></div>
      <SignInForm />
    </div>
  );
};
export default SignIn;
