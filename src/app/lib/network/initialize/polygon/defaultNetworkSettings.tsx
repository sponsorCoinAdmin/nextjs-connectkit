import {  TokenElement } from '../../../structure/types'
 
 const defaultSellToken: TokenElement = { 
  chainId: 137,
  "symbol": "USDC",
  "img": "/resources/images/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  "name": "USD Coin Staked",
  "address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  "decimals": 6
 };

const defaultBuyToken: TokenElement = { 
  chainId: 137,
  symbol: "SpCoin",
  img: "/resources/images/tokens/0xToDo_SpCoin.png",
  name: "Sponsor Coin",
  address: "0xC2816250c07aE56c1583E5f2b0E67F7D7F42D562",
  decimals: 18
};

const defaultRecipient = { 
  "symbol": "Trees",
  "img": "/resources/images/recipients/SaveTheTrees.png",
  "name": "Save The Trees",
  "address": "Save The Trees Wallet Address",
  "url": "ToDo N/A"
};

const defaultAgent = { 
  "symbol": "Tweety",
  "img": "/resources/images/agents/TweetyBird.png",
  "name": "Tweety Bird",
  "address": "TweetyBird's Wallet Address",
  "url": "ToDo N/A"
};

const defaultNetworkSettings = {
  defaultSellToken : defaultSellToken,
  defaultBuyToken  : defaultBuyToken,
  defaultRecipient : defaultRecipient,
  defaultAgent     : defaultAgent
}

export { defaultNetworkSettings };
