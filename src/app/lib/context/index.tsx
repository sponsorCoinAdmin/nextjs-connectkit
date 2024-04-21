'use client'
import { getDefaultNetworkSettings } from '@/app/lib/network/initialize/defaultNetworkSettings';
import { DISPLAY_STATE, EXCHANGE_STATE, ExchangeContext, TradeData } from '@/app/lib/structure/types';
import { useState } from 'react';
import { isSpCoin } from '../spCoin/utilsDuplicate';
import { getNetworkName } from '../network/utils';
import { useChainId } from 'wagmi';

// import { junkName, isSpCoin, isSpCoin2 } from '../spCoin/junk'
// import { junkName } from '../spCoin/utils';

let chainId:number = 1;
let exchangeContext:ExchangeContext;

const getInitialContext = (network:string|number) => {
    const defaultNetworkSettings = getDefaultNetworkSettings(network)
    let initialContext:ExchangeContext = {
        data: getInitialDataSettings(network, isSpCoin(defaultNetworkSettings.defaultBuyToken)),
        network: defaultNetworkSettings.networkHeader,
        sellTokenElement: defaultNetworkSettings.defaultSellToken,
        buyTokenElement: defaultNetworkSettings.defaultBuyToken,
        recipientWallet: defaultNetworkSettings.defaultRecipient,
        agentWallet: defaultNetworkSettings.defaultAgent
    }
    return initialContext;
}

function getInitialDataSettings(network: string | number, ifSpCoin:boolean): { chainId: number; networkName: string; sellAmount: any; buyAmount: any; tradeDirection: string; displayState: DISPLAY_STATE; state: EXCHANGE_STATE; slippage: string; } {
let data:TradeData = {
        chainId: 1,
        networkName: "ethereum",
        sellAmount: "0",
        buyAmount: "0",
        tradeDirection: "sell",
        state: EXCHANGE_STATE.PRICE,
        displayState: ifSpCoin ? DISPLAY_STATE.SPONSOR_SELL_ON : DISPLAY_STATE.OFF,
        slippage: "0.02"
    }
    return data;
}

const resetContextNetwork = (context:ExchangeContext, network:string|number) => {
    
    const newNetworkName:string = typeof network === "string" ? network.toLowerCase() : getNetworkName(network)
    console.debug("resetContextNetwork: newNetworkName = " + newNetworkName);
    console.debug("resetContextNetwork: exchangeContext.networkName = " + exchangeContext.data.networkName);

    if (context.data.networkName !== newNetworkName) {
        console.debug(`UPDATING NETWORK to ${newNetworkName}`);

        const defaultNetworkSettings = getDefaultNetworkSettings(newNetworkName)
        console.debug(`Loaded defaultNetworkSettings for ${newNetworkName}: ${JSON.stringify(defaultNetworkSettings,null,2)}`);
        context.data.networkName = newNetworkName
        context.data.state = EXCHANGE_STATE.PRICE;
        context.data.displayState = isSpCoin(defaultNetworkSettings.defaultBuyToken) ? DISPLAY_STATE.SPONSOR_SELL_ON:DISPLAY_STATE.OFF,
        context.data.slippage = "0.02",
        context.sellTokenElement = defaultNetworkSettings.defaultSellToken,
        context.buyTokenElement = defaultNetworkSettings.defaultBuyToken,
        context.recipientWallet = defaultNetworkSettings.defaultRecipient,
        context.agentWallet = defaultNetworkSettings.defaultAgent
    }      
    return context;
}

export function ExchangeWrapper({children} : {
    children: React.ReactNode;
}) {
    chainId = useChainId();
    // alert(`chainId = ${chainId}`)
    const [context, setContext] = useState<ExchangeContext>(getInitialContext(chainId))
    exchangeContext = context;

    return (
        <div>
            {children}
        </div>
    )
}

exchangeContext = getInitialContext(chainId);
// alert(`getInitialContext:exchangeContext = ${exchangeContext}`)

export {
    exchangeContext,
    resetContextNetwork
}
