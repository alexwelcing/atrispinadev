import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import picmulti from '../assets/images/multi-cloud.gif' 

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Best of all worlds - GCP/Azure/AWS</title>
            <meta name="description" content="All Clouds" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Technology</h2>
                    </header>
                    <p>Compete on technical merit by staying up to date in tools and methods of work.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={picmulti} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mission</h3>
                            </header>
                            <p>Embrace social responsibilities and sustainable practices, including fair developer treatment, investing in opensource, and a commitment to shipping products that improve the lives of others.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Compensation</h3>
                            </header>
                            <p>Keep up with market rates and align with professional development growth. In order to retain top talent in large markets, look at the roles and responsibilities of those on the team and compare against similar positions in that city.</p>
                            <ul className="actions">
                                <li><a href="https://www.builtinnyc.com/salaries" className="button">Learn more about NYC Technology.</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing