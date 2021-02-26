import styled from 'styled-components';

export const S = {
  Title: styled.h1``,
  BottomSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  `,
  Waitings: styled.p`
    font-weight: 600;
  `,
  ActionBtn: styled.button`
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
