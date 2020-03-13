import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import SliderCardMovie from '../CardMovie/SliderCardMovie'
import {connect} from 'react-redux'
import {GetNowPlaying} from '../../redux/actions/movie'
import {LinearProgress, Link, Fab} from '@material-ui/core'
import {ArrowForwardIos as Arrow} from '@material-ui/icons'
import colors from '../../tools/colors';

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            scroll : 0
        }
        // this.scroll = this.scroll.bind(this)
        this.scrollRight = this.scrollRight.bind(this)
        this.scrollLefts = this.scrollLefts.bind(this)
    }
    componentDidMount(){
        this.props.dispatch(GetNowPlaying())
    }
    scrollRight(){
        this.refs.boxSlide.scrollLeft += 500
        this.setState({
            scroll : this.refs.boxSlide.scrollLeft
        })
    }
    scrollLefts(){
        this.refs.boxSlide.scrollLeft -= 500
        this.setState({
            scroll : this.refs.boxSlide.scrollLeft
        })
    }
    
    render(){
        const {nowPlaying, isLoadingNowPlaying} = this.props.movie
        return(
            <>
            {
                isLoadingNowPlaying ?
                <LinearProgress style={{width : '100%'}} color="primary"/> :
                <div className="box-slider" ref="boxSlide" >
                     {
                        (nowPlaying.results)&&
                            (nowPlaying.results.length > 0) &&
                             nowPlaying.results.map(value => (
                                <div className="item-slider">
                                    <Link color="inherit" underline="none">
                                        <SliderCardMovie data={value} />
                                    </Link>
                                </div>
                            ))
                        
                    }
                    <Fab size="small" style={{
                        background : 'rgba(255, 255, 255, 0.78)', position : 'absolute', top : 200, left : 350,
                        display : this.state.scroll < 500 &&'none',
                        transform : 'translateY(-50%)', msTransform : 'translateY(-50%)', margin : 0
                    }}><Arrow style={{fontSize : 18, color : colors.blackPrimary,transform : 'rotateY(180deg)'}} onClick={this.scrollLefts} /></Fab>

                    <Fab size="small" style={{
                        background : 'rgba(255, 255, 255, 0.78)', position : 'absolute', top : 200, right : 50,
                        transform : 'translateY(-50%)', msTransform : 'translateY(-50%)', margin : 0
                    }}><Arrow style={{fontSize : 18, color : colors.blackPrimary}} onClick={this.scrollRight} /></Fab>
                    
                </div>

            }
            <style jsx>{`
                .box-slider {
                    overflow: auto;
                    overflow-y: hidden;
                    white-space: nowrap;
                    padding-bottom : 30px;
                    postion: relative;
                }
                .item-slider {
                    display: inline-block;
                    margin-right : -370px;
                }
            `}</style>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    movie : state.movie
})

export default connect(mapStateToProps)(Slider)
