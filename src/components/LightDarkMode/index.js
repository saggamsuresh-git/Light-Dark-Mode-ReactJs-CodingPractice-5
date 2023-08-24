// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    let bgClass
    let buttonText
    if (isDarkMode === true) {
      bgClass = 'DarkMode-bg'
      buttonText = 'Light Mode'
    } else {
      bgClass = 'LightMode-bg'
      buttonText = 'Dark Mode'
    }
    return (
      <div className="bg-container">
        <div className={bgClass}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.changeMode} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
