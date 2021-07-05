import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Proloader/Preloader";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
  return (
    <div>
      <div className={style.description}>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
          <img src={props.profile.photos.large} alt=''/>
          <p><strong>{props.profile.fullName}</strong></p>
          <p><strong>Про меня: </strong>{props.profile.aboutMe}</p>
          <p><strong>Twitter: </strong>{props.profile.contacts.twitter}</p>
          <p><strong>GitHub: </strong>{props.profile.contacts.github}</p>
          <p><strong>Ищу работу: </strong>{props.profile.lookingForAJob?"Да":"Нет"}</p>
          <p><strong>Какую работу ищу? </strong>{props.profile.lookingForAJobDescription}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
