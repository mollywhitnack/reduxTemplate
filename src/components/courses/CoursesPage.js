import React , {PropTypes} from 'react';
//import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
const CourseList = require('./CourseList');
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
}
  courseRow(course, index){
    return <div key = {index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render(){
    const {courses} = this.props;
    return (
      <div >
        <h1>Courses</h1>
        <input type = "text"
               value = "Add Course"
               className = "btn btn-primary"
               onClick = {this.redirectToAddCoursePage} />
        <CourseList courses = {courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,  //no longer injected since mapdispatch to props
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//state is state in redux store
function mapStateToProps(state, ownProps){
  //debugger;
  return {
    courses: state.courses  //because called couses in index reducer
  };
}

//determines what actions are avialble in our component
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)    //createCourse: (course) => dispatch(courseActions.createCourse(course))
  };
}

//mapDispatchToProps is optional, without will automatically have a dispatch property connected to it

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);








