import React from 'react'
import OptionsFilter from './OptionsFilter'
import Options from './Options'
import AddOptions from './AddOptions'

export class ListViewPage extends React.Component {
    
    render() {
      return (
        <div>
          <OptionsFilter />
          <Options />
          <AddOptions />
        </div>
      )
    }

}