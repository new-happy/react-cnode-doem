import React,{ Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './showtop.css'

class ShowTop extends Component {
  state = {
    data : null,
    content:''
  }
  componentDidMount() {
  const { id } = this.props.match.params
  axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res =>{
    this.setState({
      data : res.data.data
    })
  })
  }
  handalChange = (e) => {
    this.setState({
      content:e.target.value
    })
  }
  handleClick = () => {
    if (sessionStorage.token === '286395c5-04bd-432b-b2ac-2747b533b2b1'){
      const { id } = this.props.match.params
      const data = {
        accesstoken: sessionStorage.token,
        content: this.state.content
      }
      axios.post(`https://cnodejs.org/api/v1/topic/${id}/replies`, data).then(res => {
        console.log(res)
        this.setState({
          content: ''
        })
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
          this.setState({
            data: res.data.data
          })
        })
      })
        .catch(err => {
          alert(err)
        })
    }
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
      <div className="panel">
        <h2>添加回复</h2>
        <textarea value={this.state.content} onChange={this.handalChange}></textarea>
        <button onClick={this.handleClick}>回复</button>
      </div>
     </div>
   )
  }
}

export default ShowTop
