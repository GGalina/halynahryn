import styled from 'styled-components';

export const LanguageWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;

export const LanguageButton = styled.button`
  background-color: ${({ theme }) => theme.secondtext};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 20px;
  padding: 6px 12px;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.secondtext};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background-color: ${({ theme }) => theme.secondtext};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1000;
  min-width: 20px;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.secondtext};
  }
`;
