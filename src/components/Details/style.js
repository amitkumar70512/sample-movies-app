import styled from "styled-components";

const GenreButton = styled.button`
background-color:#F8EFBA;
background: linear-gradient:#F8EFBA;
text-color:white;
border: none;
& before {
  height: 0%;
  width: 2px;
}
& hover {
  box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .5), 
    inset -4px -4px 6px 0 rgba(255,255,255,.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
}
margin-left:3px;
border-radius:0.2rem
`


export default GenreButton;