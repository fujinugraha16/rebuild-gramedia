import React from "react";
import ContentLoader from "react-content-loader";

const bookLoader = (props) => (
  <ContentLoader
    speed={3}
    width={430}
    height={267}
    viewBox="0 0 430 267"
    backgroundColor="#cecece"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="7" rx="11" ry="11" width="150" height="230" />
    <rect x="186" y="17" rx="8" ry="8" width="225" height="20" />
    <rect x="187" y="58" rx="5" ry="5" width="50" height="12" />
    <rect x="187" y="86" rx="5" ry="5" width="128" height="15" />
    <rect x="188" y="118" rx="5" ry="5" width="100" height="12" />
    <rect x="187" y="147" rx="10" ry="10" width="110" height="25" />
  </ContentLoader>
);

export default bookLoader;
