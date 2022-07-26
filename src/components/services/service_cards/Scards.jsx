import React from 'react'
import './scards.css'
import PIC1 from '../../../assets/service1.png'
import PIC2 from '../../../assets/service2.png'
import PIC3 from '../../../assets/service3.png'
import PIC4 from '../../../assets/service4.png'
import PIC5 from '../../../assets/service5.png'
import PIC6 from '../../../assets/service6.png'
import Rocket from '../../../assets/fa_space-shuttle.png'
import Line1 from '../../../assets/Line1.png'
import Line2 from '../../../assets/Line2.png'
import Line3 from '../../../assets/Line3.png'
import Sheader from '../service_header/Sheader'


const card_item = [
    {
        picture: PIC1,
        cardHeader: "Software Solution"
    },
    {
        picture: PIC2,
        cardHeader:"E-Commerce Solution"
    },
    {
        picture:PIC3,
        cardHeader:"ERP Solution"
    },
    {
        picture:PIC4,
        cardHeader:"Bulk SMS Service"
    },
    {
        picture:PIC5,
        cardHeader:"Graphic Design"
    },
    {
        picture:PIC6,
        cardHeader:"Digital Marketing"
    }
]

const Scards = () => {
  return (
    <div className="container">

{/* shuttle jsx starts */}
        <div className="shut">
            <div className="rock12">
                <div className="rock22">
                    <div className="rocket2">
                        <img id='shutle' src={Rocket} alt="shuttle" />
                        <img className='rocket_smoke2 line_smoke12' src={Line1} alt="line1" />
                        <img className='rocket_smoke2 line_smoke22' src={Line2} alt="line2" />
                        <img className='rocket_smoke2 line_smoke32' src={Line3} alt="line3" />
                    </div>
                </div>
            </div>
        </div>
{/* shuttle jsx ends */}

        <Sheader/>


        <div id='service_cards_section' className='hovered'>
            {
                card_item.map(({id,picture,cardHeader})=>{
                    return(
                        <div key={id} className="serCard">
                            <img src={picture} alt="pic" />
                            <div className="servo_text">
                                <h3 className="card_heading_title">{cardHeader}</h3>
                                <p className='card_paragraph'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
                                <div className="btn_flex">
                                    <button className="card_button btn">MORE</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Scards