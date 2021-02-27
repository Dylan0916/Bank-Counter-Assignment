import React, { memo } from 'react';

import { S } from '../styles';
import { FieldType } from '../types';

const headItem = [FieldType.Counter, FieldType.Processing, FieldType.Processed];

function ContentHeader() {
  return (
    <S.Tr>
      {headItem.map(item => (
        <S.Td isHead type={item} key={item} data-testid="headItem">
          {item}
        </S.Td>
      ))}
    </S.Tr>
  );
}

export default memo(ContentHeader);
