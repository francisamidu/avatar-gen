type ButtonProps = {
  classNames?: string;
  text: string;
  icon?: JSX.Element;
  iconShow?: boolean;
  loading?: boolean;
  onClick?: (() => void) | ((e: any) => Promise<any>);
};

export type { ButtonProps };
