"use client"; 
import { useAccount, useBalance, useNetwork } from "wagmi";
import { useEffect, useState } from "react";
export default function Amount1() {
  
const { chain } = useNetwork();
const [chainID, setChainID] = useState(0);
const { address, isConnected } = useAccount();
const tokenAddress = "0xb4615aad766f6de3c55330099e907ff7f13f1582";

const [tokenbalance, setTokenBalanceLocal] = useState("");
const [integerPart, setIntegerPart] = useState("0");
const [fractionalPart, setFractionalPart] = useState("00");
const { data, isError, isLoading } = useBalance({
  address: address,
  token: tokenAddress,
  chainId: chainID,
  watch: true,
  onError(error) {
    console.log("Error", error);
  },
});

useEffect(() => {
  if (chain?.id == 1) {
    setChainID(1);
  } else if (chain?.id == 56) {
    setChainID(1);
  }

  if (!isLoading) {
    const tokenB = data?.formatted || "";
    setTokenBalanceLocal(tokenB);

    // console.log(tokenB);

    const integerPart = Math.floor(Number(data?.formatted)); // Extract the integer part
    const fractionalPart = (Number(data?.formatted) - integerPart).toFixed(6);

    setIntegerPart(integerPart.toString());
    const fPart = fractionalPart.toString();
    setFractionalPart(fPart.substring(2));
  }
}, [chain?.id, tokenAddress, address, data, isLoading]);

return (
    <div className="flex flex-col border-[2px] p-3 border-white  saturate-[2] dark:saturate-[1] py-3 rounded-xl">
      <div className="relative flex items-center gap-4">
        <input
          inputMode="decimal"
          title="Token Amount"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          autoComplete="new-password"
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          placeholder="0"
          min="0"
          minLength={1}
          maxLength={79}
          className="placeholder-white text-left border-none focus:outline-none focus:ring-0 p-0 bg-transparent w-full truncate font-medium without-ring !text-3xl py-1"
          testdata-id="undefined-input"
          value=""
        />
        <button
          id="undefined-button"
          className="flex items-center justify-end gap-1 pl-2 pr-2 text-xl font-medium rounded-full text-white/90 bg-black/30 "
        >
          <div className="flex-1 w-[90px] pt-1.5 h-[50px] mr-0.5 text-white">
            <span className="span-1">
              <span className="span-2">
                <img
                  className="text-transparent"
                  alt="Ether"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  width={60}
                  height={60}
                  src="/images/onigiri_logo_short.png"
                />
              </span>
            </span>
          </div>
          ONIGIRI NEKO
        </button>
      </div>
      <div className="flex flex-row items-center justify-between h-[36px]">
        <p className="flex items-baseline text-lg font-medium text-gray-500 select-none dark:text-slate-400"></p>
        <button
          data-testid="undefined-balance-button"
          type="button"
          className="font-medium flex gap-1.5 items-center py-1 px-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
            width="18"
            height="18"
          >
            <path
              fill="white"
              d="M15.6 4.6H1.85v-.55l12.1-.968v.968h1.65V2.4c0-1.21-.98-2.059-2.177-1.888L2.378 2.089C1.18 2.26.2 3.39.2 4.6v11a2.2 2.2 0 002.2 2.2h13.2a2.2 2.2 0 002.2-2.2V6.8a2.2 2.2 0 00-2.2-2.2zm-1.65 7.707a1.65 1.65 0 01-.63-3.176 1.65 1.65 0 11.63 3.176z"
            ></path>
          </svg>
          <span className="text-lg">
            <span className="text-sm font-semibold text-cyan-50">{fractionalPart}</span>
          </span>
        </button>
      </div>
    </div>
  );
}
