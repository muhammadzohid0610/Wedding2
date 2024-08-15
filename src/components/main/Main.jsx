import React, { useState } from "react"
import './main.css'
import Modal from '../modal/modal'; 
function Main() {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
    return (
        <div className="main">
            <div className="container">
                <div className="burger">
                    <img src="/svg/burger.svg" alt=""  onClick={toggleModal} />
                </div>
                
                <div className="main__inner">
                    <div className="main__inner__top">
                    <div className="main__inner__top1">
                        свадебный<br />
                        фотоальбом
                        <div className="logo">
                            <img src="/img/mainlogo.png" alt="" />
                        </div>
                        романтические<br />
                        моменты
                        </div>
                    </div>
                    <div className="main__inner__bottom">
                        <div className="mens_name">ЭМИЛЬ</div>
                        <div className="namesend">&</div>
                        <div className="womens_name">РАНЕЛЬ</div>
                    </div>
                    <div className="main__inner__bottom1">
                        <div className="mens_name">бесконечные воспоминания</div>
                        <img src="/svg/line.svg" alt="" />
                        <div className="womens_name">незабываемая свадьба</div>
                    </div>
                </div>

            </div>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
    )
}
export default Main