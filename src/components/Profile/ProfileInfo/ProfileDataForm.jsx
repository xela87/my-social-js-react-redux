import React from "react";
import style from './ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import styles from "../../common/FormsControls/FormControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save </button>
        </div>
        {error && <div className={styles.formSummaryError}>{error}</div>}
        <div><strong>Имя: {<Field  component={Input} placeholder={"Имя"} name={"fullName"}/>}</strong></div>
        <div><strong>Про меня: {<Field  component={Input} placeholder={"Про меня"} name={"aboutMe"}/>}</strong></div>
        <div><strong>Ищу работу: {<Field  component={Input} name={"lookingForAJob"} type={"checkbox"} />}</strong></div>
        <div><strong>Профессиональные навыки {<Field  component={TextArea} placeholder={"Профессиональные навыки"} name={"lookingForAJobDescription"}/>}</strong></div>
        <div>
            <div><strong>Котакты:</strong></div>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={style.contact}>
                    <strong>{key}: {<Field  component={Input} placeholder={key} name={"contacts." + key}/>}</strong>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;

