"use client";

import React, { FC } from "react";
import { v4 } from "uuid";
import ModalContext, { Modal } from "../../Components/ModalContext";

interface ButtonProp {
  id?: string | number;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
  as?: string;
}

const Button: FC<ButtonProp> = ({
  id,
  name,
  checked,
  disabled,
  className,
  onClick,
  onChange,
  children,
}) => {
  const inputId = id || v4();

  return (
    <ModalContext.Consumer>
      {({ isOpen, toggle }) => {
        return (
          <div>
            <Modal>{children}</Modal>
          </div>
        );
      }}
    </ModalContext.Consumer>
  );
};

Button.displayName = "Button";
export default React.memo(Button);
