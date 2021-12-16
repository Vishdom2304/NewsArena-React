import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={4}
        />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/category/Business" element={<News setProgress={this.setProgress}  key='business' pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/category/Entertainment" element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/category/General" element={<News setProgress={this.setProgress}  key='general' pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/category/Sports" element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/category/Science" element={<News setProgress={this.setProgress}  key='science' pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/category/Technology" element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pageSize} country="in" category="technology" />} />
            <Route path="/category/Health" element={<News setProgress={this.setProgress}  key='health' pageSize={this.pageSize} country="in" category="health" />} />
          </Routes>
          <Footer/>
        </Router>
      </>
    )
  }
}
