import React from 'react'
import Forcast from '../components/Forcast'
import { getWeather } from '../utils/helpers'

class ForcastContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      cityData: {}
    }
  }
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  }
  async makeRequest (city) {
    const data = await getWeather(city)
    this.setState({
      isLoading: false,
      cityData: data
    })
  }
  handleClickDetail (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    });
  }
  render () {
    return (
      <Forcast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        cityData={this.state.cityData}
        onClickDetail={(weather) => this.handleClickDetail(weather)}
      />
    )
  }
}

ForcastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ForcastContainer;
