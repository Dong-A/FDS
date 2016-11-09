import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var TextAreaCounter = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.string,
  },
  getDefaultProps: function(){
    return {
      text: '',
    };
  },
  render: function(){
    return React.DOM.div(null,
    React.DOM.textarea({
      defaultValue: this.props.text,
      onChange: this._textChange
    }),
    React.DOM.h3(null, this.props.text.length)
   );
  },
  getInitialState: function(){
   return{
     text: this.props.defaultValue
   };
  },
  _textChange: function(ev){
   this.setState({
     text: ev.target.value
   });
 }
})

var myTextAreaCounter = ReactDOM.render(
  React.createElement(TextAreaCounter, {
    text: 'Bob',
  }),
  document.getElementById('root')
)
