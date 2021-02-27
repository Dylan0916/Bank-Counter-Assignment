import styled from 'styled-components';

import { ITEM_PADDING } from './constants';
import { FieldType } from './types';

interface TdProps {
  type: FieldType;
  isHead?: boolean;
}

function getFieldFlex({ type }: TdProps) {
  const result = {
    [FieldType.Counter]: '0 0 90px',
    [FieldType.Processing]: '0 0 105px',
    [FieldType.Processed]: 1,
  };

  return result[type];
}

export const S = {
  Container: styled.div`
    width: 100%;
  `,
  Table: styled.div`
    width: 100%;
  `,
  Tr: styled.div`
    display: flex;
    border-bottom: 1px solid #9e9e9e;
  `,
  Td: styled.div<TdProps>`
    flex: ${getFieldFlex};
    padding: ${ITEM_PADDING}px;
    overflow-x: auto;
    font-weight: ${({ isHead }) => (isHead ? 'bold' : 'normal')};
  `,
  BottomSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  `,
  Waitings: styled.p`
    font-weight: 600;
  `,
  NumberPlateBtn: styled.button`
    padding: 4px 10px;
    font-size: 0.8125rem;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    border: 0;
    outline: 0;
    cursor: pointer;
    margin: 0;
    user-select: none;
  `,
};
