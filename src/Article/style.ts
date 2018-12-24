import styled from 'styled-components';

export const ArticleLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    color: #999;
`;

export const ArticleStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ContentWrapper = styled.div`
    position: relative;

    width: 100%;
    max-width: 700px;
    height: 25em;
`;

export const PreviewFrontTile = styled.div`
    position: absolute;
    left: 1em;
    bottom: 1.5em;

    width: 40%;
    min-height: 10em;
    max-height: 60%;
    background-color: beige;
    z-index: 2;
`;

export const ArticleContent = styled.div`
    position: absolute;
    top: 1.5em;
    right: 1em;

    width: 80%;
    min-height: 15em;
    background-color: white;
    z-index: 1;
`;