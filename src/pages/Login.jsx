import React from 'react'
import styled from "styled-components";

import Video from '../assets/video.mp4';
import Button from '../components/Button';

/* Styled */
const PageWrapper = styled.div`
    position: relative;
    height: 100vh;
`

const VideoWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    & video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
    }
    & .overlay {
        background-color: #000;
        opacity: 0.25;
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 100%; height: 100%;
    }
`
const TextBox = styled.div`
    position: absolute;
    top: 50%; left: 0; right: 0;
    transform: translateY(-50%);
    & h1 {
        font-size: 96px;
        color: #fff;
    }
`


const Login = () => {

    /* Spotify Auth URL */
    const authURL = `${import.meta.env.VITE_AUTH_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=${import.meta.env.VITE_RESPONSE_TYPE}&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}&scope=${import.meta.env.VITE_SCOPE}`  

    return (
        <PageWrapper>
            <VideoWrapper>
                <video loop muted playsInline autoPlay>
                    <source src={Video}></source>
                </video>
                <div className='overlay'/>
            </VideoWrapper>
            <TextBox>
                <div className='container'>
                    <h1>Give a better look to your spotify app</h1>
                    <Button href={authURL} variant="outlined">Sign in with Spotify</Button>
                </div>
            </TextBox>
        </PageWrapper>
    )
}

export default Login