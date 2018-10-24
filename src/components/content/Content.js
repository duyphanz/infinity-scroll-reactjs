import React from 'react'



export default class Content extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            page: 1
        }
    }
    

    componentDidMount(){
        document.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (event) => {
        // const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        // if (bottom) { 
        //     console.log('Reached bottom')
        //  }
        // console.log('Bottom: ', bottom, event.target.scrollHeight)
        // console.log('The scroll things: ', event)
        // const wrappedElement = document.getElementById('content');
        
        const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        if(bottom) {
            console.log('Reached bottom')
            this.props.onScrollBottom(this.state.page)
            let increasePage = this.state.page + 1
            this.setState({
                page: increasePage
            })
            console.log('Page content: ', this.state.page)
        } else {
            console.log('Scrolling ...')
        }
       
    }



    render() {
        let {data} = this.props
        // console.log('Content texts: ', data)
        return(
            <div id="content">
                 {data.map( (text, index) => <p key={index}>{text}</p>)}
            </div>
        )
    }
}