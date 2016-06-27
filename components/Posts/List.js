import React, { Component, ScrollView, View, RefreshControl } from 'react-native'
import { values, isEmpty } from 'lodash'
import PropTypes from '../../PropTypes'
import ListItem from './ListItem'

export default class List extends Component {

	static propTypes = {
		posts: React.PropTypes.arrayOf( PropTypes.Post ).isRequired,
		onEdit: React.PropTypes.func,
		onView: React.PropTypes.func,
		onTrash: React.PropTypes.func,
		media: React.PropTypes.objectOf( PropTypes.Media ),
	}
	render() {
		var posts = this.props.posts
		return (
			<ScrollView
				refreshControl={
					<RefreshControl
						{...this.props.refreshControl}
					/>
				}>
				{posts.map( post => {
					return (
						<ListItem
							key={post.id}
							post={post}
							featuredMedia={post.featured_media ? this.props.media[ post.featured_media ] : null}
							onEdit={this.props.onEdit.bind(this,post)}
							onView={this.props.onView.bind(this,post)}
							onTrash={this.props.onTrash.bind(this,post)}
							/>
					)
				} ) }
			</ScrollView>
		)
	}
}
