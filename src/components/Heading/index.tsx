import React from "react";
import * as S from './styles';

export interface HeadingProps {
  label: string;
}

const Heading = (props: HeadingProps) => {
  return (
    <S.Wrapper>
      <div>{props.label}HeadingXX</div>
    </S.Wrapper>
  );
};

export default Heading;