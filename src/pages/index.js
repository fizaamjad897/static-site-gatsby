import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";  // Make sure this points to your Seo component

const HomePage = ({ data }) => (
  <main>
    <Seo 
      title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
    />
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
  </main>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default HomePage;
