export default function Toggle({ on, onClick } : { on: boolean, onClick: () => void }) {
  return (
    <div 
      className={`w-12 h-7 rounded-full p-1 after:block after:rounded-full after:w-5 after:h-5 after:bg-white shadow-sm ${on ? ' bg-green-300 after:ml-5' : ' bg-gray-300 after:ml-0'}`}
      onClick={onClick}
    ></div>
  );
}