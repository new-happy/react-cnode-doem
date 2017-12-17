import React,{ Component } from 'react'
import './show-topisc.css'
import { Link } from 'react-router-dom'

class ShowTopisc extends Component {
  render () {
    let { data } = this.props
    console.log(data)
    let ShowTopisc =data ? data.map( item =>{
      return (
        <div key={item.id}>
          <Link to={`user/${item.author.loginname}`}><img src={item.author.avatar_url} alt="11"/></Link>
          <span>{item.reply_count}/{item.visit_count}</span>
          <span className={`${(item.top||item.good)&&'active'}`}>{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':'问答'}</span>
          <span><Link to={`/topic/${item.id}`}>{item.title}</Link></span>
        </div>
      )
    }) : '请稍等'
   return (
     <div className="show-topisc">
       { ShowTopisc }
     </div>
   )
  }
}

export default ShowTopisc
