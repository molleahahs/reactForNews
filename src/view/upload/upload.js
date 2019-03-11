import React, { Component } from 'react';
import { Link } from 'react-router'
import './upload.less'

export default class Upload extends Component {
	constructor(props) {
		super(props);
	}
	render() {
	    return (
	        <div className="clear wrapper">
	        	<ul className="fl lmenu m20r co-white">
	        		<li><Link activeClassName='active' className="hoverp" to={'upload1'}>upload1</Link></li>
	        		<li><Link activeClassName='active' className="hoverp" to={'upload2'}>upload2</Link></li>
	        	</ul>
		        <div className="fl rcon alignl">{this.props.children}</div>
		        
	        </div>

	    );
	}
}