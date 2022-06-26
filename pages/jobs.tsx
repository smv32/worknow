import type { NextPage } from 'next';
import Head from 'next/head';

import { HiCheck, HiLocationMarker } from 'react-icons/hi';
import supabase from '../helpers/supabase';
import { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import NavigationMenu from '../components/NavigationMenu';

function Filter() {
  return (
    <div className="mt-12 h-[520px] w-80 rounded-xl border px-4 py-2">
      <div>
        <h2 className="px-2 py-2 text-xl font-semibold uppercase tracking-wide">
          Filters
        </h2>
      </div>
      <div>
        <input
          type="text"
          className="h-11 w-full rounded-lg border px-4"
          placeholder="Company, role, tag..."
        />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <Checkbox.Root className="flex h-5 w-5 appearance-none items-center justify-center rounded border bg-white shadow-sm">
          <Checkbox.Indicator className="text-gray-500">
            <HiCheck />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <Label.Root>Full Time</Label.Root>
      </div>{' '}
      <div className="mt-4 flex items-center gap-3">
        <Checkbox.Root className="flex h-5 w-5 appearance-none items-center justify-center rounded border bg-white shadow-sm">
          <Checkbox.Indicator className="text-gray-500">
            <HiCheck />
          </Checkbox.Indicator>
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
        <NavigationMenu />
        <div className="container mx-auto flex gap-8">
          <Content />
          <Filter />
        </div>
      </div>
    </>
  );
};

const Content = () => {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    async function fetch() {
      const response = await supabase.from('jobs').select('*');
      // @ts-ignore
      setJobs(response.data);
    }

    fetch();
  });

  return (
    <div className="mx-auto mt-12 flex w-full flex-col divide-y rounded-xl">
      {jobs.map((job, idx) => (
        <div
          key={idx}
          className="flex w-full cursor-pointer items-center justify-between px-12  py-3 transition-colors hover:bg-zinc-50"
        >
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
