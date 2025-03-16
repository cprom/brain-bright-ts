function generateAdditionProblem(max : number, min: number, id : number) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let level: number;
    
    switch (true) {
      case max <= 10:
          level = 1;
          break; 
      case max >= 10 && max <= 20:
          level = 2;
          break; 
      case max >= 20 && max <= 30:
          level = 3;
          break; 
      case max >= 30 && max <= 40:
          level = 4;
          break; 
      case max >= 40 && max <= 50:
          level = 5;
          break; 
      case max >= 50 && max <= 60:
          level = 6;
          break; 
      case max >= 60 && max <= 70:
          level = 7;
          break; 
      case max >= 70 && max <= 80:
          level = 8;
          break; 
      case max >= 80 && max <= 90:
          level = 9;
          break; 
      case max >= 90 && max <= 100:
          level = 10;
          break; 
    }
    return {
      id: id,
      problem: `${num1} + ${num2} = `,
      answer: num1 + num2,
      inputValue: '',
      level: level
    };
  }
  
 function generateMultipleProblems(numProblems: number,  min: number, max: number) {
      const problems = [];
      for (let i = 0; i < numProblems; i++) {
          problems.push(generateAdditionProblem(max, min, i));
      }
      return problems
  }


 

  export default generateMultipleProblems