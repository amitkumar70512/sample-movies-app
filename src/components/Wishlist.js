import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../App';
import Navbar from './Navbar';

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

const WishlistItem = ({ id, title, caption, imageUrl }) => {
    // let imageUrl = `https://image.tmdb.org/t/p/w500/${props.image}`;
    const { wishlist } = useContext(UserContext);// handleLike context is used here...
    console.log(wishlist)
    return (
        <>
            <Navbar />
            <h4>Your Favourite Movies</h4>

            {
                wishlist?.wishlist?.map((result, index) => (
                    <div key={index}>
                        <h4>
                            {result}
                        </h4>

                    </div>
                ))}

            <ListContainer>
                <ListLeft>
                    <Thumbnail src={imageUrl} />
                </ListLeft>
                <Center>
                    <CenterHead>{title}</CenterHead>
                    <CenterPar>{caption}</CenterPar>
                </Center>
                <ListRight>
                    <Link to={`/detail/${id} `} style={{ color: '#323232', textDecoration: 'none' }}> <RightP>&#8250;</RightP></Link>
                </ListRight>
            </ListContainer>
        </>
    );
};

export default WishlistItem;