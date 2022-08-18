import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { OrdersContextProvider } from './contexts/OrderContext'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'


export function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client ={client}>
        <BrowserRouter>
          <OrdersContextProvider>
            <Router/>
          </OrdersContextProvider>
        </BrowserRouter>
      </ApolloProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}


