
import Link from 'next/link'
import EditForm from '@/app/ui/editor/edit-form';
import SaveButton from '@/app/ui/editor/save-button';
import { getFormData } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }> }) {

  const params = await props.params;
  const id = params.id;
  const data = await getFormData(id);

  return (
    <>
      <header className="bg-gray-700 h-10 px-2 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold"><Link href="/">NextWebForm Editor</Link></h1>
        <div className='flex gap-3 items-center'>
          <SaveButton id={id} />
          <Link href={`/form/${id}`} target='_blank' className='p-2 text-white hover:opacity-80'>
            Preview
          </Link>
        </div>
      </header>
      <main className="flex items-stretch h-[calc(100vh-2.5rem)]">
        <EditForm data={data} />
      </main>
    </>
    
  );
}
