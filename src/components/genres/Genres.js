import React from 'react'
import {useSelector } from 'react-redux/es/hooks/useSelector'

import './style.scss'

const Genres = ({data}) => {
    const {genres} = useSelector((state)=> state.home)


  return (
    <div className='genres'>
        {data?.map((index)=> {

            if(!genres[index]?.name)
                return;
            return (
                <div key={index} className="genre">
                    {genres[index]?.name}
                </div>
            )
        })}
    </div>
  )
}

export default Genres