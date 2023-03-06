import Button from "@/components/button";
import Input from "@/components/input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import logo from "../public/logo.svg";

interface LoginForm {
	email: string;
	password: string;
}

function Login() {
	const router = useRouter();
	const { register, handleSubmit } = useForm<LoginForm>();
	const onValid = (loginForm: LoginForm) => {
		console.log(loginForm);
		router.push("/");
	};
	return (
		<>
			<Head>
				<title>Integrated Alarm Web service</title>
			</Head>
			<div id="wrap" className="flex h-screen items-center justify-center">
				<div className="container flex max-w-xs flex-col items-center gap-1">
					<div className="mb-3 text-center">
						<Image src={logo} alt="Logo" priority={true} />
						<div className="py-2 text-lg font-medium">ITX 알람 웹서비스 로그인</div>
					</div>
					<form
						onSubmit={handleSubmit(onValid)}
						className="flex w-full flex-col gap-4 rounded-md border border-slate-300 bg-gray-50 px-5 pb-3 pt-5"
					>
						<Input register={register("email")} label="이메일" name="email" type="email" required />
						<Input register={register("password")} label="비밀번호" name="password" type="password" required />
						<Button>로그인</Button>
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
