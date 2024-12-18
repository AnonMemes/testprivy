import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { PrivyProvider } from '@privy-io/react-auth';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(PrivyProvider, { appId: "cm4tqux1v00t1uw8kiasc5vz7", config: {
            // Customize Privy's appearance in your app
            appearance: {
                theme: 'light',
                accentColor: '#676FFF',
                logo: 'https://your-logo-url',
            },
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
                createOnLogin: 'users-without-wallets',
            },
        }, children: _jsx(App, {}) }) }));
