const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 92 },
    { name: 'Emma', score: 85 },
    { name: 'Frank', score: 78 },
    { name: 'Grace', score: 92 }
  ];
  
  function countScoreFrequency(studentScores) {
    return studentScores.reduce((acc, student) => {
      if (acc[student.score]) {
        acc[student.score]++;
      } else {
        acc[student.score] = 1;
      }
      return acc;
    }, {}); 
  }
  
  console.log(countScoreFrequency(studentScores));
  
