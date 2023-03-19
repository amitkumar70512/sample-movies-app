import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`  
display: flex;
justify-content: center;
margin-bottom: 24px;
background-color: #c2c2ff;
padding:10px;
border-bottom: 4px solid #b8b8b8;`


const SearchInput = ({ value, onChangeText, onFormSubmit }) => {
    React.useEffect(() => {
        let input = document.querySelector('input');
        input.addEventListener('input', onChangeText);
        return input.removeEventListener('input', onChangeText);
    }, []);

    return (
        <SearchContainer>
            <form onSubmit={onFormSubmit}>
                <input class="form-control" type="text" placeholder="Search Movie here…" value={value} onChange={onChangeText} style={{ width: "300px" }} />
            </form>
        </SearchContainer>
    );
};

export default SearchInput;