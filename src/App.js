import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { usePrivy, useWallets, getEmbeddedConnectedWallet } from "@privy-io/react-auth";
function App() {
    // const { login } = useLogin({
    //   onComplete: () => console.log("login complete"),
    // });
    const { ready, login, authenticated, logout, user } = usePrivy();
    const { wallets } = useWallets();
    const embeddedWallet = getEmbeddedConnectedWallet(wallets);
    //    embeddedWallet.address;
    //    embeddedWallet.getEthersProvider().sendTransaction({...});
    console.log(user);
    // user.telegram
    // user.wallet
    // user.smartWallet
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "flex flex-col items-center justify-center \n        h-screen container mx-auto\n        border border-teal-500\n        ", children: [_jsx("div", { className: "my-2", children: ready ? "privy is ready" : "privy is not ready" }), !authenticated ?
                    _jsx("button", { className: "bg-cyan-600 hover:bg-cyan-700 py-3 px-6 text-white rounded-lg", onClick: login, children: "Log In" })
                    :
                        _jsx("div", { className: "flex flex-col items-center justify-center", children: _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: embeddedWallet?.address ? `Embedded Wallet: ${embeddedWallet?.address}` : 'No Embedded Wallet' }), _jsx("li", { children: user?.wallet?.address ? `Evm Wallet: ${user?.wallet?.address}` : 'No Evm Wallet' }), _jsxs("li", { children: ["Telegram: ", user?.telegram ? `user tg: ${user?.telegram.username}` : 'No Tg Username'] }), _jsx("li", { children: _jsx("button", { className: "bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg", onClick: logout, children: "Logout" }) })] }) })] }) }));
}
export default App;
