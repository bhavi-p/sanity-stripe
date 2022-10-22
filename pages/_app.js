import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

import { useContext, useState } from "react";
import Head from "next/head";
// import AppContext from "../components/context";
// import Home from "./index"
// import Layout from "../components/layout"
import Cookie from "js-cookie"

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
