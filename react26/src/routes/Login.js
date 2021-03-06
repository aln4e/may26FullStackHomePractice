import React, { Component } from 'react'
import Header from '../components/Header'
import {login} from '../actions'
import userStore from '../stores/UserStore'


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      message:""
    }
  }

  handleLogin(){
    this.props.history.push('/')
  }

  componentWillMount(){
    userStore.on('userLoggedIn', this.handleLogin.bind(this))
  }

  handleSubmit(e){
    e.preventDefault()
    login(this.state)
  }

  handleChange(e){
    const target = e.target;
    const user = this.state.user
    user[target.name]=target.value
    this.setState({
      user:user
    })
  }

  render() {
    return (
      <div>
        <Header />

        <div className='col-md-4 col-md-offset-5'>
          <h2 className="App-intro">Welcome! Please Log In Below</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Email</label>
              <input type='text' name='email' value={this.state.user.email} onChange={this.handleChange.bind(this)} />
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type='password' name='password' value={this.state.user.password} onChange={this.handleChange.bind(this)} />
            </div>
            <div className='form-group'>
              <input type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login
