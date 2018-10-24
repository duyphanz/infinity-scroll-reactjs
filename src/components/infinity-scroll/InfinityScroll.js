import React from 'react'

const texts = [
    '1/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '2/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '3/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '4/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '5/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '6/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '7/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '8/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '9/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
    '10/ Shewing met parties gravity husband pleased. On to no kind do next feel held walk. Last own loud and knew give four. Sentiments motionless or principles preference excellence am. Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. Chamber reached do he nothing be.',
]

export function scrollInfinity (WrappedComponent){
    return class extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                texts
            }
        }

        getText = (page) => {
            console.log('Page: ', page)
            let temp = []
            for(let i = 0; i < page; i++)
            {
                temp = temp.concat(texts)
                temp = temp.concat(`Page: ${page}`)
            }
            this.setState({
                texts: temp
            })
            console.log('New texts: ', temp)
            console.log('New state texts: ', this.state.texts)
        }

        render(){
            return <WrappedComponent data={this.state.texts} {...this.props} onScrollBottom={(page) => {this.getText(page)}}/>
        }
    }
}