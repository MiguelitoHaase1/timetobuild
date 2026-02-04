import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PostHogProvider } from '@posthog/react'
import App from './App.tsx'
import { ImpactPrototypes } from './pages/ImpactPrototypes.tsx'
import { PageViewTracker } from './components/analytics'
import { posthogConfig } from './lib/analytics'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={posthogConfig.apiKey}
      options={{
        api_host: posthogConfig.apiHost,
        ...posthogConfig.options,
      }}
    >
      <BrowserRouter>
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/prototype-impact" element={<ImpactPrototypes />} />
        </Routes>
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>,
)
