import { atom, useAtom } from 'jotai';
import useSWR from 'swr';
import supabase from '../helpers/supabase';

export interface Job {
	title: string;
	id: string;
	company: string;
	createdAt: string;
	partTime: boolean;
}

export const fullTimeFilter = atom(false);
export const jobSearch = atom<string | null>('');

function useJobs() {
	const fetcher = async () => {
		let responseBuilder = supabase.from('jobs').select();
		const response = await responseBuilder;
		let data = response.data as Job[];

		return data;
	};
	const { data } = useSWR('/api/jobs', fetcher);

	return { data };
}

export default useJobs;
