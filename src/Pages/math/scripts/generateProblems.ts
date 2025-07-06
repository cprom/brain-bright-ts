function generateAdditionProblem(max : number, min: number, id : number) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    return {
      id: id,
      num1: num1,
      num2: num2,
      answer: num1 + num2,
      inputValue: '',
      
    };
  }

  function generateSubtractionProblem(max : number, min: number, id : number) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    const maxNumber = Math.max(num1, num2);
    const minNumber = Math.min(num1, num2);


    return {
      id: id,
      num1: maxNumber,
      num2: minNumber,
      answer: maxNumber - minNumber,
      inputValue: '',
      
    };
  }

  function generateMultiplicationProblem(max : number, min: number, id : number) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    const maxNumber = Math.max(num1, num2);
    const minNumber = Math.min(num1, num2);


    return {
      id: id,
      num1: maxNumber,
      num2: minNumber,
      answer: maxNumber * minNumber,
      inputValue: '',
      
    };
  }

  function generateDivisionProblem(max : number, min: number, id : number) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    const maxNumber = Math.max(num1, num2);
    const minNumber = Math.min(num1, num2);


    return {
      id: id,
      num1: maxNumber,
      num2: minNumber,
      answer: maxNumber / minNumber,
      inputValue: '',
      
    };
  }

  
 export function generateMultipleAdditionProblems(numProblems: number,  min: number, max: number) {
      const problems = [];
      for (let i = 0; i < numProblems; i++) {
          problems.push(generateAdditionProblem(max, min, i));
      }
      return problems
  }

export function generateMultipleSubtractionProblems(numProblems: number,  min: number, max: number) {
      const problems = [];
      for (let i = 0; i < numProblems; i++) {
          problems.push(generateSubtractionProblem(max, min, i));
      }
      return problems
  }

  export function generateMultipleMultiplicationProblems(numProblems: number,  min: number, max: number) {
    const problems = [];
    for (let i = 0; i < numProblems; i++) {
        problems.push(generateMultiplicationProblem(max, min, i));
    }
    return problems
}

  export function generateMultipleDivisionProblems(numProblems: number,  min: number, max: number) {
    const problems = [];
    for (let i = 0; i < numProblems; i++) {
        problems.push(generateDivisionProblem(max, min, i));
    }
    return problems
}

 

