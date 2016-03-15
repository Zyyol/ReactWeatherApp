import React from 'react'
import { findDOMNode } from 'react-dom'
import SearchBox from '../components/SearchBox'
import { getWeather } from '../utils/helpers'


class SearchBoxContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      city: ''
    }
  }
  handleUpdateCity (e) {
    var city = e.target.value
    this.setState({
      city: city
    })
  }
  handleSubmitCity (e) {
    e.preventDefault()
    this.context.router.push('/forcast/' + this.state.city);
    this.setState({
      city: ''
    })
  }
  render () {
    return (
      <SearchBox
        styles={this.props.styles}
        marginBtn={this.props.marginBtn}
        city={this.state.city}
        onUpdateCity={(event) => this.handleUpdateCity(event)}
        onSubmitCity={(e) => this.handleSubmitCity(e)}
      />
    )
  }
}

SearchBoxContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SearchBoxContainer
