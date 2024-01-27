import React from 'react';
import './SearchBar.scss';
import Input from '../input/Input';

const SearchBar: React.FC = () => {
    return (
        <div className='search-bar'>
            <Input
                id='searchbar'
                type='search'
                placeholder='Search'
                onChange={(e) => console.log("Searching: " + e.target.value)}
                inputMode='search'
            />
        </div>
    );
};

export default SearchBar;