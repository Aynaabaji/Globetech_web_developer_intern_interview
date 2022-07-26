import React from 'react'
import './shuttle.css'
import Rocket from '../../../assets/fa_space-shuttle.png'
import Line1 from '../../../assets/Line1.png'
import Line2 from '../../../assets/Line2.png'
import Line3 from '../../../assets/Line3.png'

const Shuttle = () => {
  return (
    <div>
        <div className="rock1">
            <div className="rock2">
                <div className="rocket">
                    <img id='shutle' src={Rocket} alt="shuttle" />
                    <img className='rocket_smoke line_smoke1' src={Line1} alt="line1" />
                    <img className='rocket_smoke line_smoke2' src={Line2} alt="line2" />
                    <img className='rocket_smoke line_smoke3' src={Line3} alt="line3" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shuttle