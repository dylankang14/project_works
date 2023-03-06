import Button from "@/components/button";
import Input from "@/components/input";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import logo from "../public/logo.svg";

interface SignUpForm {
	email: string;
	name: string;
	office: string;
	phone: number;
	password: string;
	re_password: string;
}

function SignUp() {
	const { register, handleSubmit } = useForm<SignUpForm>();
	const onValid = (signUpForm: SignUpForm) => {
		console.log(signUpForm);
	};
	return (
		<>
			<Head>
				<title>Integrated Alarm Web service</title>
				<meta name="description" content="Integrated Alarm Web service" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div id="wrap" className="flex min-h-screen items-center justify-center">
				<div className="container flex max-w-md flex-col items-center gap-1">
					<div className="mb-3 text-center">
						<Image src={logo} alt="Logo" priority={true} />
						<div className="py-2 text-lg font-medium">ITX 알람 웹서비스 회원가입</div>
					</div>
					<form
						onSubmit={handleSubmit(onValid)}
						className="flex w-full flex-col gap-4 rounded-md border border-slate-300 bg-gray-50 px-5 pb-3 pt-5"
					>
						<Input register={register("email")} label="이메일" name="email" type="email" required />
						<Input register={register("name")} label="이름" name="name" type="text" required />
						<Input register={register("office")} label="소속" name="office" type="text" required />
						<Input register={register("phone")} label="전화번호" name="phone" type="number" required />
						<Input register={register("password")} label="비밀번호" name="password" type="password" required />
						<Input
							register={register("re_password")}
							label="비밀번호 확인"
							name="re_password"
							type="password"
							required
						/>
						<Button>회원가입</Button>
					</form>
				</div>
			</div>
		</>
	);
}

SignUp.getLayout = function getLayout(page: ReactElement) {
	return <>{page}</>;
};
export default SignUp;
