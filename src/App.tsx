import React, { useState } from 'react';

import { usePrivy, useWallets, getEmbeddedConnectedWallet } from "@privy-io/react-auth";

function App() {

  // const { login } = useLogin({
  //   onComplete: () => console.log("login complete"),
  // });

  const {ready, login, authenticated, logout, user } = usePrivy();
  const { wallets } = useWallets();
  const embeddedWallet = getEmbeddedConnectedWallet(wallets);
  //    embeddedWallet.address;
  //    embeddedWallet.getEthersProvider().sendTransaction({...});
  console.log(user);
  // user.telegram
  // user.wallet
  // user.smartWallet


  return (
    <>
      <div className="flex flex-col items-center justify-center 
        h-screen container mx-auto
        border border-teal-500
        ">
          <div className="my-2">{ready ? "privy is ready" : "privy is not ready"}</div>

          {!authenticated ?
            <button
              className="bg-cyan-600 hover:bg-cyan-700 py-3 px-6 text-white rounded-lg"
              onClick={login}
            >
              Log In
            </button>
            :

            <div className="flex flex-col items-center justify-center">
              <ul className="space-y-2">
                <li>
                  {embeddedWallet?.address ? `Embedded Wallet: ${embeddedWallet?.address}` : 'No Embedded Wallet'}
                </li>
                <li>
                  {user?.wallet?.address ? `Evm Wallet: ${user?.wallet?.address}` : 'No Evm Wallet'}
                </li>
                <li>Telegram: {user?.telegram ? `user tg: ${user?.telegram.username}` : 'No Tg Username'}</li>
                <li>
                  <button className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                    onClick={logout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          }

        </div>
    </>
  )
}

export default App
