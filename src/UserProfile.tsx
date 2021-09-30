import * as React from 'react';

interface IUserProfile {
    name: string;
    logoPath: string;
}

export const UserProfile = (props: IUserProfile) => {
    return  (<div className="Memberdiv">
        <button className="btn" >
            <img width="200" height="200" src={props.logoPath} alt="abc" />
            <span><h2>{props.name}</h2></span>
        </button>
    </div>);
}