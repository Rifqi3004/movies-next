import React from 'react'
import {HomeOutlined, GridOffOutlined, ShareOutlined, BarChart, AccountBoxOutlined, 
    DynamicFeedOutlined, FileCopyOutlined} from '@material-ui/icons'
import {Grid, Link} from '@material-ui/core'
import { connect } from 'react-redux'
import {openMenu as clickMenu} from '../../redux/actions/nav'
import colors from '../../tools/colors'
import {withRouter} from 'next/router'


const Menu = (props) => {
    const {router} = props
    const path = router.pathname
    const {page} = props.nav
    const openMenu = (nav) => {
        props.dispatch(clickMenu(nav))
    }
    const dataMenu = [{
            title : 'Home',
            page : '/',
            icon : <HomeOutlined style={{color:(path === '/')? colors.orangePrimary : colors.purplePrimay, fontSize:18, marginRight:15}}/>
        },{
            title : 'Browse',
            page : '/browse',
            icon : <GridOffOutlined style={{color:(path === '/browse')? colors.orangePrimary : colors.purplePrimay,fontSize:18, marginRight:15}}/>
        },{
            title : 'Category',
            page : '/category',
            icon : <ShareOutlined style={{color:(path === '/category')? colors.orangePrimary : colors.purplePrimay, fontSize:18, marginRight:15}} />
        },{
            title : 'Trending',
            page : '/trending',
            icon : <BarChart style={{color:(path === '/trending')? colors.orangePrimary : colors.purplePrimay, fontSize:18, marginRight:15}}/>
        },{
            title : 'Profile',
            page : '/profile',
            icon : <AccountBoxOutlined style={{color:(path === '/profile')? colors.orangePrimary : colors.purplePrimay, fontSize:18, marginRight:15}}/>
        }
    ]

    const LocalMenu = [{
        title : 'Recently Played',
        page : '/recently',
        icon : <DynamicFeedOutlined style={{color:(path === '/recently')? colors.orangePrimary : colors.purplePrimay, fontSize:18, marginRight:15}}/>
    },{
        title : 'Local Storage',
        page : '/local',
        icon : <FileCopyOutlined style={{color:(path === '/local')? colors.orangePrimary : colors.purplePrimay, fontSize:18, marginRight:15}}/>
    }]

  return (
    <div className="container-menu">
      <div className="logo">
          MOVIE
      </div>
      <Grid container justify="center" style={{display:'inline-block'}}>
        {
            dataMenu.map((value) => (
                <Grid key={value.title} item xs={12} sm={12} lg={12} xl={12}>
                    <Link href={value.page} color="inherit" onClick={()=>openMenu(value.page)} underline="none">
                        <div className="item-menu">
                            {value.icon}
                            <p className="title-menu" style={{color : (path === value.page)? colors.orangePrimary : colors.purplePrimay}}>{value.title}</p>
                        </div>
                    </Link>
                </Grid>
            ))
          }
          <div className="item-menu">
            <p className="span-menu">My Movie</p>
          </div>
          {
            LocalMenu.map((value) => (
                <Grid key={value.title} item xs={12} sm={12} lg={12} xl={12}>
                    <Link href={value.page} color="inherit" onClick={()=>openMenu(value.page)} underline="none">
                        <div className="item-menu">
                            {value.icon}
                            <p className="title-menu" style={{color : (path === value.page)? colors.orangePrimary : "#a1a1a1"}}>{value.title}</p>
                        </div>
                    </Link>
                </Grid>
            ))
          }
      </Grid>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');
        .container-menu {
            display:inline-block;
            flex-direction:column;
            text-align: center;
            background:#ffffff;
            height : 100%
        }
        .logo {
            margin-bottom:40px;
            font-weight:bold;
            font-size:20px;
            font-family: Poppins;
            display: inline-block;
        }
        .menu {
            justify-content:center;
            text-align: center;
            display: inline-block;
        }
        .item-menu {
            display:flex;
            flex-direction:row;
            align-items:center;
            margin-left:35px;
        }
        .title-menu {
            font-size:14px;
            font-family: Poppins;
            font-weight:bold;
        }
        .icon-menu {
            color:#a1a1a1;
            text-align:center;
            font-size:18px;
            margin-right:15px;
        }
        .span-menu {
            color: #a1a1a1;
            font-size:14px;
            font-family: Poppins;
            font-weight:400;
            margin-top: 20px;
            margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}

Menu.propTypes = {
    
}

const mapStateToProps = (state) => ({
    auth : state.auth,
    nav : state.nav
  })
  

export default connect(mapStateToProps)(withRouter(Menu))
