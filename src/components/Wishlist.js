import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ListItem from './ListItem';
import Navbar from './Navbar';
import Empty from './Empty';

const ListContainer = styled.div`
display: flex;
 margin: 1% 5%;
  padding: 8px;
  border-bottom: 1px solid #e6e6e6;
`
const ListRight = styled.div`
flex: 0.2;
`;
const RightP = styled.p`
font-size: 32px;
color: #000;`

const ListLeft = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;
const Center = styled.div`
flex: 4;
`

const Thumbnail = styled.img`
width: 50px;
`;
const CenterHead = styled.h4`
margin-block-start: 0px;
margin-block-end: 8px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const CenterPar = styled.p`
margin-block-start: 0px;
margin-block-end: 8px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Wishlist = (props) => {
    const result = useSelector(state=>state.wishlist) //array of Json objects with dup  [{},{}]
        const uniqueResult = new Set(result.map(JSON.stringify));  //unique result but in set of strings ( by json.stringify)  
        const uniqueResultArray = Array.from(uniqueResult); 
        const Result = uniqueResultArray.map(JSON.parse)
        const count = Result.length;
    console.log(Result)
    Result.map((movie)=>{
        console.log(movie.title)
    })
    return (
        <>
            <Navbar />
                
            {(count === 0) && <Empty />}
                {
                    Result?.map((movie, index) => (
                        <div key={index}>
                            <ListItem
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                caption={movie.release_date}
                                id={movie.id}
                            />
                        </div>
                ))}
        </>
    );
};

export default Wishlist;