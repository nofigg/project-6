import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FluidSimulation from './FluidSimulation';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <FluidSimulation />
      <div className="relative mx-auto max-w-3xl flex-1 px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-6 sm:py-8 md:py-10 lg:py-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
