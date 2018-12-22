import React from 'react'

import Layout from '../components/layout'
import Card from '../components/card'

// TODO: scale cards
const IndexPage = () => (
  <Layout>
    <div className="row">
      <Card header="Card 1" text="Card 1 text" classes="col-12 col-md-4"/>
      <Card header="Card 2" text="Card 2 text" classes="col-12 col-md-4"/>
      <Card header="Card 3" text="Card 3 text" classes="col-12 col-md-4" />
    </div>
  </Layout>
)

export default IndexPage
