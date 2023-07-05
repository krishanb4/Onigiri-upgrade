export default function Header() {
  return (
    <header className="lg:border-transparent text-black  bg-white/75 border-gray-300/70 border-b sticky flex items-center top-0 z-[1] transition-all h-[56px]">
      <div className="mx-auto flex items-center max-w-full w-full h-[56px]">
        <div className="grid grid-cols-2 items-center w-full mx-auto z-[101] px-4">
          <div className="flex items-center sm:gap-1">
            <a className="flex flex-row items-center sm:pl-2 sm:pr-6" href="/i">
              <div className="block md:hidden w-7 h-7 sm:w-[115px] sm:h-[37px]">
                <img
                  className="text-transparent"
                  alt=""
                  width="800"
                  height="800"
                  src=""
                />
              </div>
              <div className="hidden md:block w-7 h-7 sm:w-[115px] sm:h-[37px]">
                <img
                  className="text-transparent"
                  alt=""
                  loading="lazy"
                  width="800"
                  height="800"
                  decoding="async"
                  data-nimg="1"
                  src="/images/Onigiri.png"
                />
              </div>
            </a>
            <div
              className="relative hidden md:flex"
              data-headlessui-state=""
            ></div>
            <div className="hidden md:flex justify-center gap-2 relative h-[38px]">
              <button aria-expanded="true" aria-haspopup="true" type="button">
                <span className="btn flex items-center justify-center gap-2 cursor-pointer transition-all bg-slate-300 hover:bg-black/25   text-gray-700 hover:text-gray-800 px-4 h-[38px] rounded-xl text-base font-semibold">
                  Buy 4TOKEN
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <div className="flex gap-2 transform scale-100 opacity-100">
              <div
                data-headlessui-state=""
                className="w-[62px] sm:w-auto md:w-auto"
              >
                <div className="flex gap-2">
                  <button
                    className="btn  flex items-center justify-center gap-2 cursor-pointer transition-all  bg-slate-300 hover:bg-white  px-4 h-[38px] rounded-xl text-base font-semibold !"
                    aria-expanded="false"
                    data-headlessui-state=""
                    type="button"
                    id="headlessui-popover-button-:r1m:"
                  >
                    <div className="hidden xl:block">Connect wallet</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      width="24"
                      height="24"
                      className="hidden transition-all rotate-0 sm:block"
                    ></svg>
                  </button>
                </div>
              </div>
              <div data-headlessui-state=""></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
