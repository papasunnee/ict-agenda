import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import 'isomorphic-fetch'

import withData from '../lib/withData'
import Head from './head';
import Footer from './Footer/Footer';
import Scripts from './Scripts';



export default function withLayout(Child) {
  class WrappedComponent extends React.Component {
    static async getInitialProps(context) {
      let ChildProps = {};

      if (Child.getInitialProps) {
        ChildProps = await Child.getInitialProps(context)
      }
      return {
        ...ChildProps
      }
    }

    render() {
      return (
        <div>
          <Head />  
          <Child {...this.props}/>
          <Footer />
          <Scripts />
        </div>
      )
    }
  }
  return withData(WrappedComponent)
}
