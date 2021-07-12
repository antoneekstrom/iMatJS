import { useRoutes } from 'raviger';
import React, { useState } from 'react';
import Header from './components/Header';
import { getImatContext } from './hooks/useImat';
import DelayedModelWrapper from './model/DelayedModelWrapper';
import ImatModelFactory from './model/ImatModelFactory';
import ImatModel from './model/ImatModel';
import { ROUTES } from './routes';
import AppStyle from './style/App.style';
import GlobalStyle from './style/global.style';
import IcaLoader from './model/IcaLoader';
import DAT216Loader from './model/DAT216Loader';

const { Provider: ImatContextProvider } = getImatContext();

function App() {
   const [imat] = useState<ImatModel>(
      new DelayedModelWrapper(
         ImatModelFactory.clientside(DAT216Loader.load()),
         [0, 0]
      )
   );

   const page = useRoutes(ROUTES);
   const Page = () => page;

   (async () => {
      console.log(await (await imat.getCategories()).map(({name}) => name).sort())
   })()

   return (
      <ImatContextProvider value={imat}>
         <GlobalStyle />
         <AppStyle>
            <Header />
            <Page />
         </AppStyle>
      </ImatContextProvider>
   );
}

export default App;
