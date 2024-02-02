let students = [
  {
    name:'Amanda',
    testOne: 8,
    testTwo:9,
  },

  {
    name:'Gabriel',
    testOne: 4,
    testTwo: 6,
  },

  {
    name:'Esther',
    testOne: 8,
    testTwo: 5,
  },
]

function calculateMedia(testOne, testTwo) {
  return (testOne + testTwo) /2
}

function checkMedia(student) {
  let media = calculateMedia(student.testOne, student.testTwo)
  if(media >= 7) {
    alert(`A média do aluno ${student.name} é: ${media}\nParabéns ${student.name}, você foi aprovado(a) no consurso!`)
  }else {
    alert(`A media do aluno ${student.name} é: ${media}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
  }

}

for(let student of students) {
  let mediaStudent = checkMedia(student)
}