import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div>
                tham so url: {this.props.match.params.postID}
            </div>
        )
    }
}
