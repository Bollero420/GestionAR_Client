import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import govLogo from '../../../assets/images/GobiernoDeStaFe_image.png';

import { unAuthenticatedRoutes } from '../../../utils/constants';

export const AppContainer = ({ children }: { children: any }) => (
  <div className="h-screen flex overflow-hidden bg-white">
    <main className="flex-1 flex flex-col relative overflow-y-auto focus:outline-none">
      <TopBar />
      {children}
      <BottomBar />
    </main>
  </div>
);

const TopBar = () => {
  const location = useLocation();
  const [redirectLogoUrl, setRedirectLogoUrl] = useState('/');

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    setRedirectLogoUrl(unAuthenticatedRoutes.includes(path) ? '/' : '/main');
  }, [location.pathname]);

  return (
    <div className="flex flex-row w-full bg-blue-400 items-center justify-start h-16 py-4 text-5xl">
      <Link to={redirectLogoUrl} className="flex flex-row items-center">
        <p className="pl-8 font-bold text-black">gestion</p>
        <p className="font-bold text-white">AR</p>
      </Link>
    </div>
  );
};

const BottomBar = () => (
  <div className="flex flex-row justify-between w-full items-center h-24 py-3 px-8 border-t border-solid border-gray-200 mt-auto">
    <div className="pt-2">
      <img alt="Government Logo" src={govLogo} width={300} height={70} />
    </div>
    <div className="text-4xl flex flex-row items-center">
      <p className="font-bold text-black">Argentina</p>
      <p className="pl-1 font-bold text-blue-400">unida</p>
    </div>
  </div>
);
