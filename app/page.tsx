'use client'

import Link from 'next/link'
import { FormSet } from '@/app/constants';
import { useEffect, useState } from 'react';
import EditParams from '@/app/ui/editor/edit-params';
import Form from '@/app/ui/form/form';
import Palette from '@/app/ui/editor/palette';

export default function Page() {
  
  const [ui, setUi] = useState<FormSet[]>([]);
  const [selected, setSelected] = useState<number|null>(null);
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  useEffect(()=> {
    (async () => {
      const res = await fetch('/api/form');
      const data = await res.json();
      setTitle(data.title);
      setDesc(data.desc);
      setUi(data.ui as unknown as FormSet[]);
    })()
    
  }, []);

  async function onSave() {
    console.log(ui);
    await fetch('/api/form', {
      method: 'put',
      body: JSON.stringify({
        title: title,
        desc: desc,
        ui: ui,
      }),
    });
  }

  function onClickItem(v: number) {
    const newUi = [...ui];
    newUi.push({
      label: 'Label Here',
      type: v,
      require: false,
      value: '',
      items: [1,5].includes(v) ? undefined : [{id: 1, label:'item1'}, { id: 2, label:'item2' }],
      placeholder: v === 1 ? '' : undefined,
    });
    setUi(newUi);
  }

  function onUpdate(data: FormSet) {
    const newUi = ui.map((v, i) => i === selected ? data : v);
    setUi(newUi);
  }

  function onDelete() {
    const newUi = ui.filter((_, i) => i !== selected);
    setUi(newUi);
    setSelected(null);
  }

  const params = ui.find((_, i) => i === selected);

  return (
    <>
      <header className="bg-gray-700 h-10 px-2 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">TinyWebForm Editor</h1>
        <div className='flex gap-3 items-center'>
          <button
            className='text-white bg-blue-500 hover:bg-blue-400 px-3 rounded-md cursor-pointer'
            onClick={onSave}
          >
            Save
          </button>
          <Link href="/form" target='_blank' className='p-2 text-white hover:opacity-80'>
            Preview
          </Link>
        </div>
      </header>
      <main className="flex items-stretch h-[calc(100vh-2.5rem)]">
        <div className="bg-white w-88 border-r border-gray-300 p-4">
          <Palette onClickItem={onClickItem} />
        </div>
        <div className="w-full py-8 px-3 flex justify-center overflow-y-auto">
          <Form isEdit ui={ui} selected={selected} setSelected={setSelected} title={title} desc={desc} />
        </div>
        <div className="bg-white w-[480px] border-l border-gray-300 p-4 overflow-y-auto">
          <p className="text-lg font-bold">Edit parameter</p>
          <EditParams
            params={params}
            title={title}
            desc={desc}
            setTitle={setTitle}
            setDesc={setDesc}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </div>
      </main>
    </>
    
  );
}
