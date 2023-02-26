import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'

/* styled */
const ButtonWrapper = styled.div`
    text-align: ${props => props.align};
    & > a {
        text-decoration: none;
        padding: 16px 32px;
        border-radius: 25px;
        font-size: 18px;
        font-weight: 600;
        display: inline-block;
        transition: .4s;
    }
`
const ButtonPrimary = styled(Link)`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    &:hover, &:focus {
        color: ${props => props.theme.colors.primary};
        background-color: #fff;
    }
`
const ButtonSecondary = styled(Link)`
    background-color: ${props => props.theme.colors.secondary};
    color: #fff;
    &:hover, &:focus {
        color: ${props => props.theme.colors.secondary};
        background-color: #fff;
    }
`
const ButtonWhite = styled(Link)`
    background-color: #fff;
    color: ${props => props.theme.colors.primary};
    &:hover, &:focus {
        color: #fff;
        background-color: ${props => props.theme.colors.primary};
    }
`
const ButtonOutlined = styled(Link)`
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    &:hover, &:focus {
        color: ${props => props.theme.colors.primary};
        background-color: #fff;
    }
`


const Button = ({ href, variant, text, align, children }) => {

  let btnText = children ? children : text ? text : 'Button'

  return (
    <ButtonWrapper align={align} variant={variant}>
        {variant == 'primary' && 
            <ButtonPrimary to={href}>{btnText}</ButtonPrimary>
        }
        {variant == 'secondary' && 
            <ButtonSecondary to={href}>{btnText}</ButtonSecondary>
        }
        {variant == 'white' && 
            <ButtonWhite to={href}>{btnText}</ButtonWhite>
        }
        {variant == 'outlined' && 
            <ButtonOutlined to={href}>{btnText}</ButtonOutlined>
        }
    </ButtonWrapper>
  )
}

export default Button