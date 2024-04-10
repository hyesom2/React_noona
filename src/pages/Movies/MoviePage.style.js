import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .searched {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .pagination {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    white-space: nowrap;
  }

  .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    cursor: pointer;
    
    &:last-child {
      margin-right: 0;
    }

    &.active {
      position: relative;
      top: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      width: 20px;
      height: 20px;
      color: #141414;
      font-weight: bold;
      border-radius: 50%;
    }

    .page-link {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1023px) {
    padding-bottom: 58px;
  }
`;