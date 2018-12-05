import React from 'react'

import Layout from '../components/layout'
import Card from '../components/card'

const IndexPage = () => (
  <Layout>
    <Card header="Card 1" text="Card 1 text"/>
    <Card header="Card 2" text="Card 2 text"/>
    <Card header="Card 3" text="Card 3 text" last/>
  </Layout>
)

export default IndexPage
