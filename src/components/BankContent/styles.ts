import styled from 'styled-components';

import { ITEM_PADDING } from './constants';

export const S = {
  Table: styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
  `,
  Tr: styled.tr`
    border-bottom: 1px solid #9e9e9e;
  `,
  Th: styled.th`
    padding: ${ITEM_PADDING}px;
  `,
};
