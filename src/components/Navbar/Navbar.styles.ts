import styled from 'styled-components';
import { media } from '../../styles/themes';

export const Nav = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.navShadow};
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const NavLinks = styled.div`
  display: none;

  @media ${media.fromTablet} {
    display: flex;
    gap: 30px;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavLinkButton = styled.button`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  transition: color 0.25s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const BurgerButton = styled.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }

  @media ${media.fromTablet} {
    display: none;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 70px; /* below header */
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  justify-content: flex-start;
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.background};
  max-height: ${({ $isOpen }) => ($isOpen ? '100vh' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  z-index: 1000;
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;
