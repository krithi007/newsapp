import React from "react";
import Header from './header'
import '../styles/welcome.css'
import Clock from "./clock";

export default class Welcome extends React.Component {

    render() {
        return (
            <div>
                <div className='welcome-container'>
                    <blockquote cite="http://www.worldwildlife.org/who/index.html">
                        For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
                    </blockquote>
                    <div className="welcome--content">
                        <article className="all-browsers">
                            <h1>Most Popular Browsers</h1>
                            <article className="browser">
                                <h2>Google Chrome</h2>
                                <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
                            </article>
                            <article className="browser">
                                <h2>Mozilla Firefox</h2>
                                <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
                            </article>
                            <article className="browser">
                                <h2>Microsoft Edge</h2>
                                <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
                            </article>
                        </article>
                        <aside>
                            <h4>Epcot Center</h4>
                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                        </aside>
                    </div>
                    <div>
                        <Clock />
                    </div>

                </div>
            </div>
        )

    }
}