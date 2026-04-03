import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import HomePage from './pages/Home'
import FloridaPage from './pages/Florida'
import CaliforniaPage from './pages/California'
import VisaPage from './pages/Visa'
import VisaSinglePage from './pages/VisaSingle'
import EvisasPage from './pages/Evisas'
import EvisasSinglePage from './pages/EvisasSingle'
import BlogPage from './pages/Blog'
import BlogSinglePage from './pages/BlogSingle'
import ContactPage from './pages/Contact'
import PassportVisaPhotoServicesPage from './pages/PassportVisaPhotoServices'
import PassportSinglePage from './pages/PassportSingle'
import PassportFastSinglePage from './pages/PassportFastSingle'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/florida" element={<FloridaPage />} />
          <Route path="/california" element={<CaliforniaPage />} />
          <Route path="/visa" element={<VisaPage />} />
          <Route path="/visa/:slug" element={<VisaSinglePage />} />
          <Route path="/evisas" element={<EvisasPage />} />
          <Route path="/evisas/:slug" element={<EvisasSinglePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogSinglePage />} />
          <Route path="/passport/new-passport" element={<PassportSinglePage />} />
          <Route path="/passport/passport-renewal" element={<PassportSinglePage />} />
          <Route path="/passport/child-passport" element={<PassportSinglePage />} />
          <Route path="/passport/name-change" element={<PassportSinglePage />} />
          <Route path="/passport/lost-passport" element={<PassportSinglePage />} />
          <Route path="/passport/damaged-passport" element={<PassportSinglePage />} />
          <Route path="/passport/passport-card" element={<PassportSinglePage />} />
          <Route path="/passport/new-passport-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/passport-renewal-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/child-passport-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/name-change-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/lost-passport-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/damaged-passport-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/passport-card-fast" element={<PassportFastSinglePage />} />
          <Route path="/passport/:slug" element={<PassportSinglePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/passport-visa-photo-services"
            element={<PassportVisaPhotoServicesPage />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
