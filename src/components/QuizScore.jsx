import React from 'react';

export default function QuizScore(props) {

    return (
        <div className="list-group">
            <div className="list-group-item d-flex align-items-center">
                <div className="flex-fill pl-3 pr-3">
                    <div><a href="#" className="text-dark font-weight-600">{props.type}</a></div>
                    <div className="text-muted fs-13px">{props.time}</div>
                </div>
                <div className="text-muted fs-13px">{props.score}</div>
            </div>
        </div>
    );
}