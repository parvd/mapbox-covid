import React, { Component } from 'react';
import {fetchDataIN} from './api/index';
import {Cards,Chart,Country} from './component/index';
import {Typography} from '@material-ui/core';
import styles from './App.module.css';
import covid from './component/Image/covid19_logo.png'
import chain from './component/Image/github-logo.png';
class App extends Component {
  state ={
    data1:{},
    mystate:''
  }

  async componentDidMount(){
    const dataIn = await fetchDataIN();
    this.setState({
      data1:dataIn,
    })
  }
  handleStateChange = async(mystate) => {
    this.setState({
      mystate:mystate
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <Typography variant="h3" color="primary">India Statistics</Typography>
        <img className={styles.image} src={covid} alt="Covid-19"/>
        <Cards data={this.state.data1}/>
        <Country handleStateChange={this.handleStateChange}/>
        <Chart mystate={this.state.mystate}/>
        <a href="https://github.com/parvd">
        <img src={chain} alt="Link" />
        </a>
      </div>
 
    );
  }
}

export default App;
