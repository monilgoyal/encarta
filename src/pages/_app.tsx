import '../styles/globals.css'
import { Provider, useDispatch, useSelector } from 'react-redux';
import type { AppProps } from 'next/app'
import store from '../state/store';
import React, { useEffect, useState } from 'react';
import TopBarProgress from "react-topbar-progress-indicator"
import { Router } from 'next/router';
import ContactDrawer from '../components/drawer/side-drawer';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state';



export const Site = ({ children }) => {

  const [progress, setProgress] = useState(false)
  const dispatch = useDispatch()
  const fetchEventData = bindActionCreators(actionCreator.getEvents, dispatch)
  useEffect(() => { fetchEventData() }, [])
  Router.events.on("routeChangeStart", () => {
    setProgress(true)
    //function will fired when route change started
  })

  Router.events.on("routeChangeComplete", () => {
    setProgress(false)
    //function will fired when route change ended
  })
  TopBarProgress.config({
    barColors: {
      "0": "#E93E53"
    },
    shadowBlur: 5
  });

  return (
    <>
      {progress && <TopBarProgress />}
      {children}
      <ContactDrawer />
    </>
  )

}
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Site>
        <Component {...pageProps} />
      </Site>
    </Provider>)
}

export default MyApp


