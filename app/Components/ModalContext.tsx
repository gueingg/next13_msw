"use client";

import React, { createContext, useContext, useState } from "react";
import cn from 'classnames';
import styled from '@emotion/styled';

const HTag = styled.h1`
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: none;
  &.active{
    display: block;
  }
`;

interface ModalContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const defaultState = {
  isOpen: false,
};
const ModalContext = createContext<Partial<ModalContextValue>>(defaultState);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
}

export function Modal({ children }: { children: React.ReactNode }) {
  let { isOpen, toggle } = useContext(ModalContext);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggle();
  };
  return (
    <>
      <HTag className={cn({active: isOpen === true})}>{children}</HTag>
      <button onClick={handleOnClick}>{isOpen ? "open" : "close"}</button>
    </>
  );
}

export default ModalContext;
