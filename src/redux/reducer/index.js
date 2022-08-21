//combineReducers란? 다양한 reducer들을 combineReducer를 통해 rootReducer 하나로 합치기 위함
import{combineReducers} from 'redux';
//import user from './user_reducer';
//import chatRoom from './chatRoom_reducer';

const rootReducer = combineReducers({
    //user,
    //charRoom,
})

export default rootReducer;