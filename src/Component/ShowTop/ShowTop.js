import React,{ Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './showtop.css'

class ShowTop extends Component {
  state = {
    data : null
  }
  componentDidMount() {
  const { id } = this.props.match.params
  axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res =>{
    this.setState({
      data : res.data.data
    })
  })
  }
  render () {
    const { data } = this.state
    const article = data ? (
      <div className="article">
        <div className="content">
        <h2>{data.title}</h2>
        <div className="content-a">
          <span>发布于:{data.create_at}</span>
          <span>浏览量:{data.visit_count}</span>
        </div>
        <div dangerouslySetInnerHTML={ {__html: data.content} } />
        </div>
        <div className="replies">
          <h2>全部回复</h2>
          {
            data.replies.map(item => {
              return <div key={item.id}>
              <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="11"/></Link>
              <Link to={`/user/${item.author.loginname}`}><span>{item.author.loginname}</span></Link>
                <div dangerouslySetInnerHTML={ {__html: item.content} } />
              </div>
            })
          }
        </div>
      </div>
    ) : '请稍等'
   return (
     <div className="show-top">
      { article }
     </div>
   )
  }
}

export default ShowTop
