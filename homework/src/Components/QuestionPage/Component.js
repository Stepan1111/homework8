import React from 'react';
import styled from 'styled-components';

import AnswersList from '../AnswersList/Container';
import NewAnswer from '../NewAnswer/Container';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;


const Title = styled.h1``;


const Description = styled.div`
  font-size: 12pt;
  margin: 10px;
  padding: 15px 0;
`;

const SortByDropdown = styled.select`
  flex-basis: 20%;
  padding: 0 10px;
  font-size: 16pt;
  background: #fff;
`;

const QuestionPage = ({ question, author, setSorting, dispatch, sortBy }) => (
  <Wrapper>
    <Title>{question.title}</Title>

    <div>By: <strong>{author.profile.fullName}</strong></div>
    
    <SortByDropdown value = {sortBy} onChange = {setSorting}>
        <option value="createdAt">By date</option>
        <option value="best">Best </option>
        <option value="worst">Worst  </option>
    </SortByDropdown>
      
    <Description>{question.description}</Description>

    <AnswersList />

    <NewAnswer />
  </Wrapper>
);


export default QuestionPage;
