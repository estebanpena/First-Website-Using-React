import React, { Component } from 'react';
import 'tachyons';
import '../css/landingpage.css';

class Home extends Component {
    render () {
        return(
            <div className="main">
                <div className="col">
                    <div className="pa0">
                        <div className="wrapping-banner">
                            <p className="banner-container">searchbox?.</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="tc mt2 w-100 f-subheadline-l lh-copy lh-title-l measure fw6">Example Websiste</h1>
                    </div>
                    <div className="tc pa0">
                        <p>worry less about the backend and more about the frontend</p>
                    </div>
                    <div>
                        <div>
                            <img src="https://memegenerator.net/img/images/15998360/angry-pepe-with-gun-is-crying.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;