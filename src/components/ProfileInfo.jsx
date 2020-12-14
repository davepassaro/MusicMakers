import React from 'react';

export default function ProfileInfo(props) {

    return (
        <div className="profile-sidebar">
            <div className="desktop-sticky-top">
                <h4>Hi {props.email}!</h4>
                <span id="profile">
                    Welcome! Use this page to review previous quiz scores and created custom scales!<br></br> 
                    Don't have any custom scales? Head on over to the <i>Create Scales</i> page to get started! <br></br>
                    Haven't taken any quizzes? Well study up and head over to the <i>Quiz</i> page to test your musical knowledge!<br></br>
                </span>
                <hr className="mt-4 mb-4" />
            </div>
        </div>
    )
}