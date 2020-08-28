import React from 'react';
import './Course.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';




const Course = (props) => {
    return (
        <div className="course">
            <div className="image">

                <Image  src={props.course.image} rounded alt="" />
            </div>
            <div className="inf">
                <h4>{props.course.name}</h4>
                <p st>{props.course.inf}</p>
                <h6>Language: {props.course.language}</h6>
                <h6>Instructor: {props.course.instructor}</h6>
                <h4 id="price"><strong>$ {props.course.price}</strong></h4>
                <Button onClick={() =>props.handleEnroll(props.course)} variant="dark">Enroll Now</Button>

            </div>
        </div>
    );
};

export default Course;