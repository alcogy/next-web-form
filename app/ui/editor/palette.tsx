import { formParts } from "@/app/constants";

export default function Palette({
  onClickItem
}:{
  onClickItem:(id: number) => void
}) {
  return (
    <div className='flex flex-col gap-4'>
      {formParts.map((v) => (
        <button
          key={v.id}
          className='bg-gray-600 hover:bg-gray-500 text-gray-50 py-1 px-3 rounded-md select-none text-left cursor-pointer'
          onClick={() => onClickItem(v.id)}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}