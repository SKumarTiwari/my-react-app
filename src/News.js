import React, { Component } from 'react'
import { NewsItems } from './NewsItems'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b895b9791c146668ebfb3e141b970b8";
        let data = await fetch(url);
        let parsed = await data.json();
        // console.log([parsed]);
        this.setState({ articles: parsed.articles })
    }

    // handlePrevClick = () => {

    // }

    // handleNextClick = () => {

    // }

    render() {
        return (

            <div className='container my-3'>

                {/* <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand">Top HeadLines</a>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav> */}

                <h1>Top Head Lines</h1>
                <div className='row'>

                    {this.state.articles.map((element) => {

                        return <div className='col-md-4' key={element.url}>
                            <NewsItems title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />

                        </div>
                    })}
                </div>

                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" class="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

            </div>
        )
    }
}

export default News