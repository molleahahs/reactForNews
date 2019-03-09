import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './get.less'
import logoImg from '@/assets/img/logo.svg'

export default class Get extends Component {
	constructor(props) {
		super(props);
	}
	render() {
	    return (
	        <div className="list">
	      		<div className="item flexc-sb">
	      			<div className="flexc-s">
	      				<img src="logoImg" className="imgtype m20r" />
	      				<div className="info alignl">
	      					<div className="name size-14 black333">Documents</div>
	      					<div className="size size-14 gray999">77KB</div>
	      				</div>
	      			</div>
	      			<FontAwesomeIcon className="size-16" icon="bars" />
	      		</div>
	      	</div>
	    );
	}
}

/*import React, { Component } from 'react'

export default class Get extends Component {
	render() {
	    return (
	      <div>get</div>
	    );
	}
}
*/