import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { SectionRefs } from '../../types/sections';
import {
  Nav,
  NavLinks,
  ToggleContainer,
  NavLinkButton,
  BurgerButton,
  Backdrop,
  MobileMenu,
  MobileMenuContent,
} from './Navbar.styles';
import { useScrollToSection } from '../../hooks/useScrollToSection';

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

interface NavbarProps {
  sectionRefs: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: keyof SectionRefs) => {
    scrollToSection(sectionRefs[id]);
    setIsOpen(false);
  };

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Nav>
      {/* LEFT */}
      <Logo />

      {/* DESKTOP NAV */}
      <NavLinks>
        {navItems.map((item) => (
          <NavLinkButton
            key={item.id}
            onClick={() => scrollToSection(sectionRefs[item.id as keyof SectionRefs])}
          >
            {item.label}
          </NavLinkButton>
        ))}
      </NavLinks>

      {/* RIGHT */}
      <ToggleContainer>
        <ThemeToggle />
        <LanguageToggle />

        {/* MOBILE BURGER */}
        <BurgerButton onClick={() => setIsOpen((prev) => !prev)}>
          <BurgerIcon style={{ display: isOpen ? 'none' : 'block' }} />
          <CloseIcon style={{ display: isOpen ? 'block' : 'none' }} />
        </BurgerButton>
      </ToggleContainer>

      {/* MOBILE MENU + BACKDROP */}
      {isOpen && (
        <Backdrop onClick={() => setIsOpen(false)}>
          <MobileMenu onClick={(e) => e.stopPropagation()} $isOpen={isOpen}>
            <MobileMenuContent>
              {navItems.map((item) => (
                <NavLinkButton
                  key={item.id}
                  onClick={() => handleNavClick(item.id as keyof SectionRefs)}
                >
                  {item.label}
                </NavLinkButton>
              ))}
            </MobileMenuContent>
          </MobileMenu>
        </Backdrop>
      )}
    </Nav>
  );
};

export default Navbar;
