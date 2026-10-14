import React, { Component } from 'react'

class Toggle extends Component {
    state= {
        backgroundColor : "Dark",
        text: "ON",
        btnbgColor : "color"
    }
    mode = ()=>{
        this.setState({backgroundColor: this.state.backgroundColor === "black"?"white":"black"})
    }
    Text = () => {
        this.setState({text:this.state.text==="OFF"?"ON":"OFF"})
    }

  btncolor = () => {
    this.setState({btnbgColor:this.state.btnbgColor === "yellow"?"orange":"yellow"})
  }
  render() {
    return (
      <div style={{backgroundColor:this.state.backgroundColor,height : "100vh"}}>
        <h1 style={{color:'yellow'}}>Toggle</h1>
        <button className='btn btn-danger m-2' onClick={this.mode}>Light/Dark</button>
        <h2 style={{color:'red'}}>{this.state.text}</h2>
        <button className='btn btn-info m-2' onClick={this.Text }>ON/OFF</button>
        <h3 style={{color:'pink'}}>Button Toggle</h3>
        <button onClick={this.btncolor} style={{backgroundColor:this.state.btnbgColor , border:'none', }}>Click</button>
      </div>
    )
  }
}

export default Toggle