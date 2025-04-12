'use client'

import { useState } from "react";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { MdDelete, MdEditNote, MdOpenInNew } from "react-icons/md";

export default function FormListActionButton({ id } : { id: string}) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  
  const onClickRemove = async () => {
    if (!window.confirm('Are you sure?')) return;
    await fetch('/api/form', {
      method: 'delete',
      body: JSON.stringify({ id: id }),
    });
    setOpen(false);
    router.refresh();
  }

  return (
    <>
      <button
        className='w-7 h-7 bg-gray-300 rounded-md cursor-pointer flex justify-center items-center relative'
        onClick={() => setOpen(true)}
      >
        <span className='w-2 h-2 border-b-2 border-r-2 border-gray-600 block rotate-45'></span>
      </button>
      {open && (
        <>
          <div className='w-56 z-10 absolute bg-white p-3 top-0 right-0 shadow-md'>
            <ul>
              <li><Link href={`/form/${id}`} target="_blank" className='py-2 flex items-center gap-4 text-gray-800 hover:text-gray-500'><MdOpenInNew /><span>Preview</span></Link></li>
              <li>
                <Link href={`/edit/${id}`} className='py-2 flex items-center gap-4 text-gray-800 hover:text-gray-500'>
                  <MdEditNote />
                  <span>Edit</span>
                </Link>
              </li>
              <li>
                <button className='py-2 flex items-center gap-4 cursor-pointer text-red-600 hover:text-red-400 w-full' onClick={onClickRemove}>
                  <MdDelete />
                  <span>Remove</span>
                </button>
              </li>
            </ul>
            
          </div>
          <div className="fixed w-full h-full left-0 top-0" onClick={() => setOpen(false)}></div>
        </>
      )}
    </>
  );
}