import React, {useState, useEffect} from 'react';
import API from "../apis/API";
import QuizScore from './QuizScore'

export default function QuizList(props) {
    const [quizzes, setQuizzes] = useState([])

    //GET all quizes from user
    useEffect(()=> {
        API.instance
        .get("/quizzes", { withCredentials: true })
        .then((res) => { 
            //console.log(typeof(res.data))
            setQuizzes(res.data.map( data => <QuizScore type={data.quiz_type} score={data.score} time={data.created_at}/>))
        })
        .catch(error => { console.log(error); });
    }, [])

    return (
        <div>
            {quizzes}
        </div>
    );
}