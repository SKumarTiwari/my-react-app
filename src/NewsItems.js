import React, { Component } from 'react'
export class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className='card' style={{width:"18rem"}}>
                    <img src={!imageUrl?'https://img.etimg.com/thumb/msid-107152716,width-1200,height-630,imgsize-17964,overlay-etmarkets/photo.jpg':imageUrl} className='card-img-top' alt='' />
                    <div className='card-body'>
                        <h5 className='card-title'>{title}...</h5>
                        <p className='card-text'>{description}... </p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className='btn btn-sm btn-primary'>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems