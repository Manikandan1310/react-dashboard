import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Timesheet from '../components/Timesheet'
class Home extends Component {
    constructor(props) {
        super(props)

    }

    

    render() {
        return (
            <div>
                <div className="row row-content dashboard-container">
                    <div className="col-12 col-md-8">
                        TimeSheet
                        <Timesheet/>
                    </div>
                    <div className="col-12 col-md-4">
                        Report
                    </div>
                </div>
                <div className="row row-content dashboard-container">
                    <div className="col-12 col-md-8">
                        To-Do List
                    </div>
                    <div className="col-12 col-md-4">
                        Screenshots
                    </div>
                </div>
            </div>
        )
    }
}

Home.propTypes = {

}

export default Home