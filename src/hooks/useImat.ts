import React, { useContext } from 'react';
import ImatModelFactory from '../model/ImatModelFactory';
import ImatModel from '../model/ImatModel';

const imatContext = React.createContext<ImatModel>(
   ImatModelFactory.clientside([])
);
imatContext.displayName = 'iMat';

export function getImatContext() {
   return imatContext;
}

/**
 * @returns iMat model
 */
export function useImat() {
   return useContext(getImatContext());
}
