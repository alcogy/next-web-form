

import EditForm from '@/app/ui/editor/edit-form';
import SaveButton from '@/app/ui/editor/save-button';
import Link from 'next/link';

export default async function Page() {

  return (
    <>
      <header className="bg-gray-700 h-10 px-2 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold"><Link href="/">TinyWebForm Editor</Link></h1>
        <div className='flex gap-3 items-center'>
          <SaveButton />
        </div>
      </header>
      <main className="flex items-stretch h-[calc(100vh-2.5rem)]">
        <EditForm />
      </main>
    </>
    
  );
}
