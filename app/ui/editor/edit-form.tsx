'use client'

import { useState, useEffect } from 'react';
import { FormSet } from '@/app/constants';
import EditParams from '@/app/ui/editor/edit-params';
import Form from '@/app/ui/form/form';
import Palette from '@/app/ui/editor/palette';
import { useFromStore } from '@/app/lib/store';

interface Props {
  data?: any;
}

export default function EditForm({
  data,
}: Props) {
  
  const [selected, setSelected] = useState<number|null>(null);
  const { title, desc, ui, setTitle, setDesc, setUi, reset } = useFromStore();

  useEffect(() => {
    if (data === undefined) return;
    setTitle(data.title);
    setDesc(data.desc);
    setUi(data.ui);

    return () => {
      reset();
    }
  }, [])

  /**
   * Genarate form name string;
   * @returns 
   */
  function genNameString(): string {
    const name = Math.random().toString(32).substring(2);
    const i = ui.findIndex((v) => v.name === name);
    if (i >= 0) return genNameString();
    return name;
  }

  /**
   * Add Item.
   * @param v 
   */
  function onClickItem(v: number) {
    const newUi = [...ui];
  
    newUi.push({
      label: 'Label',
      name: genNameString(),
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
    </>
  );
}