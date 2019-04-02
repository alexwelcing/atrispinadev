import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Multi-Cloud </title>
            <meta name="description" content="Now exiting Earth's atmosphere." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Multi-Cloud for everyone.</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <h2 id="content">Benefit from the cutting edge sooner</h2>
     <p>Number one cost of technical debt = falling behind so you do not benefit from modern trends and instead have to pay additional fees to support legacy systems.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
