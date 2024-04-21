import { useState } from "react";
import PriceView from "./Price";
import QuoteView from "./Quote";
import type { PriceResponse } from "@/app/api/types";
import { useAccount } from "wagmi";
import { EXCHANGE_STATE } from "@/app/lib/structure/types";
import { exchangeContext } from "@/app/lib/context";
import React from 'react';

let setExchangeState: (value:EXCHANGE_STATE) => void;
let exchangeState:EXCHANGE_STATE;

export function Home() {
  
  const [price, setPrice] = useState<PriceResponse | undefined>();
  const [quote, setQuote] = useState();
  const [state, setState] = useState<EXCHANGE_STATE>(EXCHANGE_STATE.PRICE);
  const { address } = useAccount();

  const setExState = (exchangeState:EXCHANGE_STATE) => {
    // alert(`setState = (${exchangeState})`)
    setState(exchangeState)
    exchangeContext.data.state = exchangeState;
  }
  // alert(`EXCHANGE HERE 1\n state = ${state} PRICE = ${price} ADDRESS = ${address}` )

  setExchangeState = setExState;
  exchangeState = state;
  // alert("HERE 1")

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`} >
      <PriceView
        connectedWalletAddr={address}
        price={price}
        setPrice={setPrice}
      />

      {/* {state !== EXCHANGE_STATE.QUOTE && price && address ? 
      (
        <QuoteView
          connectedWalletAddr={address}
          price={price}
          quote={quote}
          setQuote={setQuote}
        />
        ) : (
          <PriceView
          connectedWalletAddr={address}
          price={price}
          setPrice={setPrice}
        />
      )} */}
    </main>
  );
}

const index = () => {
  return (
    <div>
      {Home()}
    </div>
  );
}

export default index;

export {
  setExchangeState,
  EXCHANGE_STATE
}