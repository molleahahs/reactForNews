import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//小图标
import './index.less'
import { FormattedMessage  } from 'react-intl';//多语言
import logoImg from '@/assets/img/logo.svg'
let _ = require('lodash')

export default class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:'reactTest1',
			totalProgress: 2038.0,//当前总内存
			curProgress:(Math.random()*100).toFixed(2),//当前使用内存的百分比
			curProgressData: '',//当前使用内存的具体值
			menuList: [//菜单
				{ name: 'headersCollection', url: 'collection', isActive: false },
				{ name: 'headersGet', url: 'get', isActive: true },
				{ name: 'headersSharing', url: 'share', isActive: false },
				{ name: 'headersUploads', url: 'upload', isActive: false },
			]
		};
	}

	cacProgressData() {//计算当前显示的内存GB，保留两位有效数字
		this.setState({curProgressData: (this.state.curProgress * this.state.totalProgress/100).toFixed(2)})
	}

	menuOpen(item) {//改变当前菜单的样式		
		_.forEach(this.state.menuList, function(key, value){
			key.isActive = false;
		})
		item.isActive = true;
		browserHistory.push(item.url)

		this.setState({menuList:this.state.menuList})//不写这句话，页面就没有样式变化
	}

	linkTo(){//默认链接分享给您页面

	}

	componentDidMount() {//初始化就执行的两个函数
		this.cacProgressData();
		this.linkTo();
	}

	render() {
		var _this = this;//绑定this，必须这么写，网上搜的bind和写在prop里都没效，估计是map循环的问题
		//动态样式
		var filledWidth = {
		  width: this.state.curProgress+'%'
		};
	    return (
	        <div>
		      	<div className="header">
		      		<div className="top clear">
		      			<div className="fl size-16 p15 hoverp"><FontAwesomeIcon className="size-16 m5r" icon="chevron-left" />back</div>
		      			<div className="fr p15 hoverp"><FontAwesomeIcon className="size-16" icon="search" /></div>
		      		</div>
		      		<div className="middle p15h m5b clear">
		      			<img src={logoImg} className="avatar m20r fl" />
		      			<div className="fr">
		      				<div className="name font-b size-17 m8b">{this.state.name}</div>
		      				<div className="progress m2b">
		      					<div className="filled" style={filledWidth}></div>
		      				</div>
		      				<div className="status size-10">{this.state.curProgressData}G/{this.state.totalProgress}G {this.state.curProgress+'%'}</div>
		      			</div>
		      		</div>
		      		<div className="menu">
		      			<ul className="clear">
		      				{
		      					this.state.menuList.map(function(item,i){
		      						return (
		      							/*<Link key={i} className={`fl wp25 size-16 p11v hoverp ${item.isActive === true ? "active" : ""}`}  
		      							onClick={ _this.menuOpen.bind(_this,item) } path={item.url}
		      							><FormattedMessage id={item.name} /></Link>*/
		      							<li key={i} className={`fl wp25 size-16 p11v hoverp ${item.isActive === true ? "active" : ""}`}  
		      							onClick={ _this.menuOpen.bind(_this,item) }
		      							><FormattedMessage id={item.name} /></li>
		      						)
		      					})
		      				}
		      			</ul>
		      		</div>
		      	</div>
		      {/*	<router-view/>*/}
	        </div>
	    );
	}
}