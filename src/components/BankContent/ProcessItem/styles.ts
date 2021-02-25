import styled from 'styled-components';

import { ITEM_PADDING } from '../constants';
import { S as ParentS } from '../styles';

export const S = {
  Tr: ParentS.Tr,
  Td: styled.td`
    padding: ${ITEM_PADDING}px;
  `,
};
