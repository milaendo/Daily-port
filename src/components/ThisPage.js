import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class ThisPage extends Component {
	render () {
	return (
		<div>
		<Link to="/Contacts">Contact</Link>
		</div>
	)
	}
}
export default ThisPage