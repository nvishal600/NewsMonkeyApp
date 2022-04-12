import React from 'react'

const Newsitem = (props) => {
    let  {title, description, imageUrl, newsUrl, author, publish, source} = props;
    return (
        <>
            <div className="card my-2 " style={{width: "18rem"}}>
            <span className="position-absolute badge rounded-pill bg-danger" style={{right:'0'}}>
              {source}
            </span>
                <img src={imageUrl} style={{height: "200px", objectFit: "cover"}} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{ title ? title.slice(0, 40)+"..." : "" }</h5>
                    <p className="card-text">{ description ? description.slice(0, 80)+"..." : "" }</p>
                    <a href = {newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publish).toGMTString()}</small></p>
                </div>
            </div>
        </>
    )
}
export default Newsitem
