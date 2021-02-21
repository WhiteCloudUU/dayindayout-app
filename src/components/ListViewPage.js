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
      
      props.dispatch(setDate(moment()));
      props.dispatch(setStartDate(undefined));
      props.dispatch(setEndDate(undefined));
      
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