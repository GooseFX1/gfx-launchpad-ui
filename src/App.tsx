import { Router } from './Router'
import {
  AccountsProvider,
  DarkModeProvider,
  SettingsProvider,
  TokenRegistryProvider,
  WalletProvider,
  RewardToggleProvider,
  CryptoProvider
} from './context'
import './App.less'
import ThemeProvider from './theme'


export default function App() {
  return (
    <DarkModeProvider>
      <ThemeProvider>
        <SettingsProvider>
          <WalletProvider>
            <TokenRegistryProvider>
              <AccountsProvider>
                <RewardToggleProvider>
                  <CryptoProvider>
                    <Router />
                  </CryptoProvider>
                </RewardToggleProvider>
              </AccountsProvider>
            </TokenRegistryProvider>
          </WalletProvider>
        </SettingsProvider>
      </ThemeProvider>
    </DarkModeProvider>
  )
}