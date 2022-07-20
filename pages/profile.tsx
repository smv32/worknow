export default function Profile() {
	return (
		<div className="min-h-screen bg-gray-200 px-12 py-6">
			<div className="flex justify-between">
				<div className="md:col-span-1">
					<div className="px-4 sm:px-0">
						<h3 className="text-lg font-medium leading-6 text-gray-900">
							Profile
						</h3>
						<p className="mt-1 text-sm text-gray-600">
							This information will be displayed publicly so be careful what you
							share.
						</p>
					</div>
				</div>
				<div className="flex w-full max-w-screen-md flex-col gap-6 bg-gray-50 shadow-md rounded">
					<div className="flex flex-col gap-6 px-4 py-8">
						<div className="flex flex-col gap-1 pl-4">
							<label
								htmlFor=""
								className="ml-1 text-sm font-medium text-slate-500"
							>
								Full Name
							</label>
							<input
								type="text"
								className="h-10 w-full max-w-[32rem] rounded-md border bg-inherit px-4 text-gray-700 outline-none"
							/>
						</div>
						<div className="flex flex-col gap-1 pl-4">
							<label
								htmlFor=""
								className="ml-1 text-sm font-medium text-slate-500"
							>
								About
							</label>
							<textarea
								placeholder="This is a description"
								className="h-24 w-full rounded-md border bg-inherit px-4 py-2 text-gray-700 outline-none"
							/>
						</div>
						<div className="flex flex-col gap-1 pl-4">
							<label
								htmlFor=""
								className="ml-1 text-sm font-medium text-slate-500"
							>
								Country
							</label>
							<input
								type="text"
								className="h-10 w-full max-w-[32rem] rounded-md border bg-inherit px-4 text-gray-700 outline-none"
							/>
						</div>
					</div>
					<div className="flex justify-end bg-gray-100 p-4">
						<button
							type="submit"
							className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
