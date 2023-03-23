import React from 'react'

import './styles.scss'

const dataMock = [
  {
    id: 1,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 2,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 3,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 4,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 5,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 6,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 7,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 8,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  {
    id: 9,
    typeTrasition: 'deposit',
    value: 'R$12.000,00',
    desc: 'Desenvolvimento de site',
    createdAt: '23/03/2023',
  },
  //   {
  //     id: 10,
  //     typeTrasition: 'deposit',
  //     value: 'R$12.000,00',
  //     desc: 'Desenvolvimento de site',
  //     createdAt: '23/03/2023',
  //   },
]

export const TransitionList = () => {
  return (
    <div className="transitionListContainer">
      <div className="transitionListContent">
        {dataMock.length &&
          dataMock.map((transition) => (
            <div className="transitionItemContainer">
              <span>{transition.desc}</span>
              <span>{transition.value}</span>
              <span>{transition.typeTrasition}</span>
              <span>{transition.createdAt}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
