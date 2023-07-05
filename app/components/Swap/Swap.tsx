export default function Swap() {
  return (
    <div className="flex flex-col border-[2px] mb-2 border-white saturate-[2] dark:saturate-[1] px-4 py-3 rounded-xl">
      <div className="flex items-center gap-3">
        <svg
          stroke-width="1"
          width="24"
          height="30"
          className="text-blue"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
          ></path>
          <polyline
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            points="208 48 232 72 208 96"
          ></polyline>
          <polyline
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            points="208 160 232 184 208 208"
          ></polyline>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
            d="M152.76794 93.858A64.00219 64.00219 0 0 1 200.93555 72H232M32 184H55.06445a64.00212 64.00212 0 0 0 48.16769-21.85814"
          ></path>
        </svg>
        <div className="flex flex-col">
          <h1 className=" gap-1.5 font-semibold text-gray-900">
            <span className="flex gap-1.5 items-center bg-gradient-to-r from-blue to-pink text-[#050505] bg-clip-text">
              Swap Onigiri
            </span>
            <div className="flex justify-center" data-headlessui-state=""></div>
          </h1>
          <span className="text-sm font-medium text-white">
            Swap Onigiri NEKO to Onigiri KITTY
          </span>
        </div>
      </div>
      <div className="pt-10">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <div className="grid grid-cols-2 gap-[60px] border-gray-200 dark:border-slate-800">
            <div className="z-10">
              <div data-headlessui-state=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
