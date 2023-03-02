import { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')

  const enterTextHandler = (event) => {
    setText(event.target.value)
  }

  const reset = (event) => {
    event.preventDefault()
    setText('')
  }

  return (
    <div className="container border-radius">
      <form className="border-radius">
        <label className="text">Enter Your Text</label>
        <input
          className="border-radius text-center"
          type="text"
          placeholder="Enter Your Text Here"
          onChange={enterTextHandler}
          value={text}
        />
        <p className="entered-text border-radius text-center">{text}</p>
        <button className="btn border-radius" onClick={reset}>
          Delete Text
        </button>
      </form>
    </div>
  )
}

export default App
