import React from 'react'
import Image from './image'
import { Link } from 'react-router'

module.exports = React.createClass({

    propTypes: {
        post: React.PropTypes.object.isRequired
    },

    render: function() {
        var featuredImage;
        if(this.props.post.featured_media !== 0){
            featuredImage = <Image imageID={this.props.post.featured_media} postTitle={this.props.post.title.rendered} postID={this.props.post.id} />
        }
        return(
            <div className="single-post" key={this.props.post.id}>
                {featuredImage}
                <h1 className="single-post-title">
                    <Link to={'/single-post-' + this.props.post.id}>
                        {this.props.post.title.rendered}
                    </Link>
                </h1>
                {
                    <div className="single-post-content" dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}} />
                }
            </div>
        )
    }
});