import React from "react";
import PropTypes from "prop-types";
import MetaTags from 'react-meta-tags';

// import Stringifier from "../components/Stringifier";

import CMSComponent from "./CMSComponent";

const CMSPage = ({ seo, components }) => {
  
   //Setting the robots polictics
  const robots = []
  if (seo.noFollow)
    robots.push("noFollow");
  if (seo.noIndex)
    robots.push("noIndex");



  return (
    <div className="page">
     
      <MetaTags>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keyworks" content={seo.keywords} />
        <meta name="keyworks" content={seo.keywords} />
        <meta name="robots" content={robots.join(',')} />
        <link rel="canonical" href={seo.canonicalUrl} />
      </MetaTags>
          
      {components.map((component, index) => {
      const { type, ...props } = component;
        // props are all properties of component except type
      return (        
          <CMSComponent key={`component${index}`} type={type} {...props} />
      );
        
        
      })}
    </div>
  );
};

CMSPage.propTypes = {
  seo: PropTypes.object,
  components: PropTypes.array.isRequired
};

export default CMSPage;
