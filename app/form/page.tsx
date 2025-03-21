import Form from '@/app/ui/form/form';
import { FormSet } from '@/app/constants';
import { getFormData } from '@/app/lib/data';

export default async function Page() {
  
  const data = await getFormData();

  return (
    <>
      <header className='bg-gray-700 h-10 px-2 flex items-centerg'>
        <h1 className="text-white text-lg font-bold">TinyWebForm</h1>
      </header>
      <main className='p-8 flex justify-center'>
        <Form ui={data.ui as unknown as FormSet[]} title={data.title} desc={data.desc} />
      </main>
    </>
  );
}