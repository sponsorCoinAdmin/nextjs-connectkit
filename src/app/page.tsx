'use client'
import { ConnectKitButton } from "connectkit";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* <ExchangeWrapper> */}
      {/* <Web3Provider> */}
        {/* <Header /> */}
        {children}
        <ConnectKitButton />
        {/* <Footer /> */}
      {/* </Web3Provider> */}
      {/* </ExchangeWrapper> */}
    </>
  )
}
