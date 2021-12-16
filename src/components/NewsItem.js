import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, date, source} = props;
    return (
      <div className="card" style={{width: "20rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '80%', zIndex: 1}}>{source}</span>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}<strong>...</strong></h5>
        <p className="card-text">{description}<strong>...</strong></p>
        <p className="text-info">- {new Date(date).toGMTString()}</p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read Full Article</a>
        </div>
      </div>
    )
  
}

export default NewsItem
