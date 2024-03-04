import React from 'react'
import { useFavoritContext } from '../providers/FavoritProvider'

const Test = () => {
  const {favorits,Liked}=useFavoritContext()
  console.log(favorits)
  console.log(Liked("65e0c6b606113ac71602a37f"))
  return (
    <div>
{

}
    </div>
  )
}

export default Test
