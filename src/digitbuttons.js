import {Actions} from './App.js'

export default function DigitButton({dispatch, digit}){
    return <button onClick = {() => dispatch({type: Actions.ADD_DIGIT, payload: {digit}})}>
        {digit}</button>
}