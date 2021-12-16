import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general'
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=033ef238766340e78f8d33eaf871e79b&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.props.setProgress(100);
  }

  preClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=033ef238766340e78f8d33eaf871e79b&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true})
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState(
      {
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      }
    )
    this.props.setProgress(100);
  }

  nxtClick = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=033ef238766340e78f8d33eaf871e79b&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true})
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    // console.log(this.state.page)
    this.setState(
      {
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      }
    )
    // console.log(this.state.page)
    this.props.setProgress(100);
  }
  render() {
    return (
      <>
        <div className="container my-3 py-3">
          <h1 className="my-3">NewsArena - Today's Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row my-3">
            {!this.state.loading && this.state.articles.map((element) => {
              if (element.title && element.description && element.urlToImage) {
                return <div className="col-md-4 my-4 d-flex justify-content-between" key={element.url}>
                  <NewsItem title={element.title.slice(0, 50)} description={element.description.slice(0, 100)} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name}/>
                </div>
              }
            })}
          </div>
        </div>

        <div className="container d-flex justify-content-between mb-5">
          <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.preClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} onClick={this.nxtClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}

export default News
