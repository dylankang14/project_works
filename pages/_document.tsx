import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="ko">
			<Head>
				<meta name="description" content="Integrated Alarm Web service" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
