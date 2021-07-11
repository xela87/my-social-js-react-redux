import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Proloader/Preloader";
import ProfileStatus from "../ProfileStatus";
import userPhoto from "../../../assets/images/extra-large.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({savePhoto, saveProfile, profile, status, updateStatus, isOwner}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {setEditMode(false)})
    }

    return (
        <div>
            <div className={style.description}>
                <img className="mainPhoto"
                     src={profile.photos.large || userPhoto}
                     alt=''/>
                <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData toEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={toEditMode}>Edit</button>
        </div>}
        <p><strong>{profile.fullName}</strong></p>
        <p><strong>Про меня: </strong>{profile.aboutMe}</p>
        <p><strong>Ищу работу: </strong>{profile.lookingForAJob ? "Да" : "Нет"}</p>
        {profile.lookingForAJob &&
        <p><strong>Какую работу ищу? </strong>{profile.lookingForAJobDescription}</p>
        }
        <div>
            <div><strong>Котакты:</strong></div>
            {Object.keys(profile.contacts).map(key => {
                if (profile.contacts[key]) {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }
                return null
            })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <p className={style.contact}><strong>{contactTitle}: </strong>{contactValue}</p>
}

export default ProfileInfo;
