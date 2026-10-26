import React from 'react';
import { Text } from 'react-native';

import { typography } from './styles';
import type { GlobalTextProps } from './type';

const GlobalText: React.FC<GlobalTextProps> = ({
  variant = 'body1',
  color = '#222222',

  style,
  textStyle,
  children,
  ...textProps
}) => {
  const variantStyle = typography[variant];
  
  return (
    <Text
      {...textProps}
      style={[
        {
          fontSize: variantStyle.fontSize,
          lineHeight: variantStyle.lineHeight,
          fontFamily: variantStyle.fontFamily,
          color,
          textAlign: 'left',
          writingDirection: 'rtl',
        },
        style,
        textStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export default GlobalText;
