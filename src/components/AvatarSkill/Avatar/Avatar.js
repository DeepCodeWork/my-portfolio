import React from 'react';
import image from '../../../assets/images/avatar.jpg'

const Avatar = (props) => {
    return (
        <div>
            <div className = "card">
                <div className = "card-body">
                    <img src={image}></img>
                </div>
            </div>
        </div>
    );
}

export default Avatar;