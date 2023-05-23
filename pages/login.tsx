import Button from "@/components/button";
import Input from "@/components/input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import logo from "../public/logo.svg";
import useMutation from "@/libs/client/useMutation";
import { useLangData } from "@/contexts/langContext";

interface LoginForm {
	id: string;
	password: string;
}

function Login() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<LoginForm>();
	const [login, { loading, data, error }] = useMutation("http://192.168.0.166:22080/API/Login/login");
	const onValid = (loginForm: LoginForm) => {
		if (loading) return;
		login(loginForm);
		console.log(loginForm);
		// router.push("/");
	};
	console.log(data);
	const { common } = useLangData();
	console.log(common?.get("c1134"));

	return (
		<>
			<Head>
				<title>Integrated Alarm Web service</title>
			</Head>
			<div id="wrap" className="flex h-screen items-center justify-center">
				<div className="container flex max-w-xs flex-col items-center gap-1">
					<div className="mb-3 text-center">
						<Image src={logo} alt="Logo" priority={true} />
						<div className="py-2 text-lg font-medium">ITX {common?.get("C4702")} 웹서비스 로그인</div>
					</div>
					<form
						onSubmit={handleSubmit(onValid)}
						className="flex w-full flex-col gap-4 rounded-md border border-slate-300 bg-gray-50 px-5 pb-3 pt-5"
					>
						<Input className="w-full" register={register("id")} label="이메일" name="id" type="text" required />
						<Input
							className="w-full"
							register={register("password")}
							label="비밀번호"
							name="password"
							type="password"
							required
						/>
						<Button preventDefault={false} type="submit">
							로그인{common?.get("c1134")}
						</Button>
					</form>
					<div className="mt-2 flex w-full flex-wrap">
						<Link
							href="/signup"
							className="flex-1 cursor-pointer rounded-md border border-slate-300 bg-gray-50 p-2 text-center text-blue-700 hover:bg-blue-600 hover:text-white"
						>
							<span className="text-sm font-bold">회원가입</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

Login.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};

export default Login;
