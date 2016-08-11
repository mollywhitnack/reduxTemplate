//const createCourse = createcourse.. this would require you to refrence so put actions in seperate file 
import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';


export function loadAuthorsSuccess(authors){
  //right hand side matehces left hand side, couse: course
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
  return function (dispatch){
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors =>{
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error =>{
      throw(error);
    }); //returns a promise
  };

}