import Link from "next/link";
import { useState } from "react";
import Icon from "./icon";

export default function Aside() {
	const user = { group: "office" }; // user, office, admin
	return (
		<aside className="w-60 bg-slate-800 text-sm text-white/70">
			<ul className="sticky top-[57px] px-1 pt-2 [&>*:nth-child(1)]:text-white">
				<li className="">
					<Link href={"/"}>
						<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
							<Icon type="alarm" className="h-5 w-5" />
							검측 알람
						</div>
					</Link>
				</li>
				<li className="">
					<Link href={"/facility"}>
						<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
							<Icon type="facility" className="h-5 w-5" />
							시설물 관리
						</div>
					</Link>
				</li>
				<li className="">
					<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
						<Icon type="user" className="h-5 w-5" />
						계정 관리
						<Icon type="chevronDown" className="ml-auto h-3 w-3" />
					</div>
					<ul className="pl-2.5">
						<li className="">
							<Link href={"/user/info"}>
								<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
									<span className="relative bottom-px px-1">•</span> 계정 정보
								</div>
							</Link>
						</li>
						<li className="">
							<Link href={"/user/activity"}>
								<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
									<span className="relative bottom-px px-1">•</span> 로그인 내역
								</div>
							</Link>
						</li>
						<li className="">
							<Link href={"/user/work/fixed"}>
								<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
									<span className="relative bottom-px px-1">•</span> 조치완료 리스트
								</div>
							</Link>
						</li>
						<li className="">
							<Link href={"/user/security"}>
								<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
									<span className="relative bottom-px px-1">•</span> 비밀번호 변경
								</div>
							</Link>
						</li>
					</ul>
				</li>
				{user.group === "office" && (
					<li className="">
						<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
							<Icon type="office" className="h-5 w-5" />
							사업소 관리
						</div>
						<ul className="pl-2.5">
							<li className="">
								<Link href={"/office/statistics"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 사업소 현황/통계
									</div>
								</Link>
							</li>
							<li className="">
								<Link href={"/office/user/list"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 유저리스트
									</div>
								</Link>
							</li>
							<li className="">
								<Link href={"/office/info"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 사업소 정보
									</div>
								</Link>
							</li>
						</ul>
					</li>
				)}
				{user.group === "admin" && (
					<li className="">
						<div className="flex cursor-pointer items-center gap-1.5 px-3 py-2 hover:text-white">
							<Icon type="admin" className="h-5 w-5" />
							최고관리자
						</div>
						<ul className="pl-2.5">
							<li className="">
								<Link href={"/admin/office/[id]/statistics"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 사업소 현황/통계
									</div>
								</Link>
							</li>
							<li className="">
								<Link href={"/admin/user/[id]/statistics"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 유저 현황/통계
									</div>
								</Link>
							</li>
							<li className="">
								<Link href={"/admin/manage/office"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 전체 사업소 관리
									</div>
								</Link>
							</li>
							<li className="">
								<Link href={"/admin/manage/user"}>
									<div className="flex cursor-pointer gap-1.5 px-3 py-2 hover:text-white">
										<span className="relative bottom-px px-1">•</span> 전체 유저 관리
									</div>
								</Link>
							</li>
						</ul>
					</li>
				)}
			</ul>
		</aside>
	);
}
