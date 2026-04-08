import React from 'react';
import { Text, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  text?: String;
}

const CustomText: React.FC<CustomTextProps> = ({ text = "", ...props }) => {
  return (
    <Text allowFontScaling={false} {...props}>
      {text}
    </Text>
  );
};

export default CustomText;

