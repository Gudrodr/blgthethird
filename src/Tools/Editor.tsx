import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArticleUnit } from '../type';
import * as ReactMarkdown from 'react-markdown';
import * as dateFns from 'date-fns';
import { Redirect } from 'react-router';


const Editor = () => {
    const [article, setArticle] = useState({date: dateFns.format(new Date(), 'DD.MM.YYYY')} as ArticleUnit);
    const [valid, setValid] = useState(undefined);

    const sendData = () => fetch(`http://127.0.0.1:3001/write`, {
        method: 'POST', 
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(article)
    });

    useEffect(() => {
        fetch('http://127.0.0.1:3001/user_check', {
            method: 'GET',
            mode: 'cors',
            headers: {'Authorization': `Bearer ${localStorage.getItem('devormedlogintoken')}`},
        })
            .then(result => result.json())
            .then(data => setValid(data.success))
    }, []);

    if (valid === false) {
        return <Redirect to='/login' />
    }

    return (
        <EditorStyled>
            <EditorPart>
                <Attributes>
                    <Tags>
                        <label>Tags</label>
                        <input type='text' onChange={e => setArticle({...article, tags: e.target.value})} />
                    </Tags>
                    <DateStyled>
                        <label>Дата</label>
                        <input 
                            type='date' 
                            defaultValue={new Date().toISOString().substr(0, 10)}
                            onChange={e => setArticle({...article, date: dateFns.format(new Date(e.target.value), 'DD.MM.YYYY')})}
                        />
                    </DateStyled>
                    <Author>
                        <label>Автор</label>
                        <input type='text' onChange={e => setArticle({...article, author: e.target.value})} />
                    </Author>
                    <Title>
                        <label>Заголовок</label>
                        <input type='text' onChange={e => setArticle({...article, title: e.target.value})} />
                    </Title>
                    <Alias>
                        <label>Alias</label>
                        <input type='text' onChange={e => setArticle({...article, alias: e.target.value})} />
                    </Alias>
                    <SendButton valid={valid} onClick={sendData}>Создать</SendButton>
                </Attributes>
                <Body>
                    <textarea onChange={e => setArticle({...article, body: e.target.value})} />
                </Body>
            </EditorPart>
            <PreviewPart>
                <Preview source={article.body} />
            </PreviewPart>
        </EditorStyled>
    )
}

export default Editor;


/** styles below */

const EditorStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 3em;
`;

const EditorPart = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    padding-bottom: 1em;
`;

const Attributes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 38%;
`;

const Title = styled.div`

    label {
        color: rgba(211, 211, 211, 0.8);
        font-size: 0.8rem;
    }

    input {
        width: 100%;
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        outline: none;
    }
`;

const Alias = styled(Title)``;

const Tags = styled(Title)``;

const DateStyled = styled(Title)``;

const Author = styled(Title)``;

const SendButton = styled.button`
    color: white;

    visibility: ${(props: {valid: boolean | undefined}) => props.valid ? 'visible' : 'hidden'};
    padding: 1em;
    background-color: transparent;
    border: 1px solid rgba(211, 211, 211, 0.5);
    cursor: pointer;
`;

const Body = styled.div`
    height: 100%;
    width: 58%;

    textarea {
        height: 100%;
        width: 100%;
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        outline: none;
    }
`;

const PreviewPart = styled.div`
    color: white;
    width: 100%;
    height: 50%;
    padding-top: 1em;
    border-top: 1px solid rgba(211, 211, 211, 0.4);
    overflow-y: auto;
`;

const Preview = styled(ReactMarkdown)`
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
`;

