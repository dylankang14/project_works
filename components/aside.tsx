export default function Aside() {
	return (
		<aside className="w-48 border-r bg-white">
			<ul className="sticky top-[57px]">
				<li className="cursor-pointer border-b">
					<div className="px-2 py-1">검측 알람</div>
				</li>
				<li className="cursor-pointer border-b">
					<div className="px-2 py-1">시설물 관리</div>
				</li>
				<li className="cursor-pointer border-b">
					<div className="px-2 py-1">계정 관리</div>
					<ul className="divide-y border-t">
						<li className="cursor-pointer">
							<div className="px-2 py-1">- 계정 정보</div>
						</li>
						<li className="cursor-pointer">
							<div className="px-2 py-1">- 로그인 내역</div>
						</li>
						<li className="cursor-pointer">
							<div className="px-2 py-1">- 조치완료 리스트</div>
						</li>
						<li className="cursor-pointer">
							<div className="px-2 py-1">- 비밀번호 변경</div>
						</li>
					</ul>
				</li>
			</ul>
		</aside>
	);
}
