import userEvent from '@testing-library/user-event';
import React from 'react';
import {Wrapper , Content } from "./User.styles.js" ; //


const User = ( {user}) => {
    return <Wrapper>
     <Content>
        <div className="info">
            <h3 className={user.rank && user.rank.replace(/ /g,'')}>{user.rank || ""}</h3>
            {(user.firstName || user.secondName) && <h1 className={user.rank && user.rank.replace(/ /g,'')}>{`${user.firstName} ${user.lastName}`}</h1> } 
            <h3><i className="fas fa-chart-line">: </i>{`${user.rating || "unrated"}(`}<span className={user.maxRank && user.maxRank.replace(/ /g,'')}>{`max ${user.maxRating || 0 },${user.maxRank || "unrated"}`}</span>{")"}</h3>
            { (user.city || user.home) && <h3><i className="fas fa-home">: </i>{`${user.city ? user.city : ""}, ${user.country ? user.country : ""}`}</h3> } 
            { user.organization && <h3><i className="fas fa-graduation-cap"></i>: {user.organization ? user.organization : ""}</h3> } 
            <h3><i className="fas fa-star"></i>: {user.contribution} contributions</h3>            
        </div>
        <div className="profile-pic">
        <img src={user.titlePhoto ? user.titlePhoto : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"} alt="profile-pic"/>
        </div>
     </Content>
    </Wrapper>
}

export default User ; 