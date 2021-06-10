import React from 'react'
import { connect } from 'react-redux'

import Options from './Options'
import AddOptions from './AddOptions'
import OptionsDateFilter from './OptionsDateFilter'

export default class ListViewPage extends React.Component {

    render() {
      return (
        <div>
          <OptionsDateFilter />
          <Options />
          <AddOptions />
        </div>
      )
    }

}


