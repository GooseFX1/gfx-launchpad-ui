import React, { FC } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Launchpad } from './pages/NFTs/launchpad/Launchpad'
import { AppLayout } from './layouts'
import { Creator } from './pages/NFTs/CreatorPage/Creator'
import { AdminWrapper } from './pages/NFTs/adminPage/components/AdminWrapper'
import {
    NavCollapseProvider,
    NFTProfileProvider,
    OrderProvider,
    TradeHistoryProvider,
    NFTAdminProvider
  } from './context'
import { NFTs } from './pages'
import { GenericNotFound } from './pages/InvalidUrl'

export const Router: FC = () => {
    return (

      <BrowserRouter>
        {window.location.pathname === '/' && <Redirect from="/" to="/NFTs/launchpad" />}
        {window.location.pathname === '/NFTs' && <Redirect from="/NFTs" to="/NFTs/launchpad" />}
        {window.location.pathname === '/NFTs/' && <Redirect from="/NFTs/" to="/NFTs/launchpad" />}



        <NavCollapseProvider>
          <AppLayout>
            <Switch>
              <Route path="/NFTs/launchpad">
                <Launchpad />
              </Route>
              <Route path="/NFTs/Creator">
                <Creator />
              </Route>
              <Route path="/NFTs/admin">
                <NFTAdminProvider>
                  <AdminWrapper />
                </NFTAdminProvider>
              </Route>
              {/* <Route path="/NFTs">
                <NFTProfileProvider>
                  <NFTs />
                </NFTProfileProvider>
              </Route> */}
              <Route>
                <GenericNotFound />
              </Route>
            </Switch>
          </AppLayout>

      </NavCollapseProvider>
      
      </BrowserRouter>
    )
  }