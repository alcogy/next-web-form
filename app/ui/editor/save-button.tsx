'use client'

import { useFromStore } from '@/app/lib/store';
import { useRouter } from 'next/navigation'

export default function SaveButton({ id }: {id?: string}) {
  const router = useRouter();
  const { title, desc, ui } = useFromStore();
  /**
   * Save to Database.
   */
  const onSave = async () => {
    if (id === undefined) {
      await fetch('/api/form', {
        method: 'post',
        body: JSON.stringify({
          title: title,
          desc: desc,
          ui: ui,
        }),
      });
    } else {
      await fetch('/api/form', {
        method: 'put',
        body: JSON.stringify({
          id: id,
          title: title,
          desc: desc,
          ui: ui,
        }),
      });
    }
    router.push('/');
  }

  return (
    <button
      className='text-white bg-blue-500 hover:bg-blue-400 px-3 rounded-md cursor-pointer'
      onClick={onSave}
    >
     Save
     </button>
  );
}