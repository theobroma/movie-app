import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import PersistentDrawerLeft from '../@components/AppBar/PersistentDrawerLeft';
import Footer from '../@components/Footer';
import { languageSelector } from '../@store/ui/selectors';
import { alpha2iso } from '../@utils/alpha2iso';
// import ComponentWithProblem from '../@components/WDYR/ComponentWithProblem';

export const AppLayout = () => {
  const currentLanguage = useSelector(languageSelector);
  /* @ts-ignore */
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [i18n, currentLanguage]);

  const langISOCode = alpha2iso(currentLanguage);

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
