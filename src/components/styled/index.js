import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    margin:20px auto;
    display:grid;
    grid-template-columns:repeat(4 , 100px);
    grid-template-rows:minmax(120px , auto) repeat(5 , 100px);
    justify-content:center;
    align-content:center;
    width:400px;
    overflow:hidden;
    border-radius:10px ;
    box-shadow:10px 10px 20px rgba(0,0,0,.4);

    @media screen and (max-width:480px){
        width:90vw;
        grid-template-columns:repeat(4 , 1fr);
        grid-template-rows:minmax(100px , auto) repeat(5 , 80px);
    }

`;

export const Screen = styled.div`
    grid-column:1 / -1;
    padding:10px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    background:linear-gradient(to bottom,#006466 ,#212f45) ;
    text-align:left;
    word-wrap:break-word;
    word-break:break-all;

`;

export const Previous = styled.div`
    color: rgba(255,255,255,0.5);
    font-size:1rem;
    font-weight:bold;
`;

export const Current = styled.div`
    color: rgba(255,255,255,1);
    font-size:2rem;
    font-weight:bold;
`;

export const Button = styled.button`
    cursor:pointer;
    border:1px outset white;
    background-color:rgba(255,255,255,1) ;
    outline:none;
    font-size:2rem;
    box-shadow:inset 1px 1px 5px rgba(0,0,0,.2);
    &:hover{
        background-color:rgba(230,230,230,.9) ;
    }

    ${(props)=>props.gridSpan && `grid-column :span ${props.gridSpan}`};
    ${(props)=>props.operation && `background-color:silver`}
    ${(props)=>props.blue && `background-color:skyblue`}

`