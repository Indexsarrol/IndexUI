/*
 * @Description: Search搜索框
 * @Author: Indexsarrol
 * @Date: 2021-05-26 17:51:43
 * @LastEditors: Indexsarrol
 * @LastEditTime: 2021-05-27 09:40:50
 */

import React from 'react';
import classnames from 'classnames';
import { InputProps } from './Input';
import Input from './Input';
import Button from '../Button/Button';
import Icon from '../Icon/icon';

export interface SearchProps extends InputProps {
  enterButton?: boolean | string | React.ReactNode;
  onSearch: (value: string) => void;
  value: string;
}

const Search: React.FC<SearchProps> = (props) => {
  const { enterButton, onSearch, value, ...restProps } = props;

  const handleClick = (value: string) => {
      onSearch(value)
  }
  const searchButton = () => {
    return (
      <div className="idx-search-btn" onClick={() => {handleClick(value)}}>
        <Icon icon="search"/>
      </div>
    );
  }

  return (
    <div className="idx-search">
      <Input 
        {...restProps}
        addonAfter={
          searchButton()
        }
        addonAfterClassName="idx-search-container"
      />
    </div>
  );
}


export default Search;

