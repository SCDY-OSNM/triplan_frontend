import styled from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 570px;
  height: 60px;
  border-radius: 30px;
  background-color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 20px;

  input {
    border: none;
    outline: none;
    font-size: 24px;
    background: transparent;
    flex: 1px;
    color: ${({ theme }) => theme.color.bkTitle};
    margin: 5px;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }
  }

  .search-icon {
    font-size: 44px;
    color: ${({ theme }) => theme.color.darkGray};
  }

  .close-icon {
    font-size: 44px;
    color: ${({ theme }) => theme.color.darkGray};
    cursor: pointer;
  }
`;
