import {useState} from 'react'
import { Box, Button,Container, Paper,Stack,TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Grid2';
import generateMultipleProblems from '../scripts/generateProblems'
import '../../../App.css'


    

    const problems = generateMultipleProblems(10,1,10)

    const CreateAdditionProblems = () => {
    const [items, setItems] = useState([...problems]);
    const [selectedBtn, setSelectedBtn] = useState(-1);

    const handleInputChange = (id: number, event: React.ChangeEvent<any>) => {
        const newItems = items.map(item => {
          if (item.id === id) {
            return { ...item, inputValue: event.target.value };
          }
          return item;
        });
        setItems(newItems);
      };

      const chooseLevel = ( event: React.ChangeEvent<any>) => {
        const newProblems = generateMultipleProblems(10,1,event.target.value)
          setItems([...newProblems]);
          const buttonId = event.target.id.split('-')
            setSelectedBtn(parseInt(buttonId[2]))

            // reset textfield
            const selectedInput = document.querySelectorAll<HTMLInputElement>("input[type='text'");
            console.log(selectedInput)
            selectedInput.forEach(input => {
                input.value = ''
            })
            
            // reset button
            checkButtonArr.forEach(button => {
                document.getElementById(button)?.setAttribute('class', 'btn-initial');
                
            }) 
            checkButtonArr.forEach(button => {
                const selectedBtn = document.getElementById(button);
                if(selectedBtn){
                    selectedBtn.innerText = 'Check'
                }
            }) 
        }
        

        const checkButtonArr = ['check-btn-0','check-btn-1','check-btn-2','check-btn-3','check-btn-4','check-btn-5','check-btn-6','check-btn-7','check-btn-8','check-btn-9']


    
      const checkAnswer = (e: React.ChangeEvent<any>) => {
        const value = e.target.value.split('_')
        items.forEach(item => {
            if(item.id == value[1] && item.answer == parseInt(item.inputValue)){
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
                <Box sx={{ padding: 2}}>
                    <Typography>Choose a level</Typography>
                    
                    <Button id='level-btn-1' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='10' color={selectedBtn === 1 ? "secondary" : "primary"} onClick={chooseLevel}>1</Button>
                    <Button id='level-btn-2' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='50' color={selectedBtn === 2 ? "secondary" : "primary"} onClick={chooseLevel}>2</Button>
                    <Button id='level-btn-3' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='100' color={selectedBtn === 3 ? "secondary" : "primary"} onClick={chooseLevel}>3</Button>
                    <Button id='level-btn-4' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='500' color={selectedBtn === 4 ? "secondary" : "primary"} onClick={chooseLevel}>4</Button>
                    <Button id='level-btn-5' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='1000' color={selectedBtn === 5 ? "secondary" : "primary"} onClick={chooseLevel}>5</Button>
                    <Button id='level-btn-6' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='2000' color={selectedBtn === 6 ? "secondary" : "primary"} onClick={chooseLevel}>6</Button>
                    <Button id='level-btn-7' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='3000' color={selectedBtn === 7 ? "secondary" : "primary"} onClick={chooseLevel}>7</Button>
                    <Button id='level-btn-8' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='4000' color={selectedBtn === 8 ? "secondary" : "primary"} onClick={chooseLevel}>8</Button>
                    <Button id='level-btn-9' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='5000' color={selectedBtn === 9 ? "secondary" : "primary"} onClick={chooseLevel}>9</Button>
                    <Button id='level-btn-10' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='10000' color={selectedBtn === 10 ? "secondary" : "primary"} onClick={chooseLevel}>10</Button>
                   
                </Box>
                <Box>     
                    {
                        items.map((problem) => (
                        <Paper key={problem.id} elevation={5} sx={{p: 2, m: 2}}>
                            <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" textAlign='center' size="grow">
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

                                <Button onClick={checkAnswer}  value={`${problem.answer}_${problem.id}`} id={`check-btn-${problem.id}`} variant='contained' size='large' sx={{height:98.66, ml: '10px' }}>Check</Button>
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
    return (
    <div>

            <CreateAdditionProblems/>

    </div>

    )
}

export default ProblemSets