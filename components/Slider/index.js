import React from 'react'
import Swiper from 'react-id-swiper';

class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            param : {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  },
                  spaceBetween: 30
            }
        }
    }
    render(){
        return(
            <Swiper {...this.state.param}>
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
                <div>Slide 4</div>
                <div>Slide 5</div>
            </Swiper>
        )
    }
}
export default Slider
