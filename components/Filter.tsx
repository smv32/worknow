import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { HiCheck } from 'react-icons/hi';

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
      </div>
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

export default Filter;
