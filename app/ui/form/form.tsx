'use client';

import { FormSet } from '@/app/constants';
import Components from '@/app/ui/form/components';
import { submitForm } from '@/app/lib/action';

export default function Form({
  ui,
  isEdit = false,
  title,
  desc,
  selected,
  setSelected,
} : {
  isEdit?: boolean,
  ui: FormSet[],
  title: string,
  desc: string,
  selected?: number | null,
  setSelected?: (v: any) => void,
}) {
  
  function onSubmit(formData: FormData) {
    if (isEdit) return;
    if (!confirm('Are you sure?')) return;
    submitForm(formData);
  }

  return (
    <form className='bg-white w-full max-w-4xl select-none p-6 rounded-xl h-fit' action={onSubmit}>
      <div onClick={() => setSelected && setSelected(null)}>
        <h1 className='text-3xl font-bold mb-3'>
          {title}
        </h1>
        <p className='whitespace-pre-wrap'>
          {desc}
        </p>
      </div>
      <div className="flex flex-col mt-5">
        {ui.map((v, i) => (
          <div
            key={i}
            className={`p-3 ${i === selected ? 'bg-gray-200' : isEdit ? 'hover:bg-blue-50' : ''}`}
            onClick={() => setSelected && setSelected(i)}
          >
            <p className='block'>{v.label}{v.require && <span className='pl-2 text-red-700'>*</span>}</p>
            <Components form={v} />
          </div>
        ))}
      </div>
      <div className='mt-7 text-center'>
        {isEdit ? (
          <button className='bg-blue-500 hover:bg-blue-400 text-white cursor-pointer px-3 py-1.5 rounded-md' type="button">Submit</button>
        ): ( 
        <input
          type="submit"
          className='bg-blue-500 hover:bg-blue-400 text-white cursor-pointer px-3 py-1.5 rounded-md'
          value="Submit"
        />)}
      </div>
    </form>
  );
}