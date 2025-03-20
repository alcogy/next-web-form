import { formParts, sampleForms, FormSet } from '@/app/constants';

export default function Page() {

  function getRanaString() {
    return Math.random().toString(32).substring(2);
  }

  function getFormComponent(form: FormSet): React.ReactNode {
    switch(form.type) {
      case 1:
        return (
          <input
            type="text"
            className="border border-gray-400 px-3 h-10 rounded-md w-full"
            placeholder={form.placeholder}
          />
        );
      case 2:
        return (
          <select className="border border-gray-400 px-2 h-10 rounded-md w-full">
            {form.items?.map((v) => (
              <option value={v.id}>{v.label}</option>
            ))}
          </select>
        );
      case 3:
        return (
          <div className='flex gap-4'>
            {form.items?.map((v) => (
              <label><input type="checkbox" value={v.id} className="mr-1" />{v.label}</label>
            ))}
          </div>
        );
      case 4:
        const name = getRanaString();
        return (
          <div className='flex gap-4'>
            {form.items?.map((v) => (
              <label><input type="radio" name={name} value={v.id} className="mr-1" />{v.label}</label>
            ))}
          </div>
        );
      case 5:
        return (
          <input
            type="number"
            className="border border-gray-400 px-3 h-10 rounded-md w-full"
          />
        );
    }
    
    return <></>
  } 

  return (
    <>
      <header className="bg-gray-700 h-10 px-2 flex items-center">
        <h1 className="text-white text-lg font-bold">TinyWebForm</h1>
      </header>
      <main className="flex items-stretch h-[calc(100vh-2.5rem)]">
        <div className="w-88 border-r border-gray-300 p-4">
          <div className='flex flex-col gap-4'>
            {formParts.map((v) => (
              <button key={v.id} className='bg-gray-600 hover:bg-gray-500 text-gray-50 py-1 px-3 rounded-md select-none text-left cursor-pointer'>{v.label}</button>
            ))}
          </div>
        </div>
        <div className="w-full bg-gray-200 py-8 px-3 flex justify-center">
          <div className='bg-white w-full max-w-4xl select-none p-6 rounded-xl'>
            <div>
              <h1 className='text-3xl font-bold mb-3'>This is form title</h1>
              <p>Descriotion text Descriotion text Descriotion textDescriotion text Descriotion text Descriotion textDescriotion text Descriotion text Descriotion text</p>
            </div>
            <div className="flex flex-col gap-6 mt-5 p-2">
              {sampleForms.map((v, i) => (
                <div key={i}>
                  <p className='block'>{v.label}{v.require && <span className='pl-2 text-red-700'>*</span>}</p>
                  {getFormComponent(v)}
                </div>
              ))}
              
            </div>
            <div className='mt-7 text-center'>
              <button className='bg-blue-500 hover:bg-blue-400 text-white cursor-pointer px-3 py-1.5 rounded-md'>Submit</button>
            </div>
          </div>
        </div>
        <div className="w-[480px] border-l border-gray-300 p-4">
          <p className="text-lg font-bold">Edit parameter</p>
          <div className='mt-5 flex flex-col gap-5'>
              <div>
                <label>Label</label>
                <input type="text" className="border border-gray-400 px-3 h-10 rounded-md w-full" />
              </div>
              <div>
                <label>Placeholder</label>
                <input type="text" className="border border-gray-400 px-3 h-10 rounded-md w-full" />
              </div>
          </div>
          
        </div>
      </main>
    </>
    
  );
}
