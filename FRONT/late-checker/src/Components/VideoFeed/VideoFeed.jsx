import React, {Fragment, useState} from 'react';
import styled from 'styled-components'

const VideoFeed = () => {
        const VideoFeedSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 40px 0 40px 0;
    background-color: #ffffff;
    padding: 20px;
    /* max-width: 550px; */
    width: 45vw;
    h2 {
        margin-top : 0;
        font-size: 45px;
        line-height: 1;
        font-weight: normal;
        color: #013087;
        text-align: center;
    }
`
    return (
            <VideoFeedSection>
				<h2>Video Feed - classroom 1</h2>
                <iframe allowFullScreen
                        webkitallowfullscreen
                        mozallowfullscreen
                        src="https://video.nest.com/embedded/live/GqJifk6U25?autoplay=0"
                        frameBorder="0"
                        width="720"
                        height="576" />
			</VideoFeedSection>
    );
};

export default VideoFeed;