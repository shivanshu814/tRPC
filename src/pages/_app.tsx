/** @format */

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { api } from '~/utils/api';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS>
			<ColorModeScript />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default api.withTRPC(MyApp);
