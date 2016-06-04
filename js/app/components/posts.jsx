import React from 'react'
import jQuery from 'jquery'
import Post from './post'

module.exports = React.createClass({

    getInitialState: function() {
        return{
            posts: []
        }
    },

    componentWillMount: function() {
        var self = this;
        var apiUrl = rest_data.api_url;

        jQuery.get( apiUrl + '/wp/v2/posts' ).done( function( data ) {
            self.setState( {posts: data} )
        });
    },

    render: function() {
        if( !this.state.posts.length ) {
            return(
                <div className="loading">Loading...</div>
            )
        }
        return(
            <div className="posts">
                {
                    this.state.posts.map(function (post) {
                        return <Post key={post.id} post={post} />
                    })
                }
            </div>
        )
    }
})