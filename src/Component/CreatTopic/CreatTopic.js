import React,{ Component } from 'react'
import axios from 'axios'
import './creat-topic.css'

class CreatTopic extends Component {
  state = {
    title:'',
    content:''
  }
  handaleTitle = (e) => {
    this.setState({
      title:e.target.value
    })
  }
  handaleChange = (e) => {
    this.setState({
      content:e.target.value
    })
  }
  handleSubmit = () => {
    const data = {
      accesstoken:sessionStorage.token,
      title:this.state.title,
      content:this.state.content,
      tab:'dev'
    }
    axios.post('https://cnodejs.org/api/v1/topics',data)
    .then(res=>{
      this.setState({
        title:'',
        content:''
      })
      this.props.history.push(`/topic/${res.data.topic_id}`)
    })
    .catch(err=>{
      alert(err)
    })
  }
  render () {
   return (
     <div className="CreatTopic">
       题目:<input type="text" placeholder="标题字符 10 个以上" value={this.state.title} onChange={this.handaleTitle}/><br/>
      <textarea value={this.state.content} onChange={this.handaleChange}></textarea><br/>
       <button onClick={this.handleSubmit}>提交</button>
     </div>
   )
  }
}

export default CreatTopic
