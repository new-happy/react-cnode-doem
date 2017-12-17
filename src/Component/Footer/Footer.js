import React,{ Component } from 'react'
import './footer.css'

class Footer extends Component {
  render () {
   return (
     <div className="footer">
       <div>
         <a href="#">RRS</a>
         <span>|</span>
         <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
       </div>
       <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
       <p>服务器赞助商为  <img src="https://dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="11"/>，
       存储赞助商为  <img src="https://dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="11"/> ，由
       <img src="https://dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="11"/> 提供应用性能服务。</p>
         <p>新手搭建 Node.js 服务器，推荐使用无需备案的
            <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">{`DigitalOcean(https://www.digitalocean.com/)`}</a></p>
     </div>
   )
  }
}

export default Footer
