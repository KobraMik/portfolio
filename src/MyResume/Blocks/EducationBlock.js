import React from 'react'
import s from './Block.module.sass'

export const EducationBlock = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={`${s.content} ${s.eduBlocksColor}`}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4>{props.edu.companyName}</h4>

                </div>
                <div className={s.postSubtitle}>
                    faculty of: <span>{props.edu.faculty}</span><br/>
                    from: <span>{props.edu.from}</span> to: <span>{props.edu.to}</span><br/>
                    specialization: <span className={s.specialization}>{props.edu.specialization}</span>
                </div>

            </div>
        </div>
    )
}