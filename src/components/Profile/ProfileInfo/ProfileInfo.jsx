import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Proloader/Preloader";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={style.description}>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <img
                    src={!profile.photos.large ? "https://secure.gravatar.com/avatar/16cbecb3875b11c8768a6447671636ff?s=200&d=mm&r=g" : profile.photos.large}
                    alt=''/>
                <p><strong>{profile.fullName}</strong></p>
                <p><strong>Про меня: </strong>{profile.aboutMe}</p>
                <p><strong>Twitter: </strong>{profile.contacts.twitter}</p>
                <p><strong>GitHub: </strong>{profile.contacts.github}</p>
                <p><strong>Ищу работу: </strong>{profile.lookingForAJob ? "Да" : "Нет"}</p>
                <p><strong>Какую работу ищу? </strong>{profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
