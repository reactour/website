import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Link to="/">Home</Link>
    <div id="privacy-policy">
      <h1>Privacy Policy</h1>

      <h3>Data sources</h3>
      We gather data from our signup form.

      <h3>Type of data</h3>
      We gather the applicants email, name, dietary preferences and programming data. The data is supplied by applicant.

      <h3>The legal basis for gathering the data</h3>
      The legal basis for gathering the data is by the consent of the user.

      <h3>3rd parties</h3>
      The data will not be shared with any 3rd parties.

      <h3>Data usage / persistance</h3>
      The data will be used until the event registered for has been held, or 6 months after input (whichever comes first).
      The data will then be destroyed.

      <h3>Rights of the data subject</h3>
      Applicants have right to get, modify or delete their data by informing reacTour at reactour.org@gmail.com.

      <h3>Complaints</h3>
      Applicants can voice their complaints at reactour.org@gmail.com.
    </div>


  </Layout>
)

export default SecondPage
