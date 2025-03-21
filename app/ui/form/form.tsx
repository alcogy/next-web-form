'use client'

import { FormSet } from '@/app/constants';

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

  async function onSubmit() {
    if (isEdit) return;
    if (!confirm('Are you sure?')) return;
    
    // TODO your function.
    alert("did it!");
  }

  

  function getFormComponent(form: FormSet): React.ReactNode {
      switch(form.type) {
        case 1:
          return (
            <input
              type="text"
              name={form.name}
              className="border border-gray-400 px-3 h-10 rounded-md w-full"
              placeholder={form.placeholder}
              required={form.require}
            />
          );
        case 2:
          return (
            <select  name={form.name} required={form.require} className="border border-gray-400 px-2 h-10 rounded-md w-full">
              {form.items?.map((v) => (
                <option key={v.id} value={v.id}>{v.label}</option>
              ))}
            </select>
          );
        case 3:
          return (
            <div className='flex gap-4'>
              {form.items?.map((v) => (
                <label key={v.id}>
                  <input type="checkbox" required={form.require} name={form.name} value={v.id} className="mr-1" />{v.label}
                </label>
              ))}
            </div>
          );
        case 4:
          return (
            <div className='flex gap-4'>
              {form.items?.map((v) => (
                <label key={v.id}><input type="radio" required={form.require} name={form.name} value={v.id} className="mr-1" />{v.label}</label>
              ))}
            </div>
          );
        case 5:
          return (
            <input
              type="number"
              name={form.name}
              className="border border-gray-400 px-3 h-10 rounded-md w-full"
              required={form.require}
            />
          );
      }
      
      return <></>
    } 

  return (
    <form className='bg-white w-full max-w-4xl select-none p-6 rounded-xl h-fit'>
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
            {getFormComponent(v)}
          </div>
        ))}
      </div>
      <div className='mt-7 text-center'>
        <button
          className='bg-blue-500 hover:bg-blue-400 text-white cursor-pointer px-3 py-1.5 rounded-md'
          onClick={() => onSubmit()}
        >
            Submit
        </button>
      </div>
    </form>
  );
}