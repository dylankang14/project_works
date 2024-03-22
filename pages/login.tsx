import Button from "@/components/button";
import Input from "@/components/input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../public/logo.svg";
import useMutation from "@/libs/client/useMutation";

interface LoginForm {
	id: string;
	password: string;
}

function Login() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<LoginForm>();
	const [login, { loading, data, error }] = useMutation("http://121.139.31.25:5411/login");
	const onValid = (loginForm: LoginForm) => {
		if (loading) return;
		login(loginForm);
	};
	console.log(data);

	useEffect(() => {
		if (data?.OK) {
			router.push("/");
		}
	}, [data, router]);

	return (
		<>
			<Head>
				<title>Integrated Alarm Web service</title>
			</Head>
			<div id="wrap" className="flex h-screen items-center justify-center p-3">
				<div className="container flex max-w-xs flex-col items-center gap-1">
					<div className="mb-3 w-[70%] text-center sm:w-auto">
						<Image src={logo} alt="Logo" priority={true} />
						<div className="break-words py-2 text-lg font-medium">전차선 보호 모니터링 알람 웹서비스</div>
					</div>
					<form
						onSubmit={handleSubmit(onValid)}
						className="flex w-full flex-col gap-4 rounded-md border border-slate-300 bg-gray-50 px-5 pb-3 pt-5"
					>
						<Input className="w-full" register={register("id")} label="아이디" name="id" type="text" required />
						<Input
							className="w-full"
							register={register("password")}
							label="비밀번호"
							name="password"
							type="password"
							required
						/>
						<Button preventDefault={false} type="submit">
							{loading ? "로그인중..." : "로그인"}
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}

Login.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};

export default Login;
