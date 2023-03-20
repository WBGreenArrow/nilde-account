import React from 'react'
import './styles.scss'
import logoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <div className="headerContainer">
      <span>
        <img src={logoImg} alt="logo image" />
      </span>
      <span>Nova Transação</span>
    </div>
  )
}
