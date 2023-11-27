import {Actions} from './App.js'

export default function OperationButton({dispatch, operation}){
    return ( <button onClick = {() => dispatch({type: Actions.CHOOSE_OPERATION, payload: {operation}})}>
    {operation}</button>)
}