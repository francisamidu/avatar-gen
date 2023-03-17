import React from 'react';
import { ButtonProps } from '../types/ButtonProps';

const MainButton = ({
  classNames,
  icon,
  iconShow,
  loading,
  text,
  onClick,
}: ButtonProps) => {
  const style = `text-white bg-green-700 hover:bg-green-800 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center outline-none ${
    loading ? 'cursor-not-allowed hover:bg-green-700' : ''
  }`;
  const styles = classNames ? `${style} ${classNames}` : style;
  const handleClick = () => {
    if (onClick) {
      onClick(null);
    }
  };
  return (
    <button
      type="button"
      className={styles}
      onClick={handleClick}
      disabled={loading}
    >
      <span className="ml-3">{text}</span>
      {iconShow || loading ? icon : null}
    </button>
  );
};

export default MainButton;
