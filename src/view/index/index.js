/*import React, { Component } from 'react';

import './index.less'

let _ = require('lodash')

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'Wendy1232',
			totalProgress: 2038.0,
			curProgress:(Math.random()*100).toFixed(2),
			curProgressData: '',
			menuList: [
				{ name: 'headers.Collection', url: 'collection', isActive: false },
				{ name: 'headers.Get', url: 'get', isActive: true },
				{ name: 'headers.Sharing', url: 'share', isActive: false },
				{ name: 'headers.Uploads', url: 'upload', isActive: false },
			]
		}
	}

	cacProgressData() {
		this.state.curProgressData = (this.state.curProgress * this.state.totalProgress/100).toFixed(2)
	}

	menuOpen(item) {
		_.forEach(this.state.menuList, function(key, value){
			key.isActive = false;
		})
		item.isActive = true;

	}

	linkTo(){
	}

	componentDidMount() {
		this.cacProgressData();
		this.linkTo();
	}
	
	render() {
	    return (
	        <div>
		      	<div className="header">
		      		<div className="top clear">
		      			<div className="fl size-16 p15 hoverp"><FontAwesomeIcon className="size-16 m5r" icon="fasChevronLeft" />inWallet</div>
		      			<div className="fr p15 hoverp"><FontAwesomeIcon className="size-16" icon="fasSearch" /></div>
		      		</div>
		      		<div className="middle p15h m5b clear">
		      			<img src="@/assets/img/logo.png" className="avatar m20r fl" />
		      			<div className="fr">
		      				<div className="name font-b size-17 m8b">{this.state.name}</div>
		      				<div className="progress m2b">
		      					<div className="filled" style={`width:${curProgress}%`}></div>
		      				</div>
		      				<div className="status size-10">{this.state.curProgressData}G/{this.state.totalProgress}G {this.state.curProgress+'%'}</div>
		      			</div>
		      		</div>
		      		<div className="menu">
		      			<ul className="clear">
		      				{
		      					this.state.menuList.map(function(item,i){
		      						return (
		      							<li key={i} className={`fl wp25 size-16 p11v ${item.isActive === true ? "active" : ""}`} 
		      							onClick="this.menuOpen(item)"
		      							>{item.name}</li>
		      						)
		      					})
		      				}
		      			</ul>
		      		</div>
		      	</div>
		      	<router-view/>
	        </div>
	    );
	}
}*/

import React, { Component } from 'react'

export default class Index extends Component {
	render() {
	    return (
	      <div>index</div>
	    );
	}
}