import React, { Component } from 'react';

import Icon from '../icon'

class LibraryCourse extends Component {
    render () {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/*arrow component*/}
                {/*action component*/}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia ut lorem vel posuere. Aenean viverra faucibus fringilla. Aliquam fermentum lectus nec porttitor convallis. Cras sollicitudin lorem luctus nunc convallis, non congue quam vestibulum.</p>
                </div>
            </div>
        )
    }
}
export default LibraryCourse;