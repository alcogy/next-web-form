'use client';

import { FormSet } from '@/app/constants';
import Components from '@/app/ui/form/components';
import { submitForm } from '@/app/lib/action';
import { FormEvent, useEffect, useState } from 'react';

export default function Form({
  id = '',
  ui,
  isEdit = false,
  title,
  desc,
  selected,
  setSelected,
	onSort,
} : {
  id?: string;
  isEdit?: boolean,
  ui: FormSet[],
  title: string,
  desc: string,
  selected?: number | null,
  setSelected?: (v: any) => void,
	onSort?: (from: number, to: number) => void,
}) {

  const [isMouseDownIndex, setIsMouseDownIndex] = useState<number>(-1);
	const [sortTarget, setSortTarget] = useState<number>(-1);
	
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isEdit || id === '') return false;
    if (!confirm('Are you sure?')) return false;

    const formData: FormData = new FormData(e.currentTarget);
    submitForm(formData);
  }

	function onMouseEnter(i: number) {
		if (isMouseDownIndex < 0) return;

		if (i === isMouseDownIndex) {
			setSortTarget(-1);
		} else {
			setSortTarget(i);
		}
	}

	function onMouseUp() {
		if (isMouseDownIndex >= 0 && sortTarget >= 0 && onSort) {
			onSort(isMouseDownIndex, sortTarget);
		}
		setSortTarget(-1);
		setIsMouseDownIndex(-1);
	}

	useEffect(() => {
		window.addEventListener('mouseup', onMouseUp);

		return () => {
			window.removeEventListener('mouseup', onMouseUp);
		}
	}, [isMouseDownIndex, sortTarget])

  return (
    <form
      className='bg-white w-full max-w-4xl select-none p-6 rounded-xl h-fit'
      onSubmit={onSubmit}
      action=""
      method="post"
    >
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
            className={`p-3 ${i === selected ? 'bg-gray-200' : isEdit ? 'hover:bg-blue-50' : ''} ${sortTarget === i && isEdit ? 'border-t-4 border-blue-400' : ''} ${isMouseDownIndex >= 0 && isEdit ? 'cursor-grabbing!' : ''}`}
            onClick={() => setSelected && setSelected(i)}
						onMouseDown={() => setIsMouseDownIndex(i)}
						onMouseEnter={() => onMouseEnter(i)}
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
      {id && <input type="hidden" name="id" value={id} />}
    </form>
  );
}