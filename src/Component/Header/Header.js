import React,{ Component } from 'react'
import './header.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
  state = {
    userInfo : null,
    show : false,
    token :''
  }
  handleChange = (e) => {
    this.setState({
      token : e.target.value
    })
  }
  componentDidMount() {
    if( sessionStorage.token === '286395c5-04bd-432b-b2ac-2747b533b2b1'){
      axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:sessionStorage.token})
      .then(res => {
        this.setState({
          userInfo : res.data,
          show : true
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  handleClick = () => {
    const { token } = this.state
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token})
    .then(res => {
      sessionStorage.token = token
      this.setState({
        userInfo : res.data,
        show : true
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  handleLogout = () => {
    sessionStorage.clear('token')
    this.setState({
      userInfo : null,
      show : false,
      token :''
    })
    this.props.history.push('/')
  }
  render () {
    const { userInfo, show, token } =this.state
   return (
     <div className="header">
       <div className="header-a">
        <Link to='/'><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/></Link>
           {
             show ? (<div className="login-out">
              <Link to='/topic/create'>发布文章</Link>
               <Link to={`/user/${userInfo.loginname}`}><img src={ userInfo.avatar_url} alt="11"/></Link>
               <button onClick={ this.handleLogout}>退出</button>
             </div>) :( <div className="login">
               <input type="text" value={ token} onChange={ this.handleChange}/>
                <button onClick={this.handleClick}>登录</button>
             </div>)
           }
       </div>
     </div>
   )
  }
}

export default withRouter(Header)
