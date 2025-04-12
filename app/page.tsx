import Link from 'next/link'
import { fetchAllForms } from '@/app/lib/data';
import FormListActionButton from './ui/components/form-list-action-button';

export default async function Page() {
  
  const data = await fetchAllForms();
  
  return (
    <>
      <header className="bg-gray-700 h-10 px-2 flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">TinyWebForm Editor</h1>
      </header>
      <main className="flex justify-center items-start h-[calc(100vh-2.5rem)] p-4">
        <div className='w-full max-w-[1280px]'>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold text-3xl text-gray-600'>FormList</h2>
            <Link href='/edit' className='bg-sky-600 hover:bg-sky-500 text-white rounded-md px-3 py-1'>Create</Link>
          </div>
          
          {data.length > 0 ? (
            <>
              <table className='border-collapse w-full shadow-sm mt-5 bg-gray-100 rounded-lg'>
                <thead>
                  <tr>
                    <th className='border-b-1 border-gray-300 px-4 py-3 text-left text-gray-500'>ID</th>
                    <th className='border-b-1 border-gray-300 px-4 py-3 text-left text-gray-500'>Title</th>
                    <th className='border-b-1 border-gray-300 px-4 py-3 text-left text-gray-500'>Description</th>
                    <th className='border-b-1 border-gray-300 px-4 py-3 text-left text-gray-500'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((v) => (
                    <tr key={v.id}>
                      <td className='border-b-1 border-gray-300 px-4 py-2 text-left text-nowrap w-64'>{v.id}</td>
                      <td className='border-b-1 border-gray-300 px-4 py-2 text-left'>{v.title}</td>
                      <td className='border-b-1 border-gray-300 px-4 py-2 text-left'>{v.desc}</td>
                      <td className='border-b-1 border-gray-300 px-4 py-2 text-left w-32 relative'>
                        <div className='flex gap-1 items-center'>
                        <Link
                            href={`/form/${v.id}`}
                            className='bg-gray-300 text-sm font-bold text-gray-700 px-3 h-7 rounded-md flex items-center'
                            target='_blank'
                          >
                            Preview
                          </Link>
                          <FormListActionButton id={v.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className='text-center py-24'> No form data.</p>
          )}
        </div>
      </main>
    </>
    
  );
}
