import React, { useState } from 'react';
import styled from 'styled-components';

// * --------- COMPONENTS --------- *
import SearchBarResult from './SearchBarResult'


const SearchBar = props => {

    // * ---------- STATES ---------- *
    const [employeeList, setEmployeeList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    // * ---------- STYLE ---------- *
    const SearchSection = styled.section`
        display: flex;
        flex-direction: column;
        margin: 40px 0 40px 0;
        background-color: #ffffff;
        padding: 20px;
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
    const SearchContainer = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const AnswerDiv = styled.div`
        min-width: 90%;
`


    const searchForEmployee = () => {
        const name = document.getElementById('searchForEmployee').value.toLowerCase()
        if(name){
            fetch(`http://127.0.0.1:5000/get_employee/${name}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if(response){
                   setEmployeeList(response)
                    props.searchBarAnswer(response)
                } else {
                  setErrorMessage(response.Error)
                  // setLoading(false)
                }
            })
        }
        else{
           setEmployeeList(['No name find...'])
        }
    }
    const SearchListAnswer = props => {
        let obj = props.answer
        let answerList = Object.keys(obj).map(key => {
            return <SearchBarResult result={ obj[key] } />
        })
        return answerList
    }

    return (
            <SearchSection>
				<h2>Search for a employee</h2>
                <SearchContainer>
                    <div>
                        <input name='searchForEmployee' id='searchForEmployee' placeholder='Jonh Doe' type="text"/>
                        <button onClick={ searchForEmployee } id='searchButton'>Search</button>
                    </div>
                    <AnswerDiv>
                        {/* Show user's data if user found */}
                        { ( employeeList && !employeeList['error'] ) ? <SearchListAnswer answer={ employeeList } /> : null }

                        {/* Show an error if user is not found */}
                        { employeeList['error'] ? <p>User not found...</p> : null }
                    </AnswerDiv>
                </SearchContainer>
			</SearchSection>
    );
};

export default SearchBar;