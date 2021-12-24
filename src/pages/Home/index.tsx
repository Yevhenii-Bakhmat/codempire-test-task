import React from 'react'
import CovidLogo from '../../assets/logo.png'
import Search from '../../components/Search'
import style from './style.module.sass'
interface Props {}

const HomePage = (props: Props) => {
  return (
    <div className={style['root']}>
      <header className={style['header']}>
        <div className={style['covid-logo']}>
          <img src={CovidLogo} alt='COVID logo' />
          <h1>Statistics</h1>
        </div>
        <Search placeholder='Search...' />
      </header>
    </div>
  )
}

export default HomePage