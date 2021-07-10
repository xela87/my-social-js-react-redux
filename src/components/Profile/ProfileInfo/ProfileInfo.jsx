import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Proloader/Preloader";
import ProfileStatus from "../ProfileStatus";
import userPhoto from "../../../assets/images/extra-large.jpg";

const ProfileInfo = ({savePhoto, profile, status, updateStatus, isOwner}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={style.description}>
                <img className="mainPhoto"
                    src={profile.photos.large || userPhoto}
                    alt=''/>
                <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
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
