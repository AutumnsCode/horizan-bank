import { HeaderBox } from '@/components/header-box'; import { RightSidebar } from '@/components/right-sidebar'
import { TotalBalanceBox } from '@/components/total-balance-box'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Sarah', lastName: 'Pruene', email: 'dummy@gmail.com'}
  return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcone'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account and transactions efficiently.'
					/>
				</header>
				<TotalBalanceBox
					accounts={[]}
					totalBanks={1}
					totalCurrentBalance={1250.35}
				/>
			</div>

			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 123.5 }]}
			/>
		</section>
  );
}

export default Home