import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';
import { HiCheck, HiLocationMarker } from 'react-icons/hi';
import supabase from '../helpers/supabase';
import { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

import * as Checkbox from '@radix-ui/react-checkbox'
import * as Label from '@radix-ui/react-label'

const links = ['Home', 'Jobs', 'Resources'];

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3">
      <div className="container mx-auto flex justify-between border-b">
        <a href="https://flowbite.com/" className="flex items-center py-2 pb-4">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a>

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
        <div className="flex h-12 items-center gap-8">
          <button className="text-sm font-semibold tracking-wide">
            Sign In
          </button>
          <button className="appearance-none rounded bg-blue-600 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-blue-700">
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};

function Filter() {
  return (
    <div className="mt-12 h-[520px] w-80 rounded-xl border px-4 py-2">
      <div>
        <h2 className="px-2 py-2 text-xl font-semibold uppercase tracking-wide">
          Filters
        </h2>
      </div>
      <div>
        <input type="text" className='border w-full rounded-lg h-11 px-4' placeholder='Company, role, tag...'/>
      </div>
      <div className='flex items-center mt-4 gap-3'>
        <Checkbox.Root className='appearance-none border bg-white w-5 h-5 rounded flex items-center justify-center shadow-sm'>
          <Checkbox.Indicator className='text-gray-500'><HiCheck /></Checkbox.Indicator>
        </Checkbox.Root>
       <Label.Root>Full Time</Label.Root>
      </div> <div className='flex items-center mt-4 gap-3'>
        <Checkbox.Root className='appearance-none border bg-white w-5 h-5 rounded flex items-center justify-center shadow-sm'>
          <Checkbox.Indicator className='text-gray-500'><HiCheck /></Checkbox.Indicator>
        </Checkbox.Root>
       <Label.Root>Part Time</Label.Root>
      </div>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | WorkNow</title>
      </Head>
      <div className="min-h-screen w-full">
        <Navbar />
        <div className="container mx-auto flex gap-8">
          <Content />
          <Filter />
        </div>
      </div>
    </>
  );
};

const Content = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetch() {
      const response = await supabase.from('jobs').select('*');
      setJobs(response.data);
    }

    fetch();
  });

  return (
    <div className="mx-auto mt-12 flex w-full flex-col divide-y rounded-xl">
      {jobs.map((job) => (
        <div className="flex w-full cursor-pointer items-center justify-between px-12  py-3 transition-colors hover:bg-zinc-50">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-medium tracking-wide text-gray-800">
              {job.title}
            </h4>
            <div className="flex gap-2 font-semibold text-gray-600">
              <span>{job.company}</span>
              <span>•</span>
              <span>{job.partTime ? 'Part' : 'Full'} Time</span>
            </div>
          </div>
          <div className="space-y-1">
            <p className="flex items-center justify-end gap-1 text-gray-600">
              <HiLocationMarker /> <span>{job.location}</span>
            </p>
            <p className="text-sm text-gray-500">
              Posted{' '}
              {formatDistance(new Date(job.createdAt), new Date(), {
                addSuffix: true
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
