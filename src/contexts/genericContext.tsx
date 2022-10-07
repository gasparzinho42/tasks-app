import React, {createContext, PropsWithChildren, useState} from 'react';

export type GridContextType = {
  temp: string;
};

export const GenericContext = createContext({});
function GenericContextProvider({children}: PropsWithChildren) {
  const [temp, useTemp] = useState<string>('');
  const values = {
    temp,
    useTemp,
  };
  return (
    <GenericContext.Provider value={values}>{children}</GenericContext.Provider>
  );
}

export default GenericContextProvider;
