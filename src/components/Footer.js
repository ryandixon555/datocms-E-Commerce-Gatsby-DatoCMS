import React from 'react'
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
   
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            datoCmsSite {
              globalSeo {
                siteName
              }
              faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
              }
            }
            datoCmsHome {
                copyright
            }
            allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
              edges {
                node {
                  profileType
                  url
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <div className="container__footer">
              <div className="footer">
                <p className="footer__social">
                  {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                    <a
                      key={profile.profileType}
                      href={profile.url}
                      target="blank"
                      className={`social social--${profile.profileType.toLowerCase()}`}
                    >
                      {" "}
                    </a>
                  ))}
                </p>
                <div className="footer__copyright">
                  {data.datoCmsHome.copyright}
                </div>
              </div>
            </div>
          </div>
        )}
      />
    );
  };
  
Footer.propTypes = {
    children: PropTypes.object
};

export default Footer;