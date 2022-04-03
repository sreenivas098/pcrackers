import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Quiz = ({QuizData}) => {

    const [count, setCount ] = useState(0);
    const [err, setErr] = useState([]);
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCount(0);setErr([]);
        const length = QuizData.quiz.length;
        let co = 0;
        let error = []
        for(let i = 0; i < length ; i++){
            const nameV = "q"+i;
            if(QuizData.quiz[i].correct === e.target.elements[nameV].value){ co++; }
            else error.push(i);
        }
        setCount(co);
        setErr(error);
    }

    useEffect(()=>{
        console.log(count)
    }, [count])
  
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            {QuizData && QuizData.quiz.map((item ,index)=>
                <div className='card mb-3' key={index}>
                    <div className='card-body'>
                        <h4>{item.question}</h4>
                        {item.choices.map((val, idx)=>
                            <div className="form-check" key={idx}>
                                <input className="form-check-input" required type="radio" name={`q${index}`} id={idx} value={val}  />
                                <label className="form-check-label" >
                                    {val}
                                </label>
                            </div>
                        )}
                    </div>
                    {count!==0 &&( err.includes(index) ? <div className='card-footer alert alert-danger'>
                       Wrong answer
                    </div> : <div className='card-footer alert alert-success'>
                       Correct Answer
                    </div>) }
                    {show && <div className='card-footer alert alert-success'>
                       {item.correct}
                    </div>}
                </div>
            )}
            <input type="submit" className='btn btn-primary btn-lg'  value="Submit" />
            <input type="reset" className='btn btn-danger btn-lg ml-3' value="Clear" onClick={()=>{setCount(0);setErr([]);}}/>
            <input type="button" className={!show? 'btn-success btn btn-lg ml-3': `btn-secondary btn btn-lg ml-3`} value={!show ? `Answers` : `Hide` } onClick={()=>setShow(!show)}/>
        </form>
    </div>
  )
}
const mapStateToProps = state => ({
    QuizData: state.Quiz
})
export default connect(mapStateToProps, null)(Quiz)