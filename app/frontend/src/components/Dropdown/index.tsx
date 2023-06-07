import React, {useEffect, useRef, useState} from 'react';
import {DropdownItem, DropdownList, WrapperDropdown, WrapperList, WrapperMenu} from "./styles";
import RippleButton from "../Buttons/RippleButton";

interface IDropdown {
  title: JSX.Element | string;
}

const Dropdown = ({title}: IDropdown) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handlerClick = () => setOpen(v => !v);
  const handlerClose = () => setOpen(false);

  useEffect(() => {
    const onClick = (e: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        handlerClose();
      }
    }

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [])

  return (
    <WrapperDropdown ref={dropdownRef}>
      <RippleButton onClick={handlerClick}>
        {title}
      </RippleButton>
      <WrapperList
        open={open}
        top={dropdownRef.current ? `${dropdownRef.current.offsetHeight}px` : '0px'}
      >
        <DropdownList>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>1</DropdownItem>
        </DropdownList>
      </WrapperList>
    </WrapperDropdown>
  );
};

export default Dropdown;
