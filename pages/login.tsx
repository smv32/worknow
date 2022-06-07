import { NextPage } from 'next';
import Head from 'next/head';
import Input from '../components/Input';

import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaLock } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import supabase from '../helpers/supabase';
import { useForm } from 'react-hook-form';
import Spinner from '../components/Spinner';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const signInSchema = yup.object({
  email: yup
    .string()
    .required('Please enter your email address')
    .email('Please provide a valid email address'),
  password: yup.string().required('Please enter your password')
});

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
      <div className="grid  gap-6">
        <button
          className="flex h-11 w-full items-center rounded-md border border-gray-300 bg-white px-8 font-medium text-slate-600 outline-none ring-gray-200 ring-offset-1 transition-colors hover:bg-zinc-50  focus:bg-zinc-50 focus:ring-1"
          onClick={() => supabase.auth.signIn({ provider: 'google' })}
        >
          <FcGoogle />
          <span className="grow">Sign in with Google</span>
        </button>
        <button
          className="flex h-11 w-full items-center rounded-md border border-black bg-black px-8 font-medium text-zinc-50 outline-none ring-gray-800 ring-offset-1 transition-colors hover:bg-gray-900 focus:bg-gray-900 focus:ring-1"
          onClick={() => supabase.auth.signIn({ provider: 'apple' })}
        >
          <FaApple />
          <span className="grow">Sign in with Apple</span>
        </button>
      </div>
    </IconContext.Provider>
  );
}

type FormValues = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const {
    formState: { errors, isSubmitting },
    clearErrors,
    handleSubmit,
    setError,
    register
  } = useForm<FormValues>({
    resolver: yupResolver(signInSchema),
    mode: 'onSubmit',
    reValidateMode: 'onBlur'
  });

  async function onSubmit(data: FormValues) {
    const { email, password } = data;
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password
    });

    if (error) {
      setError('email', { message: error.message });
      throw error;
    }
  }
  const errorField = errors.email
    ? 'email'
    : errors.password
    ? 'password'
    : null;

  const errorMessage = !errorField ? '' : errors[errorField]?.message || '';
  return (
    <div className="w-full max-w-[24rem] space-y-8 px-8 py-10">
      <OAuthButtons />
      <Divider />
      <form
        noValidate
        className="w-full space-y-4"
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => {
          clearErrors();
        }}
      >
        <div
          className="mb-6 rounded-lg px-4 py-2 text-center text-sm text-rose-600"
          role="alert"
        >
          {errorMessage}
        </div>
        <div className="space-y-10">
          <Input label="Email" type="email" id="email" {...register('email')} />
          <Input label="Password" type="password" {...register('password')} />

          <button
            className="flex h-11 w-full items-center rounded-md bg-blue-600 px-8 font-medium tracking-wide text-white disabled:cursor-pointer disabled:bg-blue-400"
            disabled={isSubmitting}
          >
            <IconContext.Provider value={{ className: 'text-blue-300' }}>
              <FaLock />
            </IconContext.Provider>
            <span className="flex grow justify-center text-center">
              {isSubmitting ? <Spinner /> : 'Sign In'}{' '}
            </span>
          </button>
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
