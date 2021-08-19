import React from 'react'
import './Header.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbbXpFsC33lP-nPka2_0H17FDv2sQRtEEn0Ci_VMii8aJWfh2mOu_5JAgT7l22tPLjGqcRweDcAxPQKqodpzkBTzbu_38dxSc-jV.png?r=2d6"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
        </header>
    )
}