'use client'

import { formParts, sampleForms, FormSet } from '@/app/constants';
import { useState } from 'react';
import Form from '@/app/ui/form/form';

export default function Page() {
 
  const [ui, setUi] = useState<FormSet[]>(sampleForms);
  const [selected, setSelected] = useState<number|null>(null);
  const [title, setTitle] = useState<string>('Form title here');
  const [desc, setDesc] = useState<string>('From description here...');

  function onClickItem(v: number) {
    const newUi = [...ui];
    newUi.push({ label: 'Label Here', type: v, require: false, value: '', items: [{id: 1, label:'item1'}, {id: 2, label:'item2'}], placeholder: undefined});
    setUi(newUi);
  }

  function onDelete() {
    const newUi = ui.filter((v, i) => i !== selected);
    setUi(newUi);
    setSelected(null);
  }

  const params = ui.find((v, i) => i === selected);

  return (
    <>
      <header className="bg-gray-700 h-10 px-2 flex items-center">
        <h1 className="text-white text-lg font-bold">TinyWebForm Editor</h1>
      </header>
      <main className="flex items-stretch h-[calc(100vh-2.5rem)]">
        <div className="bg-white w-88 border-r border-gray-300 p-4">
          <div className='flex flex-col gap-4'>
            {formParts.map((v) => (
              <button
                key={v.id}
                className='bg-gray-600 hover:bg-gray-500 text-gray-50 py-1 px-3 rounded-md select-none text-left cursor-pointer'
                onClick={() => onClickItem(v.id)}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full py-8 px-3 flex justify-center overflow-y-auto">
          <Form isEdit ui={ui} selected={selected} setSelected={setSelected} title={title} desc={desc} />
        </div>
        <div className="bg-white w-[480px] border-l border-gray-300 p-4 overflow-y-auto">
          <p className="text-lg font-bold">Edit parameter</p>
          <div className='mt-5 flex flex-col gap-5'>
            {params === undefined
            ? (
            <>
              <div>
                <label>Title</label>
                <input
                  type="text"
                  className="border border-gray-400 px-3 h-10 rounded-md w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label>Descliption</label>
                <textarea
                  className="border border-gray-400 p-2 h-40 rounded-md w-full resize-none"
                  onChange={(e) => setDesc(e.target.value)}
                  value={desc}
                />
              </div>
            </> ):(
            <>
              <div>
                <label>Label</label>
                <input
                  type="text"
                  className="border border-gray-400 px-3 h-10 rounded-md w-full"
                  value={params.label}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div>
                <label>Require</label>
                <input
                  type="checkbox"
                  className="border border-gray-400 rounded-md w-full"
                  checked={params.require}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              {params.placeholder !== undefined && (
                <div>
                  <label>Placeholder</label>
                  <input
                    type="text"
                    className="border border-gray-400 px-3 h-10 rounded-md w-full"
                    value={params.placeholder}
                    onChange={(e) => console.log(e.target.value)}
                  />
                </div>
              )}
              {params.items !== undefined && (
                <div>
                  <label>List items</label>
                  <div className='flex flex-col gap-3'>
                    {params.items.map((v) => (
                      <div key={v.id} className='flex gap-3 items-center'>
                        <input
                          type="text"
                          className="border border-gray-400 px-3 h-10 rounded-md w-full"
                          value={v.label}
                          onChange={(e) => console.log(e.target.value)}
                        />
                        <button className='w-9 h-8 bg-gray-200 cursor-pointer flex justify-center items-center rounded-full'>x</button>
                      </div>
                    ))}
                    <button className='w-8 h-8 bg-gray-200 cursor-pointer flex justify-center items-center rounded-full'>+</button>
                  </div>
                </div>
              )}
              <div>
                <button
                  className='bg-red-700 hover:bg-red-600 text-white cursor-pointer px-3 py-1.5 rounded-md'
                  onClick={() => onDelete()}
                >
                  Delete
                </button>
              </div>
            </>
            )}
          </div>
          
        </div>
      </main>
    </>
    
  );
}
