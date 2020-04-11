import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name={'viewport'} content={'minimum-scale=1, initial-scale=1, width=device-width'} />
				<title>{'Development'}</title>
			</Head>
			<ThemeProvider theme={theme}>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
