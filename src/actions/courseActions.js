//const createCourse = createcourse.. this would require you to refrence so put actions in seperate file 
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
 
export function loadCoursesSuccess(courses){
  //right hand side matehces left hand side, couse: course
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function updatedCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function creatCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}


//thunk
export function loadCourses(){
  return function (dispatch){
    dispatch( beginAjaxCall() );
    return courseApi.getAllCourses().then(courses =>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(error =>{
      throw(error);
    }); //returns a promise
  };
}

//thunk
export function saveCourse(course){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse =>{
      course.id ? dispatch(updatedCourseSuccess(savedCourse)) :
      dispatch(creatCourseSuccess(savedCourse));
    }).catch(error =>{
      dispatch(ajaxCallError(error))
      throw(error);
    });
  };
}