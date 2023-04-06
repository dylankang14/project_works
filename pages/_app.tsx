import Layout from "@/components/layout";
import { FilterProvider } from "@/contexts/filterContext";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { SWRConfig } from "swr";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout =
		Component.getLayout ??
		((page) => (
			<FilterProvider>
				<SWRConfig value={{ fetcher: (url: string) => fetch(url).then((response) => response.json()) }}>
					<Layout>
						<Head>
							<meta name="viewport" content="width=device-width, initial-scale=1" />
						</Head>
						{page}
					</Layout>
				</SWRConfig>
			</FilterProvider>
		));
	// return (
	// 	<Layout>
	// 		<Head>
	// 			<meta name="viewport" content="width=device-width, initial-scale=1" />
	// 		</Head>
	// 		<Component {...pageProps} />
	// 	</Layout>
	// );
	return getLayout(<Component {...pageProps} />);
}
