import React from 'react'

module.exports = React.createClass({

    propTypes: {
        post: React.PropTypes.object.isRequired
    },

    render: function() {
        return(
            <div className="single-post" key={this.props.post.id}>
                <h1>{this.props.post.title.rendered}</h1>
            </div>
        )
    }
});