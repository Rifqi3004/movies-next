import React from 'react'
import {SearchOutlined, Notifications} from '@material-ui/icons'

const HeaderBody = () => {
  return (
    <div className="container-headerbody">
      <SearchOutlined style={{fontSize : 25, color : '#525252', marginRight : 20}}/>
      <Notifications style={{fontSize : 25, color : '#525252', marginRight : 20}}/>
      <style jsx>{`
       .container-headerbody {
            display: flex;
            justify-content: flex-end;
            align-items:center;
       }
        .icon-header {
            font-size:25px;
            font-color:#5a5a5a;
        }
        .search {
            margin-right:50px;
        }
      `}</style>
    </div>
  )
}
export default HeaderBody
