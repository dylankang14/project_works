import Layout from "@/components/layout";
import { FilterProvider } from "@/contexts/filterContext";
import useMutation from "@/libs/client/useMutation";
import "@/styles/globals.css";
import { request } from "http";
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
	const [refresh, {data, loading, error}] = useMutation('http://121.139.31.25:5411/refresh');
	const [access, {loading: refreshTokenLoading, error: refreshTokenError}] = useMutation('http://121.139.31.25:5411/access');
	const getLayout =
		Component.getLayout ??
		((page) => (
			<>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="Integrated Alarm Web service" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<FilterProvider>
					<SWRConfig
						value={{
							fetcher: (url: string) => fetch(url, { credentials: "include" }).then((response) => {
								if (response.status === 401) {
									refresh();
								}	else if (response.status === 400) {
									access();
								}
								return response.json()
							}),
						}}
					>
						<Layout>{page}</Layout>
					</SWRConfig>
				</FilterProvider>
			</>
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
