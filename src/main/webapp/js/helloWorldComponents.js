// domElement is a shortcut for creating elements like 
// <div> or instances of Reactjs components like MyList
var domElement = React.createElement;

//create a new Reactjs component MyList
var MyList =  React.createClass({
  render: function(){
    var list = this.props.data.map(function(text, index){
      return domElement('li', {key:index }, text)
    })
    return (
            domElement('ul', null, list)
    )
  }
})

//create Reactjs component HelloWorldBanner that uses MyList
var HelloWorldBanner =  React.createClass({
  render: function(){
    return (
            domElement('div', null, 
                domElement('h1', null, 'This is a...'),
                domElement(MyList, {data:['Spring','Boot','Reactjs','project']})
      )
    )
  }
})