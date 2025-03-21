import { FormSet } from '@/app/constants';

export default function EditParams({
  params,
  title,
  desc,
  setTitle,
  setDesc,
  onDelete,
  onUpdate,
}:{
  params: FormSet | undefined,
  title: string,
  desc: string,
  setTitle: (v: string) => void,
  setDesc: (v: string) => void,
  onDelete: () => void,
  onUpdate: (v: FormSet) => void,
}) {

  function onUpdateListLabel(data: string, index: number) {
    if (params?.items === undefined) return;
    const newItems = params.items.map((v, i) => i === index ? { ...v, label: data } : v);
    onUpdate({...params, items: newItems});
  }

  function onDeleteListItem(index: number) {
    if (params?.items === undefined) return;
    const newItems = params.items.filter((v, i) => i !== index);
    onUpdate({...params, items: newItems});
  }

  function onAddListItem() {
    if (params?.items === undefined) return;
    const newItems = [...params.items];
    const id = newItems.map((v) => v.id).sort()[newItems.length - 1] + 1;
    newItems.push({id: id, label: ''});
    onUpdate({...params, items: newItems});
  }

  return(
    <div className='mt-5 flex flex-col gap-5'>
      {params === undefined
      ? (
      <>
        <div>
          <label>Title</label>
          <input
            type="text"
            className="border border-gray-400 px-3 h-10 rounded-md w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Descliption</label>
          <textarea
            className="border border-gray-400 p-2 h-40 rounded-md w-full resize-none"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
      </> ):(
      <>
        <div>
          <label>Label</label>
          <input
            type="text"
            className="border border-gray-400 px-3 h-10 rounded-md w-full"
            value={params.label}
            onChange={(e) => onUpdate({...params, label: e.target.value})}
          />
        </div>
        <div>
          <label>Require</label>
          <div className='text-left p-2'>
            <input
              type="checkbox"
              className="border border-gray-400 rounded-md"
              checked={params.require}
              onChange={() => onUpdate({...params, require: !params.require})}
            />
          </div>
        </div>
        {params.placeholder !== undefined && (
          <div>
            <label>Placeholder</label>
            <input
              type="text"
              className="border border-gray-400 px-3 h-10 rounded-md w-full"
              value={params.placeholder}
              onChange={(e) => onUpdate({...params, placeholder: e.target.value})}
            />
          </div>
        )}
        {params.items !== undefined && (
          <div>
            <label>List items</label>
            <div className='flex flex-col gap-3'>
              {params.items.map((v, i) => (
                <div key={v.id} className='flex gap-3 items-center'>
                  <input
                    type="text"
                    className="border border-gray-400 px-3 h-10 rounded-md w-full"
                    value={v.label}
                    onChange={(e) => onUpdateListLabel(e.target.value, i)}
                  />
                  <button
                    className='w-9 h-8 bg-gray-200 cursor-pointer flex justify-center items-center rounded-full'
                    onClick={() => onDeleteListItem(i)}
                  >
                    x
                  </button>
                </div>
              ))}
              <button
                className='w-8 h-8 bg-gray-200 cursor-pointer flex justify-center items-center rounded-full'
                onClick={() => onAddListItem()}
              >
                +
              </button>
            </div>
          </div>
        )}
        <div>
          <button
            className='bg-red-700 hover:bg-red-600 text-white cursor-pointer px-3 py-1.5 rounded-md'
            onClick={() => onDelete()}
          >
            Delete 
          </button>
        </div>
      </>
      )}
    </div>
  );
}