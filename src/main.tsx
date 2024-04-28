import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MyThemeProvider } from './theme/ThemeProvider.tsx'
import { SurveyContext } from './state/SurveyContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyThemeProvider>
        <SurveyContext>
            <App/>
        </SurveyContext>
    </MyThemeProvider>
  </React.StrictMode>,
)
