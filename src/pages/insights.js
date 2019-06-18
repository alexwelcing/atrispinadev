import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import picmulti from '../assets/images/multi-cloud.gif'
import salesdirector from '../assets/images/salesdirector.jpg'
import devopsengineer from '../assets/images/devopsengineer.jpg'
import seniorproduct from '../assets/images/seniorproduct.jpg'

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
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <p>Sales and Partnerships</p>
                            <span className="image fit"><img src={salesdirector} alt="" /></span>
                        </div>
                        <div className="col-4">
                            <p>Product Management</p><span className="image fit"><img src={seniorproduct} alt="" /></span>
                        </div>
                        <div className="col-4">
                            <p>Development Operations</p><span className="image fit"><img src={devopsengineer} alt="" /></span>
                        </div>
                    </div>
                    <p>Keep up with market rates and align with professional development growth. In order to retain top talent in large markets, look at the roles and responsibilities of those on the team and compare against similar positions in that city.</p>
                    <ul className="actions">
                        <li><a href="https://www.builtinnyc.com/salaries" className="button">Learn more about NYC Technology.</a></li>
                    </ul>
                </div>

            </section>
        </div>

    </Layout>
)

export default Landing