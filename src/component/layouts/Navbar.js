// used react snippet 'rce' to get this basic format of the file
import React, { Component } from 'react'
// used react snippet 'impt' to get this basic line for proptypes
import PropTypes from 'prop-types'


export class Navbar extends Component {
// we can add default props which will show in case user has now passed any props.
static defaultProps = {
    titleName: 'Github Finder',  // these names should be same as props names used
    logo: 'fab fa-github'
}

// propTypes are used to kind of check the datatype, which means the datatype is same or not as required
static propTypes= {
    titleName: PropTypes.string.isRequired,
    logo:PropTypes.string.isRequired
}

    render() {
             return (
            <nav className ='navbar bg-primary'>
            <h1>
                <i className= {this.props.logo }> </i> {this.props.titleName}
                {/* this is the way to add props inside the class and (this) is used to access the props inside the class*/}
            </h1>
            </nav>
        )
    }
}

export default Navbar
