import React, {useState} from 'react'
import { useAuth } from '../../../contexts/authContext'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'



function generateAdditionProblem(max, id) {
    const num1 = Math.floor(Math.random() * (max + 1));
    const num2 = Math.floor(Math.random() * (max + 1));
    return {
        id: id,
      problem: `${num1} + ${num2} = `,
      answer: num1 + num2,
      inputValue: ''
    };
  }
  
  function generateMultipleProblems(numProblems, max) {
      const problems = [];
      for (let i = 0; i < numProblems; i++) {
          problems.push(generateAdditionProblem(max, i));
      }
      return problems
  }

  const problems = generateMultipleProblems(10, 9)
  console.log(problems)




const CreateAdditionProblems = () => {
    //const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([...problems]);

    //console.log(inputValue)

    const handleInputChange = (id, event) => {
        const newItems = items.map(item => {
          if (item.id === id) {
            return { ...item, inputValue: event.target.value };
          }
          return item;
        });
        setItems(newItems);
        console.log(newItems)
      };
    
      const checkAnswer = (e) => {
        const value = e.target.value.split('_')
        let clickedButton;
        items.forEach(item => {
            if(item.id == value[1] && item.answer == parseInt(item.inputValue)){
                console.log(true, item.id)
                console.log("inputValue",item.inputValue)
                document.getElementById(`check-btn-${item.id}`).innerText = 'Correct'
            }
            if(item.id == value[1] && item.answer !== parseInt(item.inputValue)){
                document.getElementById(`check-btn-${item.id}`).innerText = 'Incorrect'
            }
           
        })

    }

        return (
            <>
               {problems.map((problem) => (
                     <Typography sx={{fontSize: '3rem', m: '25px'}} key={problem.id}>
                     <span>{problem.problem}</span>
                     <TextField 
                     id={problem.id}
                     
                     type='text' 
                     sx={{'.MuiInputBase-input': { fontSize: '3rem', padding: 0, maxWidth: '70px', ml: '10px' }}}
                     inputProps={{ maxLength: 2 }}
                     onChange={(event) => handleInputChange(problem.id, event)}
                     />
                     <Button onClick={checkAnswer} value={`${problem.answer}_${problem.id}`} id={`check-btn-${problem.id}`}>Check</Button>
                    </Typography>
               )) 
           
                }
               
            </>
        )

}



const ProblemSets = () => {
    const { userLoggedIn } = useAuth();

    return (
        <div>
        { 
            userLoggedIn
            ?
            <>

            <Box sx={{p:5}}>
            <Typography>Problems</Typography>
            <CreateAdditionProblems/>
            </Box>
            </>
            :
            <Navigate to="/login"/>  
        }
    </div>

    )
}

export default ProblemSets