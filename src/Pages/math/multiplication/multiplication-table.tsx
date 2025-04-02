import {useState} from 'react'
import { Box, Button,Container, Paper,Stack,TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Grid2';
import '../../../App.css'


// generate and array of objects use to build multiplication problems without remainders 
type multiplicationObject = {
    id: number
    multiplier: number
    multiplicant: number
    answer: number
    inputValue: string
  }
  
  function multiplicationProblems(multiplier: number) {
  
  const multiplicationArray: multiplicationObject[] = [];
  
  for (let i = 1; i <= 12; i++) {
    multiplicationArray.push({
        id: i,
        multiplier: multiplier,
        multiplicant: i,
        answer: multiplier * i,
        inputValue: "",
    })
  }
  return multiplicationArray;
  }

 
    // const problems = generateMultiplemultiplicationProblems(10,1,10)
    const problems = multiplicationProblems(1)
    console.log(problems)

    const MultiplicationTableProblems = () => {
    const [items, setItems] = useState([...problems]);
    const [selectedBtn, setSelectedBtn] = useState(-1);


      const chooseLevel = ( event: React.ChangeEvent<any>) => {
        const newProblems = multiplicationProblems(event.target.value)
          setItems([...newProblems]);
          const buttonId = event.target.id.split('-')
            setSelectedBtn(parseInt(buttonId[2]))

            // reset textfield
            const selectedInput = document.querySelectorAll<HTMLInputElement>("input[type='number'");
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
        
        const checkButtonArr = ['check-btn-0','check-btn-1','check-btn-2','check-btn-3','check-btn-4','check-btn-5','check-btn-6','check-btn-7','check-btn-8','check-btn-9', 'check-btn-10', 'check-btn-11', 'check-btn-12']
    

        return (
            <>
                <Container sx={{minWidth: '400px', m: 0}}>
                <Box sx={{ padding: 2}}>
                    <Typography>Choose a Table</Typography>
                    
                    <Button id='level-btn-1' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='1' color={selectedBtn === 1 ? "secondary" : "primary"} onClick={chooseLevel}>1</Button>
                    <Button id='level-btn-2' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='2' color={selectedBtn === 2 ? "secondary" : "primary"} onClick={chooseLevel}>2</Button>
                    <Button id='level-btn-3' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='3' color={selectedBtn === 3 ? "secondary" : "primary"} onClick={chooseLevel}>3</Button>
                    <Button id='level-btn-4' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='4' color={selectedBtn === 4 ? "secondary" : "primary"} onClick={chooseLevel}>4</Button>
                    <Button id='level-btn-5' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='5' color={selectedBtn === 5 ? "secondary" : "primary"} onClick={chooseLevel}>5</Button>
                    <Button id='level-btn-6' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='6' color={selectedBtn === 6 ? "secondary" : "primary"} onClick={chooseLevel}>6</Button>
                    <Button id='level-btn-7' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='7' color={selectedBtn === 7 ? "secondary" : "primary"} onClick={chooseLevel}>7</Button>
                    <Button id='level-btn-8' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='8' color={selectedBtn === 8 ? "secondary" : "primary"} onClick={chooseLevel}>8</Button>
                    <Button id='level-btn-9' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='9' color={selectedBtn === 9 ? "secondary" : "primary"} onClick={chooseLevel}>9</Button>
                    <Button id='level-btn-10' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='10' color={selectedBtn === 10 ? "secondary" : "primary"} onClick={chooseLevel}>10</Button>
                    <Button id='level-btn-11' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='11' color={selectedBtn === 11 ? "secondary" : "primary"} onClick={chooseLevel}>11</Button>
                    <Button id='level-btn-12' variant='contained' sx={{fontSize: 20, fontWeight: 'bold', margin: .5}} value='12' color={selectedBtn === 12 ? "secondary" : "primary"} onClick={chooseLevel}>12</Button>
                   
                </Box>
                <Box sx={{justifyItems: 'center'}}>     
                    {
                        items.map((problem) => (
                        <Paper key={problem.id} elevation={5} sx={{p: 2, m: 2, maxWidth: 250, minWidth: 250}}>
                            <Grid2 container spacing={2} display="flex" justifyContent="center" alignItems="center" textAlign='center' size="grow">
                                <div >
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <div style={{textAlign: 'right', borderBottom: '3px solid black'}}>
                                    <Stack><Typography fontSize={30}>{problem.multiplier}</Typography></Stack>                                 
                                    <Stack><Typography fontSize={30} >x {problem.multiplicant}</Typography> </Stack>   
                                    </div>
                                </div> 
                                <Stack><Typography fontSize={30} textAlign={'right'}>{problem.answer}</Typography></Stack>      
                                </div>                                   
                            </Grid2>
                        </Paper> 
                        )) 
                    }
                </Box>
                </Container>
            </>
        )
}

const MultiplicationTables = () => {
    return (
        <Container sx={{textAlign: 'center'}}>
            <Box style={{justifyItems: 'center'}} sx={{mt: 12}}>
                <Typography>Practice The Multiplication Tables</Typography>
                <MultiplicationTableProblems/>
            </Box>
        </Container>
    )
}

export default MultiplicationTables