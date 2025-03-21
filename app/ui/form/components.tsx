import { FormSet } from '@/app/constants';
export default function Components({ form }:{form: FormSet}) {
  switch(form.type) {
    case 1:
      return (
        <input
          type="text"
          name={form.name}
          className="border border-gray-400 px-3 h-10 rounded-md w-full"
          placeholder={form.placeholder}
          required={form.require}
        />
      );
    case 2:
      return (
        <select  name={form.name} required={form.require} className="border border-gray-400 px-2 h-10 rounded-md w-full">
          {form.items?.map((v) => (
            <option key={v.id} value={v.id}>{v.label}</option>
          ))}
        </select>
      );
    case 3:
      return (
        <div className='flex gap-4'>
          {form.items?.map((v) => (
            <label key={v.id}>
              <input type="checkbox" required={form.require} name={form.name} value={v.id} className="mr-1" />{v.label}
            </label>
          ))}
        </div>
      );
    case 4:
      return (
        <div className='flex gap-4'>
          {form.items?.map((v) => (
            <label key={v.id}><input type="radio" required={form.require} name={form.name} value={v.id} className="mr-1" />{v.label}</label>
          ))}
        </div>
      );
    case 5:
      return (
        <input
          type="number"
          name={form.name}
          className="border border-gray-400 px-3 h-10 rounded-md w-full"
          required={form.require}
        />
      );
  }
  
  return <></>
}