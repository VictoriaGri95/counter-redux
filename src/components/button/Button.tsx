import s from './Button.module.scss';

type ButtonPropsType = {
  title: string,
  onClick?: () => void,
  disabled?: boolean
}

export const Button = ({
                         title,
                         onClick,
                         disabled,
                       }: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={s.btn}
    >
      {title}
    </button>
  );
};

