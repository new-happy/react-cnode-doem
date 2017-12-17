import React,{ Component } from 'react'
import axios from 'axios'
import './user-info.css'
import { Link } from 'react-router-dom'

class UserInfo extends Component {
  state = {
    userinfo : null
  }
  getUserInfo = (loginname) => {
    axios.get(`https://cnodejs.org/api/v1/user/${loginname}`).then(res =>{
      this.setState({
        userinfo : res.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidMount() {
    const { loginname } =  this.props.match.params
    this.getUserInfo(loginname)
  }
  componentWillReceiveProps(nextProps) {
   const { loginname } =  nextProps.match.params
   this.getUserInfo(loginname)
  }
  render () {
    const { userinfo } = this.state
    const info = userinfo ? (
      <div className="details">
        <div className="information">
        <img src={userinfo.avatar_url} alt="11"/>
        <span>{userinfo.loginname }</span>
        <p>{userinfo.score} 积分</p>
        </div>
        <div>
          <h2>最近创建的话题</h2>
          {
            (userinfo.recent_topics.length >5 ?
               userinfo.recent_topics.slice(0,5) :
                userinfo.recent_topics).map(item => {
              return <div key={item.id}>
                <img src={item.author.avatar_url} alt="11"/>
              <Link to={`/topic/${item.id}`}>{ item.title}</Link>
              </div>
            })
          }
        </div>
        <div>
          <h2>最近参与的话题</h2>
            {
              userinfo.recent_replies.map(item => {
                return <div key={item.id}>
                  <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt=""/></Link>
                  <Link to={`/topic/${item.id}`}>{ item.title}</Link>
                </div>
              })
            }
        </div>
      </div>
    ) : '请稍等'
   return (
     <div className="user-info">
       { info }
     </div>
   )
  }
}

export default UserInfo
