import React from 'react'

import './styles.scss'

import { TransitionTypeCard } from '../../components/TransitionTypeCard'
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeBackgroundHeader"></div>
      <div className="homeBackgroundBody"></div>
      <div className="homeContentWrapper">
        <main className="homeContent">
          <Header />

          {/* <TransitionTypeCard label="Entrada" transitionType="deposit" /> */}
        </main>
      </div>
    </div>
  )
}
