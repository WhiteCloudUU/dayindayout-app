import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import Options from './Options'
import AddOptions from './AddOptions'
import OptionsDateFilters from './OptionsDateFilter'
import { setDate, setStartDate, setEndDate } from '../actions/filters'

export class ListViewPage extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
              startDate: undefined,
              endDate: undefined,
              date: moment()
      }

      props.dispatch(setDate(this.state.date));
      props.dispatch(setStartDate(this.state.startDate));
      props.dispatch(setEndDate(this.state.endDate));
    }

    render() {
      return (
        <div>
          <OptionsDateFilters />
          <Options />
          <AddOptions />
        </div>
      )
    }

}

export default connect()(ListViewPage);