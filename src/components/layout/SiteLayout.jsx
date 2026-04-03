import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function SiteLayout() {
  return (
    <div className="overflow-hidden">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default SiteLayout
