import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SystemLanding from '../components/SystemLanding'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Systems = (props) => (
    <Layout>
        <Helmet>
            <title>Systems.</title>
            <meta name="description" content="Systems Page" />
        </Helmet>

        <SystemLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Key Partners</h2>
                    </header>
                    <p>These can be external groups that function as suppliers, clients that need our services, or internal stakeholders like the partners. What key activities do these people perform?</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Key Activities</h3>
                            </header>
                            <p>In order for us to deliver our value proposition, what activities do we need to take?.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Details on activities.</Link></li>
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
                                <h3>Key Resources</h3>
                            </header>
                            <p>Intellectual property, talent, and investment resources all count. What can we leverage to deliver our value?</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Value propositions</h3>
                            </header>
                            <p>What customer problem do we solve? What bundles of products and services are offered? How well do we satisfy their need?</p>
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

export default Systems