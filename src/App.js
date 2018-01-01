import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from './actions'
import moment from 'moment'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CalendarStrip from 'react-native-calendar-strip'
import locale from './calendarLocale'

const array = [
  {
    '_id': '5a47a3d3e93a608010cf4e45',
    'title': 'Утро',
    'subtitle': 'Зарядка',
    'start': '09-00',
    'end': '12-00',
    'img': 'https://careyyogaandnutritiondotcom.files.wordpress.com/2016/03/shutterstock_304371809.jpg?w=840',
    'info': 'Cамостоятельно',
    'masterlink': 'Сам',
    'days': [
      '2018-01-01',
      '2018-01-02',
      '2018-01-03'
    ]
  },
  {
    '_id': '5a47a363e93a608010cf4e44',
    'title': 'Вечер',
    'subtitle': 'Бег',
    'start': '18-00',
    'end': '20-00',
    'img': 'http://pohudet.info/sites/all2/images/beg-po-utram.jpg',
    'info': 'C преподователем',
    'masterlink': 'Магруф Хатхеевич',
    'days': [
      '2018-01-01',
      '2018-01-02',
      '2018-01-04',
      '2018-01-06'
    ]
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.props.getTodayEvents = this.props.getTodayEvents.bind(this)
  }

  componentDidMount() {
    this._getStudioEventsData()
  }

  _getStudioEventsData = async () => {
    this.props.getStudioEventsData(array)
  }

  fetchEvents(date) {
    const formatDate = date.format("YYYY-MM-DD")
    _.find(this.props.dataEvents, function(value, key) {
      if (key === formatDate) {
        const today = (key, value)
        console.log('today', today)
        //this.props.getTodayEvents(today)
      }
    })
  }
  
  _renderItem(data) {
    const { start, title, subtitle } = data.item
    return (
      <View style={styles.container}>
        <View style={styles.data}>
          <Text style={styles.dataText}>{start}</Text>
        </View>
        <View style={styles.subcontainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.hallText}>Зал: {subtitle}</Text>
        </View>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Detail') }>
          <Icon style={styles.chevron} name="chevron-right" size={50} color="#DBD7D2" />
        </TouchableOpacity>
      </View>
    )
  }

  _keyExtractor = (item) => {
    return item._id
  }

  render() {
    const datesWhitelist = [{
      start: moment(),
      end: moment().add(30, 'days') 
    }]

    return (
      <View>
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: 'rgba(0, 191, 255, 0.5)' }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: 'black', paddingTop: 5 }}
          calendarColor={'white'}
          dateNumberStyle={{ color: 'black' }}
          dateNameStyle={{ color: 'black' }}
          highlightDateNumberStyle={{ color: 'white' }}
          highlightDateNameStyle={{ color: 'white' }}
          disabledDateNameStyle={{ color: 'grey' }}
          disabledDateNumberStyle={{ color: 'grey' }}
          datesWhitelist={datesWhitelist}
          locale={locale}
          iconLeft={require('./img/left-arrow-black.png')}
          iconRight={require('./img/right-arrow-black.png')}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={(date) => this.fetchEvents(date)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    marginRight: 5,
    marginTop: 5,
    alignItems: 'center'
  },
  data: {
    alignSelf: 'center'
  },
  dataText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '400',
    fontSize: 18,
    color: 'gray'
  },
  titleText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '300',
    fontSize: 17,
    color: 'gray'
  },
  masterText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '400',
    fontSize: 18
  },
  hallText: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '300',
    fontSize: 14,
    color: 'gray'
  },
  subcontainer: {
    flex: 1,
    paddingLeft: 10
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  chevron: {
    justifyContent: 'flex-end',
    alignSelf: 'center'
  }
})

export default connect(state => ({ dataEvents: state.calendar.dataEvents }), actions)(App)
