import React from 'react';
import '../../public/css/global.css';
import '../../public/css/responsive.css';
import type { AppProps } from 'next/app';
import { AppLayout } from '../layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
export default MyApp;
