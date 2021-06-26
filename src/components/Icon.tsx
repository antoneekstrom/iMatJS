import React, { PropsWithChildren } from 'react';

export type IconSize = 12 | 14 | 18 | 24 | 32;

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & PropsWithChildren<{
   size?: IconSize;
}>;

export default function Icon({ children, size: fontSize, ...props }: IconProps) {
   if (!fontSize) {
      fontSize = 18;
   }
   return (
      <span {...props} className="material-icons-outlined icon" style={{ fontSize }}>
         {children}
      </span>
   );
}
