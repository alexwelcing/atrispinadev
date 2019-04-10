import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Atrispina development"
                    meta={[
                        { name: 'description', content: 'DevOps, plant power.' },
                        { name: 'keywords', content: 'DevOps, Cloud, Google Cloud Platform, Netlify, React' },
                    ]}
                    >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>(i) Systems</h3>
                                <p>Major functions including the rules we follow, tools we use, and field we work.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>(ii) Purpose</h3>
                                <p>Define the end objective within the constraints of the system.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>(iii) Strategy</h3>
                                <p>Principles that guide step by step progress towards success.</p>
                            </header>
                            <Link to="/insights" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>(iv) Actions</h3>
                                <p>The tactics and work activities that are needed to drive the strategy.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>(v) Tools</h3>
                                <p>Provide the monitoring and capacity for the (iv) actions to ensure they are chosen (iii) strategically to arrive at the (ii) objective in the (i) system!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Backcasting</h3>
                                <p>What do we need to do today to reach that successful outcome?</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>A-B-C-D Approach</h2>
                            </header>
                            <p>A = Awareness and Visioning <br />
                                B = Baseline Mapping <br />
                                C = Creative Solutions<br />
                                D = Deciding on Priorities</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex