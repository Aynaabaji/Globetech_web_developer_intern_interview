import React from 'react'
import Nav from '../../components/home/navbar/Nav'
import Scards from '../../components/services/service_cards/Scards'
import './service.css'

const Service = () => {
  return (
    <div>
        <Nav/>
        <div className="container">
          <Scards/>
        </div>
    </div>
  )
}

export default Service