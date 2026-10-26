import React from 'react';
import { Image } from '../core';

type Props = {
  width: number;
  height: number;
};

export default function LogoImage({ height, width }: Props) {
  return (
    <Image
      source={require('../../assets/image/logo.png')}
      resizeMode="contain"
      width={width}
      height={height}
    />
  );
}
