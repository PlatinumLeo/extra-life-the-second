// Based on: https://thoughtspile.github.io/2021/10/04/react-context-dangers/

import React, { createContext, useLayoutEffect, useMemo, useState } from 'react';
import { useTheme } from '@material-ui/styles';

export const SizeContext = createContext({});
export const BreakpointContext = createContext({});

const selectBreakpoint = (theme, width) => {
  let result = theme.breakpoints.keys[0];

  for(let i = 1; i < theme.breakpoints.keys.length; i++) {
    if (width >= theme.breakpoints.values[theme.breakpoints.keys[i]]) {
      result = theme.breakpoints.keys[i];
    }
  }

  return result;
};

const AdaptivityProvider = ({ children }) => {
  const theme = useTheme();
  const [dimensions, setDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  const onResize = () => {
    setDimensions({width: window.innerWidth, height: window.innerHeight});
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const breakpoint = selectBreakpoint(theme, dimensions.width);

  const sizeContext = useMemo(() => (dimensions), [dimensions]);
  const breakpointContext = useMemo(() => (breakpoint), [breakpoint]);
  
  return (
    <SizeContext.Provider value={sizeContext}>
      <BreakpointContext.Provider value={breakpointContext}>
        {children}
      </BreakpointContext.Provider>
    </SizeContext.Provider>
  );
};

export default AdaptivityProvider;
