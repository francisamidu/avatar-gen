import React from 'react';
import { ButtonProps } from '../types/ButtonProps';

const MainButton = ({
  classNames,
  icon,
  iconPosition,
  text,
  onClick,
}: ButtonProps) => {
  let position = iconPosition ? iconPosition : 'right';
  const style =
    'text-white bg-green-700 hover:bg-green-800 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center outline-none';
  const styles = classNames ? `${style} ${classNames}` : style;
  const handleClick = () => {
    if (onClick) {
      onClick(null);
    }
  };
  return (
    <button type="button" className={styles} onClick={handleClick}>
      {icon && position == 'left' ? icon : null}
      <span className="ml-3">{text}</span>
      {icon && position == 'right' ? icon : null}
    </button>
  );
};

export default MainButton;
