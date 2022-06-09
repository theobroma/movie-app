import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../@store/configureStore';
import PersistentDrawerLeft from '../@components/AppBar/PersistentDrawerLeft';
import Footer from '../@components/Footer';
import { languageSelector } from '../@store/ui/selectors';
// import ComponentWithProblem from '../@components/WDYR/ComponentWithProblem';

export const AppLayout = () => {
  const currentLanguage = useAppSelector(languageSelector);
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [i18n, currentLanguage]);

  return (
    <div className="HolyGrail">
      <PersistentDrawerLeft>
        <Outlet />
      </PersistentDrawerLeft>
      {/* Test WDYR */}
      {/* <ComponentWithProblem /> */}
      <Footer />
    </div>
  );
};
