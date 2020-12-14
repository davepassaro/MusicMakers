import React, {useState, useEffect} from 'react';
import CustomScale from './CustomScale'
import API from "../apis/API";

export default function CustomScaleList(props) {
    const [user_scales, setScales] = useState([])

    //Takes response array from GET /scales and converts it into
    //format easier for React to deal with
    const formatResponse = array => {
        const formatted_array = []
        let name = null
        let index = 0
        while(index < array.length){
            //If names dont match, push new object to formatted array
            if(array[index].name != name){
                formatted_array.push({
                    name: array[index].name,
                    created_at: array[index].created_at,
                    notes: [{
                        note: array[index].note,
                        priority: array[index].priority,
                        octave: array[index].octave
                    }]
                })
                name = array[index].name
            }
            //If name matches last name, push notes only to last
            else if(name != null){
                formatted_array[formatted_array.length - 1].notes.push({
                    note: array[index].note,
                    priority: array[index].priority,
                    octave: array[index].octave
                })
            }
            index++
        }
        return formatted_array
    }
    //GET all scales from user
    useEffect(()=> {
        API.instance
        .get("/scales", { withCredentials: true })
        .then((res) => { 
            const grouped_scales = formatResponse(res.data)
            setScales(grouped_scales.map(scale => <CustomScale name={scale.name} created={scale.created_at} notes={scale.notes}/>)) 
        })
        .catch(error => { console.log(error); });
    }, [])

    return (
        <div>
            {user_scales}
{/*             <div className="text-center p-3">
                <a onClick={() => handlePagination()} className="text-dark text-decoration-none">Show more <b className="caret"></b></a>
            </div> */}
        </div>
    )
}