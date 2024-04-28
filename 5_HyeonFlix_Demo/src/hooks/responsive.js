import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  });
  return <>{ isMobile && children }</>
}

// export const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({
//     query: "(max-width: 1023px)"
//   });
//   return <>{ isTablet && children }</>
// }

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)"
  });
  return <>{ isDesktop && children }</>
}