// https://www.youtube.com/watch?v=rO2U3eFQ440

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';

export default function ReviewForm(props) {
    let [formData, setFormData] = useState({
        userName: '',
        userReview: '',
        reviewDate: '',
    })

    const handleOnChange = (field, value) => {
        let newFormData = {...formData};
        newFormData[field] = value;
        setFormData(newFormData);
    }

    console.log('render');

    return (
        <Form>
            <Form.Label className="review-form text-dark" >Fill out the information below to submit your review!</Form.Label>

            <input className="form-control mb-1" value={formData['userName']} onChange={e => handleOnChange('userName', e.target.value)} type="text" placeholder="Your Name" name="userName" />
         
            <input className="form-control mb-1" value={formData['userReview']} onChange={e => handleOnChange('userReview', e.target.value)} type="text" placeholder="Your Review" name="userReview" />

            <input className="form-control mb-1" value={formData['reviewDate']} onChange={e => handleOnChange('reviewDate', e.target.value)} type="date" placeholder="Today's Date" name="reviewData" />

            <button className="btn border-secondary bg-secondary text-white form-control mt-3 form-button" type="submit" >Submit Your Review</button>
        </Form>
    )
}
