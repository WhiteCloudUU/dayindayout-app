import React from 'react'
import ReactDOM from 'react-dom'

class IndecisionApp extends React.Component {

    render() {
        const options = ["abc", "def", "ghi"];

        return (
            <div>
                <h1>IndecisionApp</h1>
                <Options options={options}/>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => (
                    <Option optionText={option} key={option} />
                ))}
            </div>
        )
        
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
