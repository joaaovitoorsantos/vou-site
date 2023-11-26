//@ts-nocheck
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { BreakpointProvider } from 'react-socks';
import { useEffect } from 'react';
import '@mantine/core/styles.css';

export default function App(props: AppProps) {
  const { Component, pageProps: { session, ...pageProps } } = props;
  return (
    <>
      <Head>
        <title>Vou</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        theme={{
          colorScheme: 'light',
        }}      >
        <Component {...pageProps} />
      </MantineProvider>

    </>
  );
}
