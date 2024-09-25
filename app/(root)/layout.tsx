import { MobileNav } from "@/components/mobile-nav";
import Sidebar from "@/components/sidebar";
import Image from "next/image";


export default function HomeLayout({	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = {firstName: 'Sarah', lastName: 'Pruene'}
	return (
		<main className="flex h-screen w-full font-inter">
			<Sidebar user={loggedIn} />
			<div className="flex size-full flex-col">
				<div className="root-layout">
					<Image
						alt='menu item'
						src='/icons/logo.svg'
						width={30}
						height={30}
					/>
					<div>
						<MobileNav user={loggedIn} />
					</div>
				</div>
			{children}
			</div>
		</main>
	);
}
