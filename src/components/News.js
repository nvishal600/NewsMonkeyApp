import React, { useEffect,useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;


  const  newsUpdate = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(50);
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(80);
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(()=>{
    newsUpdate();
  },[]);

  const fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResult(parseData.totalResults);
  }

    return (
      <>
          <h1 style={{marginTop:"100px"}} className='text-center'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}  //true or false
            loader={<Spinner/>}
            >
            <div className='container'>
              <div className='row my-4 d-flex justify-content-center'>
                  {articles.map((element) => {
                      let {title, url, urlToImage, description, publishedAt, author, source} = element;
                      return  <div className='col-md-4 d-flex justify-content-center' key = {url}>
                                  <Newsitem title = {title} description = {description} imageUrl = {urlToImage} newsUrl = {url} author={author} publish={publishedAt} source={source.name}/>
                              </div>
                  })}
              </div>
            </div>
          </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;