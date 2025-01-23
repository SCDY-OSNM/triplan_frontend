import * as S from './Search.style';
import { IoMdSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import React, { useState } from 'react';

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
    <S.SearchBox>
      <S.SearchContainer>
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
      </S.SearchContainer>
    </S.SearchBox>
  );
};

export default Search;
