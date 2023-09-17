import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './style.scss'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './Cast/Cast'

const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`); 
  const dataW = data?.results;
  // const trailerD = data?.results.filter()
  
  const dataTrailer = dataW?.filter((d)=> d?.name === 'Official Trailer');
  // console.log(dataTrailer);
  
  const { data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`); 
  
  // console.log(data?.results?.[0])
  // console.log(data?.results?.[0])
  
  // console.log(credits?.crew);
  
  return (
    <div>
      <DetailsBanner
        video={dataTrailer?.length === 0 ? dataW?.[0]: dataTrailer?.[0]}
        // video={data?.results?.[0]}
        crew = {credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}></Cast>

    </div>
  )
}

export default Details;