import React from 'react'
import default from ItemComponent
import default from ListComponent

class App extends React.Component {

  state = {
    items: []
  }

  _submit = (event) => {
    event.preventDefault()
    this.setState({
    <ListComponent/>
    })
    this.refs.todoText.value = ''
  }

  markComplete (index) {
    const newItems = this.state.items.slice()
    newItems[index].done = !newItems[index].done
    this.setState({ items: newItems })
  }

  render () {

    const items = this.state.items.map((item, i) => {
      <ItemComponent/>
    })

    return <div className="App">
      <header>
        <h1>One List</h1>
      </header>
      <main>
        <ul className="one-list">
          {items}
        </ul>
        <form onSubmit={this._submit}>
          <input type="text" ref="todoText" />
        </form>
      </main>
      <footer>&copy; 2017 Cohort Seven.</footer>
    </div>
  }
}

export default App
