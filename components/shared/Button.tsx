import React from "react";

type ButtonBaseProps = {
  text: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

type AsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = AsButton | AsLink;

const sharedClass = (className = "") => `
  inline-flex items-center justify-center gap-2
  bg-[#b8960c] text-white rounded-md px-10 py-2
  hover:bg-[#a07d0a] active:bg-[#8a6c09]
  transition-colors duration-150
  disabled:opacity-50 disabled:cursor-not-allowed
  ${className}
`;

const Inner = ({
  leftIcon,
  text,
  rightIcon,
}: Pick<ButtonBaseProps, "leftIcon" | "text" | "rightIcon">) => (
  <>
    {leftIcon && <span className="shrink-0">{leftIcon}</span>}
    {text}
    {rightIcon && <span className="shrink-0">{rightIcon}</span>}
  </>
);

export default function Button(props: ButtonProps) {
  const { text, leftIcon, rightIcon, className, ...rest } = props;

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as Omit<AsLink, keyof ButtonBaseProps>;
    return (
      <a href={href} className={sharedClass(className)} {...anchorRest}>
        <Inner leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
      </a>
    );
  }

  return (
    <button
      className={sharedClass(className)}
      {...(rest as Omit<AsButton, keyof ButtonBaseProps>)}
    >
      <Inner leftIcon={leftIcon} text={text} rightIcon={rightIcon} />
    </button>
  );
}