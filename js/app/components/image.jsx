import React from 'react'
import jQuery from 'jquery'
import { Link } from 'react-router'

module.exports = React.createClass({

    propTypes: {
        imageID: React.PropTypes.number.isRequired,
        postTitle: React.PropTypes.string.isRequired,
        postID: React.PropTypes.number.isRequired
    },

    getInitialState: function() {
        return{
            image: []
        }
    },

    componentDidMount: function() {
        var self = this;
        var apiUrl = rest_data.api_url;

        if( this.props.imageID !== 0 ) {
            jQuery.get(apiUrl + '/wp/v2/media/' + this.props.imageID).done( function(data) {

                self.setState({image: data})
            });
        }
    },

    render: function() {
        return(
            <Link to={'/single-post-' + this.props.postID} className="single-post-featured-image">
                <img src={this.state.image.source_url} alt={this.props.postTitle} />
            </Link>
        )
    }
});