import React from 'react'
import { useParams } from 'react-router'
// 1) Import useQuery
import { useQuery } from 'react-query';
import './POPOSDetails.css'
import POPOSFeatureList from '../POPOSFeatureList/POPOSFeatureList'

function POPOSDetails(props) {
  const params = useParams()
  const { isLoading, error, data } = useQuery('sfpopos', () => {
    return fetch('/sfpopos').then(res => res.json())
  });
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>Error: {error.message}</h1>
  }
  const { id } = params // Location index
  const { images, title, desc, hours, features, geo } = data[id]

  return (
    <div className="POPOSDetails">
      <div className="POPOSDetails-image" aria-label={'Image of this Public Space'}>
        <img alt={"Public Space"} src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title" aria-label={title}>{ title }</h1>
        <p className="POPOSDetails-desc" aria-label={desc}>{ desc }</p>
        <p className="POPOSDetails-hours" aria-label={hours}>{ hours }</p>
        <POPOSFeatureList features={features}/>
        <p className="POPOSDetails-geo" aria-label={'coordinates'}>{ geo.lat } { geo.lon }</p>
      </div>
    </div>
  )
}

export default POPOSDetails
