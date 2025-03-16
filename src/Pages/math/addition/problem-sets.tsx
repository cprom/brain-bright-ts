import React, {useState} from 'react'
import { useAuth } from '../../../contexts/authContext'
import { Box, Button, Card, CardContent, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import { Navigate } from 'react-router-dom'
import Grid2 from '@mui/material/Grid2';


function generateAdditionProblem(max : number, id : number) {
    const num1 = Math.floor(Math.random() * (max + 1));
    const num2 = Math.floor(Math.random() * (max + 1));
    return {
        id: id,
      problem: `${num1} + ${num2} = `,
      answer: num1 + num2,
      inputValue: ''
    };
  }
  
  function generateMultipleProblems(numProblems: number, max: number) {
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

    const handleInputChange = (id: number, event: any) => {
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
        items.forEach(item => {
            if(item.id == value[1] && item.answer == parseInt(item.inputValue)){
                console.log(true, item.id)
                console.log("inputValue",item.inputValue)
                document.getElementById(`check-btn-${item.id}`).innerText = 'Correct'
                document.getElementById(`check-btn-${item.id}`).setAttribute('class', 'btn-correct');
                
            }
            if(item.id == value[1] && item.answer !== parseInt(item.inputValue)){
                document.getElementById(`check-btn-${item.id}`).innerText = 'Incorrect'
                document.getElementById(`check-btn-${item.id}`).setAttribute('class', 'btn-incorrect');
                
                
            }
           
        })

    }

        return (
            <>
                <Container sx={{minWidth: '450px', m: 0}}>
                <Box>     
                    {
                        problems.map((problem) => (
                        <Paper key={problem.id} elevation={5} sx={{p: 2, m: 2}}>
                            <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" size="grow">
                                <Typography fontSize={30}>{problem.problem}</Typography>                                        
                                <TextField 
                                    id={(problem.id).toString()}
                                    type='text' 
                                    size='small'
                                    slotProps={{ htmlInput: { maxLength: 2 } }}
                                    onChange={(event) => handleInputChange(problem.id, event)}
                                    sx={{
                                        input: { fontSize: '1.70rem', textAlign: 'center', p: 0 }, 
                                        width: '70px'
                                      }}
                                />
                                <Button onClick={checkAnswer}  value={`${problem.answer}_${problem.id}`} id={`check-btn-${problem.id}`} variant='contained'>Check</Button>
                            </Grid2>
                        </Paper> 
                        )) 
                    }
                
                </Box>
                </Container>
               
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
            <Typography sx={{p:0}}>Random</Typography>
            <CreateAdditionProblems/>
            </>
            :
            <Navigate to="/login"/>  
        }
    </div>

    )
}

export default ProblemSets