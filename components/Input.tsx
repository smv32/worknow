import React from 'react';

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <div>
      <input
        ref={ref}
        className="h-12 w-full border bg-transparent px-4 text-slate-700 outline-none border-zinc-200 rounded focus:ring-0 focus:border-zinc-400 placeholder:text-slate-500"
        placeholder={label}
        {...props}
      />
      {/* {}
      <span className='text-sm font-medium text-rose-600 px-2 mt-2'>Error Message</span> */}
    </div>
  )
);

Input.displayName = 'Input';
export default Input;