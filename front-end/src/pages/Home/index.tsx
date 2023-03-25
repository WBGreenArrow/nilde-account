import React from 'react'

import './styles.scss'

import { TransitionTypeCard } from '../../components/TransitionTypeCard'
import { Header } from '../../components/Header'
import { CardBalance } from '../../components/CardBalance'
import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg'
import { TransitionList } from '../../components/TransitionList'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeBackgroundHeader"></div>
      <div className="homeContentWrapper">
        <main className="homeContent">
          <Header />
          <div className="cardBalanceContainer">
            <CardBalance label="Entradas" type="deposit" value="R$17.400,00" />
            <CardBalance label="Saídas" type="checkout" value="R$1.259,00" />
            <CardBalance label="Total" type="balance" value="R$16.141,00" />
          </div>
          <div className="searchTransitionContainer">
            <input type="text" placeholder="Busque uma transação" />
            <span>
              <SearchIcon />
              Buscar
            </span>
          </div>
          <TransitionList />
          <Footer />
          {/* <TransitionTypeCard label="Entrada" transitionType="deposit" /> */}
        </main>
      </div>
    </div>
  )
}
