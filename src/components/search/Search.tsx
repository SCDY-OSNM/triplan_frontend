import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import React, { useState } from 'react';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 570px;
  height: 55px;
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
    font-size: 20px;
    background: transparent;
    flex: 1px;
    color: ${({ theme }) => theme.color.bkTitle};
    margin: 5px;

    &::placeholder {
      color: ${({ theme }) => theme.color.gray};
    }
  }

  .search-icon {
    font-size: 40px;
    color: ${({ theme }) => theme.color.darkGray};
  }

  .close-icon {
    font-size: 40px;
    color: ${({ theme }) => theme.color.darkGray};
    cursor: pointer;
  }
`;

interface SearchProps {
  onSearchChange?: (search: string) => void;
}

const Search = ({ onSearchChange }: SearchProps) => {
  const [searchText, setSearchText] = useState('');

  // X 아이콘 클릭 시 검색 글씨 초기화
  const handleClear = () => {
    setSearchText('');
    onSearchChange('');
  };

  // 엔터 키 입력 시 검색어 전달
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchChange(searchText);
    }
  };

  return (
    <SearchBox>
      <SearchContainer>
        <IoMdSearch className="search-icon" />
        <input
          type="text"
          id="searchInput"
          placeholder="검색하슈"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {searchText && <IoClose className="close-icon" onClick={handleClear} />}
      </SearchContainer>
    </SearchBox>
  );
};

export default Search;
