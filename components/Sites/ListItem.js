import React, {Component} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import PropTypes from '../../PropTypes'
import Icon from 'react-native-vector-icons/FontAwesome'
import ConfirmButton from '../ConfirmButton'

export default class ListItem extends Component {
	static propTypes = {
		site: React.PropTypes.object.isRequired,
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.text}>
					<Text style={styles.title}>{this.props.site.name}</Text>
					<Text style={styles.url}>{this.props.site.url}</Text>
				</View>
				<Icon name="chevron-right" style={styles.chevron} size={22} color="#BBBBBB" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 44,
		padding: 10,
	},
	text: {
		marginLeft: 5,
	},
	title: {
		fontSize: 16,
	},
	url: {
		color: '#999999',
		fontSize: 12,
		lineHeight: 12,
	},
})
