import {Todo} from './type';
import {v1 as uuid} from 'uuid';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const CREATE_TODO = 'CREATE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_T0D0  = 'TOGGLE_T0D0';
const SELECTED_TODO = 'SELECTED_TODO';

//Actions and Actions types

interface CreateToDoActionType {
    type: typeof CREATE_TODO,
    payload: Todo
}

export const CreateToDoActionCreator = ({desc}: {
    desc: string;
}): CreateToDoActionType => {
    return {
        type: CREATE_TODO,
        payload: {
            id: uuid(),
            desc,
            isComplete: false
        }
    }
}

interface EditToDoActionType {
    type: typeof EDIT_TODO;
    payload: {id: string, desc: string}
}

export const EditToDoActionCreator = ({id, desc}: {
    id: string, desc: string
}): EditToDoActionType => {
    return {
        type: EDIT_TODO,
        payload:{
            id,
            desc
        }
    }
}

interface ToggleToDoActionType {
    type: typeof TOGGLE_T0D0,
    payload: {id: string, isComplete: boolean}
}

export const ToggleToDoActionCreator = ({id, isComplete}: {
    id: string, isComplete: boolean
}) : ToggleToDoActionType  => {
    return{
        type: TOGGLE_T0D0,
        payload: {id, isComplete},
    }
}

interface DeleteToDoActionType {
    type: typeof DELETE_TODO,
    payload: {id: string}
}

export const DeleteToDoActionCreator = ({id}: {id: string}): DeleteToDoActionType => {
    return{
        type: DELETE_TODO,
        payload: {id},
    }
}

interface SelectToDoActionType {
    type: typeof SELECTED_TODO,
    payload: {id: string}
}

export const SelectToDoActionCreator= ({id}: {id: string}): SelectToDoActionType => {
    return {
        type: SELECTED_TODO,
        payload: {id},
    }
}

//Reducer

const todosInitialState: Todo[] = [
    {
      id: uuid(),
      desc: "Learn React",
      isComplete: true
    },
    {
      id: uuid(),
      desc: "Learn Redux",
      isComplete: true
    },
    {
      id: uuid(),
      desc: "Learn Redux-ToolKit",
      isComplete: false
    }
  ];

type ToDoActionTypes = CreateToDoActionType | EditToDoActionType | DeleteToDoActionType | ToggleToDoActionType

const TodoReducer = (
    state: Todo[] = todosInitialState,
    action: ToDoActionTypes
) => {
    switch(action.type){
        case CREATE_TODO:{
            return [...state, action.payload]
        }
        case EDIT_TODO:{
            return state.map(todo => todo.id === action.payload.id? {...todo, desc: action.payload.desc} : todo)
        }
        case TOGGLE_T0D0:{
            const {payload} = action
            return state.map(todo => todo.id === action.payload.id? {...todo, isComplete: payload.isComplete} : todo)
        }
        case DELETE_TODO:{
            return state.filter(todo => todo.id !== action.payload.id)
        }
        default: {
            return state
        }
    }
}

type SelectedToDoActionTypes = SelectToDoActionType;
const selectedToDoReducer = (
    state: string | null = null,
    action: SelectedToDoActionTypes
) => {
    switch(action.type){
        case SELECTED_TODO:{
            return action.payload.id
        }
        default: {
            return state;
        }
    }
}

const counterReducer = (
    state: number = 0,
    action: ToDoActionTypes
) => {
    switch (action.type) {
        case CREATE_TODO:{
            return state +1;
        }
        case EDIT_TODO:{
            return state +1;
        }
        case DELETE_TODO:{
            return state +1;
        }
        case TOGGLE_T0D0:{
            return state +1;
        }
        default: return state;
    }
}

const reducers = combineReducers({
    todos: TodoReducer,
    selectedTodo: selectedToDoReducer,
    counter: counterReducer
});

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, logger))
    );

