import React, { Component } from 'react'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as loggedIn from '../../actions/action.loggedIn'

import InputField from '../Elements/Input-field/'
import Button from '../Elements/Button/'

import './styles.scss'

const config = {
    apiKey: "AIzaSyAws_hTWdOXxFGDxIhIdHRsbvwL2yGYvsY",
    authDomain: "banner-editor.firebaseapp.com",
    databaseURL: "https://banner-editor.firebaseio.com",
    projectId: "banner-editor",
    storageBucket: "banner-editor.appspot.com",
    messagingSenderId: "952340148614"
  };
  firebase.initializeApp(config);
  
const auth = firebase.auth();

class Login extends Component {
	constructor() {
		super();
		this.state = {
			fNameVal: '',
			lNameVal: '',
			emailVal: '',
			passVal: '',
			newUser: false,
			login: true,
			error: ''
		};
		this.toggleLogin = this.toggleLogin.bind(this)
		this.createUser = this.createUser.bind(this)
		this.loginUser = this.loginUser.bind(this)
		this.changeFName = this.changeFName.bind(this)
		this.changeLName = this.changeLName.bind(this)
		this.changeEmail = this.changeEmail.bind(this)
		this.changePass = this.changePass.bind(this)
	}
	changeFName(e) {
		this.setState({fNameVal: e.target.value})
	}
	changeLName(e) {
		this.setState({lNameVal: e.target.value})
	}
	changeEmail(e) {
		this.setState({emailVal: e.target.value})
	}
	changePass(e) {
		this.setState({passVal: e.target.value})
	}
	createUser() {
		this.setState({newUser: true})
		const promise = auth.createUserWithEmailAndPassword(this.state.emailVal, this.state.passVal)
		promise.catch(e => this.setState({error: e.message}))
	}
	loginUser() {
		this.setState({newUser: false})
		const promise = auth.signInWithEmailAndPassword(this.state.emailVal, this.state.passVal)
		promise.catch(e => this.setState({error: e.message}))
	}
	toggleLogin() {
	    this.setState({login: !this.state.login})
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				this.props.changeLogin.LoggedInTrue()
				console.log('auth checked - user logged in - new user ' + this.state.newUser)
				console.log(this.props.store.loggedIn)
				console.log(firebaseUser)
				if(this.state.newUser) {
					firebaseUser.updateProfile({
						displayName: this.state.fNameVal + ' ' + this.state.lNameVal
					})
					firebase.database().ref().child('users').child(firebaseUser.uid).child('userDetails').update({
						firstName: this.state.fNameVal,
						lastName: this.state.lNameVal,
						email:firebaseUser.email,
					})
				}
			}
			else {
				this.props.changeLogin.LoggedInFalse()
				console.log('auth checked - user logged out')
				console.log(this.props.store.loggedIn)
			}
		})
	}
	render() {
		return (
			<div className="login">
				<div className="login__wrap">
					<div className="login__component">
						{ !this.state.login &&
							<div>
								<InputField type="text" desc="First name" placeholder="" event={this.changeFName} value={this.state.fNameVal}/>
								<InputField type="text" desc="Last name" placeholder="" event={this.changeLName} value={this.state.lNameVal}/>
							</div>
						}
						<InputField type="email" desc="Email" placeholder="" event={this.changeEmail} value={this.state.emailVal}/>
						<InputField type="password" desc="Password" placeholder="" event={this.changePass} value={this.state.passVal}/>
						{ this.state.login &&
							<div>
								<Button type="attention" event={() => this.loginUser()} text="Login" hasIcon="false" icon="" modify="button--center button--full"/>
								<p className="login__trigger" onClick={() => this.toggleLogin()}>{'Sign up'}</p>
							</div>
						}
						{ !this.state.login &&
							<div>
								<Button type="submit" event={() => this.createUser()} text="Sign up" hasIcon="false" icon="" modify="button--center button--full"/>
								<p className="login__trigger" onClick={() => this.toggleLogin()}>{'Login'}</p>
							</div>
						}
						<p className="login__error">{this.state.error}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(store => (
	{
		store: store
	}),
	(dispatch) => ({
		changeLogin: bindActionCreators(loggedIn, dispatch),
	})
)(Login);