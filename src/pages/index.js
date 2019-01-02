import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'

const purpose = `
reacTour is a one-day programming bootcamp for women.
During the day you will implement a fully-working web application using HTML, CSS, JavaScript and React.
You do not need to know anything beforehand, only curiosity is required!
To help you along the way, we've assembled a team of industry professionals who will act as coaches!
`

const when = `
reacTour is held on 23.12.2019 (Saturday). The event will start at 12 and end at around 20. Afterwards, there will be a (very) low-key afterparty!
`

const Where = () => (
  <span>
    The event is hosted by our delightful sponsor, <a href="https://www.wunder.dog/">Wunderdog</a>.
    Their offices are located at Mikonkatu 13 A, 00100 Helsinki.
  </span>
)

const Signup = () => (
  <div>
    <p>
      You can sign up by filling the <a id="signup-link" href="https://docs.google.com/forms/d/e/1FAIpQLSdW397wR7X7bOmTYhntr2chmaRZ-BcOm3HrgovGbVIWN1dkcg/viewform?usp=sf_link">signup form</a>.
      Please note that the amount of participants we can accept is 30, so if you cannot make it,
      please inform us at <a href="mailto:someone@yoursite.com">reactour.org@gmail.com</a>!
    </p>
    <p>
      Before signing up, please review our <Link to="/privacy-policy">privacy policy</Link>.
    </p>
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <div className="row justify-content-md-center frontpage">
        <div className="col-12 col-md-5">
          <Card header="What?" text={purpose} classes="frontpage-cards col-12"/>
          <Card header="When?" text={when} classes="frontpage-cards col-12"/>
          <Card header="Signup" classes="frontpage-cards col-12">
            <Signup />
          </Card>
          <Card header="Where?" classes="frontpage-cards col-12" >
            <Where />
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
