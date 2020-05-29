import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'



import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="E-Commerce Example" />
    <div className="Container">
      <div className="Header">
        <div className="Wrap" >
          <div className="Header__body">
            <h1 className="Header__title">
              <Link data-text={site.siteMetadata.siteName} to="/">
                {site.siteMetadata.siteName}
              </Link>
            </h1>
            <div className="Header__summary snipcart-summary snipcart-checkout">
              <div className="Header__summary__title">
                🛍 MY CART 🛍
              </div>
              <div className="Header__summary__line">
                Number of Items: <span className="snipcart-total-items"></span>
              </div>
              <div className="Header__summary__line">
                Total Price: <span className="snipcart-total-price"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="Wrap" >
        {children}
      </div>
      <div className="Wrap" >
        <div className="Footer">
          Developed by <a href="www.ryandixonportfolio.com">Dixon Designs</a>.
        </div>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

