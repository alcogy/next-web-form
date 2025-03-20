import Form from '@/app/ui/form/form';
import { sampleForms } from '@/app/constants';

export default async function Page() {
  
  return (
    <>
      <header className='bg-gray-700 h-10 px-2 flex items-centerg'>
        <h1 className="text-white text-lg font-bold">TinyWebForm</h1>
      </header>
      <main className='p-8 flex justify-center'>
        <Form ui={sampleForms} title='Form title' desc='From description' />
      </main>
    </>
  );
}