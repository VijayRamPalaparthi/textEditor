import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, EditText} from './styledComponent'
import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickBold = () => {
    this.setState(prev => ({bold: !prev.bold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({italic: !prev.italic}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({underline: !prev.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state
    return (
      <div className="bg-container">
        <div className="body-container">
          <div className="left-container">
            <h1 className="heading"> Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="right-container">
            <ul className="buttons-container">
              <li>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  active={bold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  active={italic}
                >
                  <GoItalic size={25} />
                </Button>
              </li>

              <li>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  active={underline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <EditText
              cols="50"
              rows="40"
              bold={bold}
              italic={italic}
              underline={underline}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
