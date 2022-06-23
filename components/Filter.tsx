import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { Atom, atom, useAtom } from 'jotai';
import { HiCheck } from 'react-icons/hi';

export const partTimeFilter = atom(true);
export const fullTimeFilter = atom(true);

const Filter = () => {
  return (
    <div className="mt-12 w-80 space-y-4 rounded-lg  border p-6">
      <div>
        <h3 className="text-xl font-semibold uppercase tracking-wide">
          Filters
        </h3>
      </div>
      <div className="space-y-5">
        <div>
          <input
            type="text"
            className="h-10 w-full rounded-md border px-4"
            placeholder="Company, role, tags..."
          />
        </div>
        <Checkbox atom={partTimeFilter} label="Part Time" />
        <Checkbox atom={fullTimeFilter} label="Full Time" />
      </div>
    </div>
  );
};

interface CheckboxProps {
  atom: any;
  label: string;
}

const Checkbox = ({ atom, label }: CheckboxProps) => {
  const [partTime, updatePartTime] = useAtom(atom);
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        className="flex h-5 w-5 items-center justify-center rounded border"
        id="filter-partTime"
        defaultChecked={partTime === true}
        onCheckedChange={(checked) => updatePartTime(Boolean(checked))}
      >
        <CheckboxPrimitive.Indicator>
          <HiCheck />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <Label.Root
        htmlFor="filter-partTime"
        className="cursor-pointer text-slate-700"
      >
        {label}
      </Label.Root>
    </div>
  );
};
export default Filter;
