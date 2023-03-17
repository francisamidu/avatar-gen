type ButtonProps = {
  classNames?: string;
  text: string;
  icon?: JSX.Element;
  iconShow?: boolean;
  onClick?: (() => void) | ((e: any) => Promise<any>);
};

export type { ButtonProps };
