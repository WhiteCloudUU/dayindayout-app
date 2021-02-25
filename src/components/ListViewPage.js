import React from 'react'
import { connect } from 'react-redux'

import Options from './Options'
import AddOptions from './AddOptions'
import OptionsDateFilter from './OptionsDateFilter'

export class ListViewPage extends React.Component {

    render() {
      return (
        <div>
          <OptionsDateFilter />
          <Options from={"ListViewPage"} />
          <AddOptions />
        </div>
      )
    }

}

export default connect()(ListViewPage);