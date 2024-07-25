import React, { useReducer } from 'react'

const initialstate ={Count:0};
const reducer=(currstate,action)=>{
    switch(action.type){
        case 'Increment':
            return {Count:currstate.Count+1}
            case 'Decrement':
                return {Count: currstate.Count-1}
                case'reset':
                    return {Count:0}

    }   
}
const UseReduce = () => {
const[state,dispatch]=useReducer(reducer,initialstate)

  return (
    <>
    <p>count:{state.Count}</p>
     <button onClick={()=>dispatch({type:'Increment'})}>Incremnet</button>
     <button onClick={()=>dispatch({type:'Decrement'})}>decrement</button>
     <button onClick={()=>dispatch({type:'reset'})}>reset</button>
     </>
  )
}

export default UseReduce