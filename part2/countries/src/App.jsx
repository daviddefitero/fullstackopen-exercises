import { useEffect, useState } from 'react'

import * as countryService from './services/countries.js'
import { SearchForm } from './components/SearchForm.jsx'
import { CountryList } from './components/CountryList.jsx'
import { CountryDetail } from './components/CountryDetail.jsx'

export const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState({list:[], quantity:0})

  useEffect(() => {
    countryService
      .getAll()
      .then(request => setCountries(request))
  },[])

  useEffect(() => {
    if (search === '') return

    const list = countries.filter(country => country.name.common.toLocaleLowerCase().includes(search))
    const quantity = list.length;

    quantity <= 10
      ? setCountriesToShow({list:list, quantity:quantity})
      : setCountriesToShow({list:[], quantity:quantity})
    
  }, [countries, search])

  return (
    <>
    <SearchForm search={search} setSearch={setSearch} />
    { countriesToShow.quantity !== 1
      ? <CountryList countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} />
      : <CountryDetail country={countriesToShow.list[0]} />
    }
    
    </>
  )
}