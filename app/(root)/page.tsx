import { HeaderBox } from '@/components/header-box'
import { TotalBalanceBox } from '@/components/total-balance-box'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Sarah'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Welcone'
            user={loggedIn?.firstName || "Guest"}
            subtext='Access and manage your account and transactions efficiently.'
          />
        </header>
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  )
}

export default Home