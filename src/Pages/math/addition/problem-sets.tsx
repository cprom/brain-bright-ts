import {useState} from 'react'
import { Box, Button,Container, Paper,Stack,TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Grid2';
import generateMultipleProblems from '../scripts/generateProblems'
import '../../../App.css'

    const problems = generateMultipleProblems(10,1,10)
    console.log(problems)

    const CreateAdditionProblems = () => {
    const [items, setItems] = useState([...problems]);

    const handleInputChange = (id: number, event: any) => {
        const newItems = items.map(item => {
          if (item.id === id) {
            return { ...item, inputValue: event.target.value };
          }
          return item;
        });
        setItems(newItems);
      };
    
      const checkAnswer = (e: React.ChangeEvent<any>) => {
        const value = e.target.value.split('_')
        items.forEach(item => {
            if(item.id == value[1] && item.answer == parseInt(item.inputValue)){
                console.log(true, item.id)
                console.log("inputValue",item.inputValue)
                const correct = document.getElementById(`check-btn-${item.id}`)
                if(correct){
                    correct.innerText = 'Correct'
                }
                const btn_correct = document.getElementById(`check-btn-${item.id}`)
                if(btn_correct){
                    btn_correct.setAttribute('class', 'btn-correct')                  
                }
            }
            if(item.id == value[1] && item.answer !== parseInt(item.inputValue)){

               const incorrect =  document.getElementById(`check-btn-${item.id}`)
               if(incorrect){
                incorrect.innerText = 'Incorrect'
               }
               const btn_incorrect = document.getElementById(`check-btn-${item.id}`)
                if(btn_incorrect){
                    btn_incorrect.setAttribute('class', 'btn-incorrect');
                }
            }
        })
    }


        return (
            <>
                <Container sx={{minWidth: '400px', m: 0}}>
                <Box>     
                    {
                        problems.map((problem) => (
                        <Paper key={problem.id} elevation={5} sx={{p: 2, m: 2}}>
                            <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" size="grow">
                                <div >
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <div style={{textAlign: 'right', borderBottom: '3px solid black'}}>
                                    <Stack><Typography fontSize={30}>{problem.num1}</Typography></Stack>                                 
                                    <Stack><Typography fontSize={30} >+ {problem.num2}</Typography> </Stack>   
                                    </div>
                                </div> 
                                <TextField 
                                    id={(problem.id).toString()}
                                    type='text' 
                                    size='small'
                                    slotProps={{ htmlInput: { maxLength: 5 } }}
                                    onChange={(event) => handleInputChange(problem.id, event)}
                                    sx={{
                                        input: { fontSize: '1.70rem', textAlign: 'center', p: 0 }, 
                                        width: '100px', mt: 1
                                      }}
                                />
                                </div>                                   

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
    // const [level] = useState(problems[0].level);

    return (
    <div>
      
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {/* <Typography>Level: {level} </Typography> */}
            <Typography sx={{p:0}}> Random</Typography>
            </div>
            <CreateAdditionProblems/>

    </div>

    )
}

export default ProblemSets