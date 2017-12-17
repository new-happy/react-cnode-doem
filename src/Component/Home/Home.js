import React,{ Component } from 'react'
import './home.css'

import axios from 'axios'
import ShowTopisc from '../ShowTopisc/ShowTopisc'

class Home extends Component {
  state = {
    data : [],
    tab : 'all'
  }
  showData = (tab)=> {
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab !== 'all'? tab :''}`).then(res => {
      this.setState({
        data:res.data.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }
  componentDidMount() {
  this.showData('all')
  }
  handleClick = (tab) => {
    this.showData(tab)
    this.setState({
      tab : tab
    })
  }
  render() {
    let tabs = [
      {
      tab : 'all',
      text: '全部'
      },
      {
      tab : 'good',
      text: '精华'
      },
      {
      tab : 'share',
      text: '分享'
      },
      {
      tab : 'ask',
      text: '问答'
      },
      {
      tab : 'job',
      text: '招聘'
      }
    ]
    let { data, tab } = this.state
    console.log(data)
    return (
      <div className="home">
        <div className="title">
          {
            tabs.map( (item,i) => {
            return <span key={i} onClick={ ()=> {
                this.handleClick(item.tab)
              }} className={ `${tab === item.tab && 'active'}` }>{item.text}</span>
          }
        )}
        </div>
      <ShowTopisc data={ data }/>
      </div>
    )
  }
}

export default Home
