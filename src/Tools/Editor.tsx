import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ArticleUnit } from '../type';
import * as ReactMarkdown from 'react-markdown';
import * as dateFns from 'date-fns';


const Editor = () => {
    const [article, updateArticle] = useState({date: dateFns.format(new Date(), 'DD.MM.YYYY')} as ArticleUnit);

    const sendData = () => fetch(`http://127.0.0.1:3001/write`, {
        method: 'POST', 
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(article)
    });

    return (
        <EditorStyled>
            <EditorPart>
                <Attributes>
                    <Tags>
                        <label>Tags</label>
                        <input type='text' onChange={e => updateArticle({...article, tags: e.target.value})} />
                    </Tags>
                    <DateStyled>
                        <label>Дата</label>
                        <input 
                            type='date' 
                            defaultValue={new Date().toISOString().substr(0, 10)}
                            onChange={e => updateArticle({...article, date: dateFns.format(new Date(e.target.value), 'DD.MM.YYYY')})}
                        />
                    </DateStyled>
                    <Author>
                        <label>Автор</label>
                        <input type='text' onChange={e => updateArticle({...article, author: e.target.value})} />
                    </Author>
                    <Title>
                        <label>Заголовок</label>
                        <input type='text' onChange={e => updateArticle({...article, title: e.target.value})} />
                    </Title>
                    <Alias>
                        <label>Alias</label>
                        <input type='text' onChange={e => updateArticle({...article, alias: e.target.value})} />
                    </Alias>
                    <SendButton onClick={sendData}>Создать</SendButton>
                </Attributes>
                <Body>
                    <textarea onChange={e => updateArticle({...article, body: e.target.value})} />
                </Body>
            </EditorPart>
            <PreviewPart>
                <Preview source={article.body} />
            </PreviewPart>
        </EditorStyled>
    )
}

export default Editor;


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

