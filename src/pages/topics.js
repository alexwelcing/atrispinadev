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
                        <h2>Code the Friendly Clouds</h2>
                    </header>
                    <p>Realizing artificial intelligence for calculations and results at the edge requires smart application design, data management and modeling. Only designing distributable systems.</p>
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
                                <h3>Practical Practices</h3>
                            </header>
                            <p>Test Driven Development, Continuous Delivery and Integration, Canary Releases all help developers push new releases at speed with confidence.</p>
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
                                <h3>Why Sales should love Serverless</h3>
                            </header>
                            <p>Generating exciting and reasonably paced paths for legacy and large organizations to adopt and benefit from the latest cloud service announcements. Always willing to chat about Kubernetes, Serverless, and deployment tools like Netlify and Cloud Run.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing