import React from 'react';
import './footer.css'

function footer() {
    return (
        <div className="main1">
        <div className="container">
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

    </div>
    )
}

export default footer;

