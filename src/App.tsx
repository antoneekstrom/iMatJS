import { useRoutes } from 'raviger';
import React, { useState } from 'react';
import Header from './components/Header';
import { getImatContext } from './hooks/useImat';
import DelayedModelWrapper from './model/DelayedModelWrapper';
import ImatModelFactory from './model/ImatModelFactory';
import ImatModel from './model/types';
import { ROUTES } from './routes';
import AppStyle from './style/App.style';
import GlobalStyle from './style/global.style';
import { products } from '../public/data/products.json'

const { Provider: ImatContextProvider } = getImatContext();

function App() {
   const [model] = useState<ImatModel>(
      new DelayedModelWrapper(ImatModelFactory.clientside(products), [100, 200])
   );

   const Page = () => useRoutes(ROUTES);

   return (
      <ImatContextProvider value={model}>
         <GlobalStyle />
         <AppStyle>
            <Header />
            <Page />
         </AppStyle>
      </ImatContextProvider>
   );
}

export default App;
