let ListComponent = React.createClass({
  render: function(){
     return (
       items: [...this.state.items, {
       label: this.refs.todoText.value,
       done: false
}]
