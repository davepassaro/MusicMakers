import React from 'react';
import QuizList from './QuizList'
import CustomScaleList from './CustomScaleList'

export default function ProfileLists(props) {

   return (
    <div className="profile-content">
        <div className="row">
            <div className="col-xl-12">
                <div className="tab-content p-0">
                    <div className="tab-pane fade active show" id="profile-followers">
                        {props.list == "Quiz" ? <QuizList /> : <CustomScaleList />}
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}