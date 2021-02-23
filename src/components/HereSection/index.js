import React from 'react';

import Video from '../../videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg 
} from './HeroElements';


const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credits towards your next payment.</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup">
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
