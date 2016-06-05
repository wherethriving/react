import React, { Component, PropTypes } from 'react'
import connect from 'react-redux'
import { Link } from 'react-router'

class NoMatch extends Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        <div>
            <h1>迷路了</h1>
        </div>
    }

}

NoMatch.prototype = {
}

function mapStateToProps(state) {
}

export default connect(
    mapStateToProps
)(NoMatch)
