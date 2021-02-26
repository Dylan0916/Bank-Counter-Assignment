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
};
