import React from 'react';
import {Image, View, ImageSourcePropType} from 'react-native';
import CustomText from '../CustomText';
import {useTheme} from '../../hooks/useTheme';
import {width} from '../../themes/spacing';
import {getStyles} from './styles';
import Spacer from '../spacer';

interface CustomFlashProps {
  msg: string;
  img: ImageSourcePropType;
}

const CustomFlash: React.FC<CustomFlashProps> = ({msg, img}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={img} />
      <Spacer width={width * 0.025} />
      <View style={styles.txtStyle}>
        <CustomText style={styles.msgTxt}>{msg}</CustomText>
      </View>
    </View>
  );
};

export default CustomFlash;