const questionDisplay = document.getElementById('questions')
const answerDisplay = document.getElementById('answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1617688319108-cb3bdc88f587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
                alt: "Photo of the Empire State Building during daytime",
                credit: "Christian Ladewig"
            },
            {
                text: "Paris",
                image: "https://images.unsplash.com/photo-1542654071-7ded22488685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                alt: "Photo of the Eiffel Tower at night",
                credit: "Lucas Albuquerque"
            },
            {
                text: "Dubai",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of Downtown Dubai and Burj Khalifa",
                credit: "David Rodrigo"
            },
            {
                text: "Maldives",
                image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Maldives waters",
                credit: "Chelsea Gates"  
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers : [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of some Pizza",
                credit: "Ivan Torres"  
            },
            {
                text: "Chicken",
                image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
                alt: "Photo of fried chicken",
                credit: "Chad Montano"  
            },
            {
                text: "Indomie",
                image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of a bowl of indomie noodles",
                credit: "ikshan baihaqi"  
            },
            {
                text: "Puff Puff",
                image: "https://images.unsplash.com/photo-1665833613236-7c1d087463b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of puff puff",
                credit: "Keesha's Kitchen"  
            }
        ]
    },
    {
        id: 2,
        text: "Pick a device:",
        answers: [
            {
                text: "Nokia 3310",
                image: "https://images.unsplash.com/photo-1609170513994-1c8135e06ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                alt: "Photo of Nokia 3310",
                credit: "Ashutosh Singh Rana"  
            },
            {
                text: "iPad Pro",
                image: "https://images.unsplash.com/photo-1627372129933-9abc19b91f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of iPad Pro",
                credit: "refargotohp" 
            },
            {
                text: "iPhone 14 Pro Max",
                image: "https://images.unsplash.com/photo-1667862714309-359b48ec1f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of iPhone 14 Pro Max",
                credit: "GENTCREATE PHOTOGRAPHY" 
            },
            {
                text: "Macbook",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
                alt: "Photo of a Macbook",
                credit: "Dmitry Chernyshov" 
            }
        ]
    },
    {
        id: 3,
        text: "Pick a career:",
        answers: [
            {
                text: "Writer",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of a woman writing",
                credit: "Unseen Studio"  
            },
            {
                text: "Content Creator",
                image: "https://images.unsplash.com/photo-1627244714766-94dab62ed964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
                alt: "Photo of a man editing a video",
                credit: "Nubelson Fernandes" 
            },
            {
                text: "Computer Scientist",
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of Codes on a laptop",
                credit: "Florian Olivo" 
            },
            {
                text: "Rich Housewife",
                image: "https://images.unsplash.com/photo-1622600067615-76de6595c7df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                alt: "Photo of Woman in a Flower Garden",
                credit: "Zachary Kadolph" 
            }
        ]
    },
    {
        id: 4,
        text: "Pick a date idea:",
        answers: [
            {
                text: "Candle lit dinner",
                image: "https://images.unsplash.com/photo-1514436598301-27a65f40469f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80",
                alt: "Photo of Candle lit diner setting",
                credit: "Jaclyn Moy"  
            },
            {
                text: "Netflix and Chill",
                image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
                alt: "Photo of television with netflix on",
                credit: "Thibault Penin" 
            },
            {
                text: "Study Date",
                image: "https://images.unsplash.com/photo-1525708827920-7d53586a1ab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "A book with a flower on it",
                credit: "Rachael Coyne" 
            },
            {
                text: "Carnival Date",
                image: "https://images.unsplash.com/photo-1648484284451-b0977b477a4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
                alt: "Photo of a couple at a carnival",
                credit: "Maria Oswalt" 
            }
        ]
    },
    {
        id: 5,
        text: "Pick a wedding dress:",
        answers: [
            {
                text: "Classy",
                image: "https://images.unsplash.com/photo-1595868321403-bac51fbdeb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of a wedding dress",
                credit: "Taylor Heery"  
            },
            {
                text: "Flowy",
                image: "https://images.unsplash.com/photo-1549416878-b9ca95e26903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of a wedding dress",
                credit: "Maria Orlova" 
            },
            {
                text: "Princessy",
                image: "https://images.unsplash.com/photo-1562275211-9543b6c6f703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of Wedding Dress",
                credit: "Johnathan Borba" 
            },
            {
                text: "Simple",
                image: "https://images.unsplash.com/photo-1628046276142-a614ec8c5504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of a wedding dress",
                credit: "Johnathan Borba" 
            }
        ]
    },
    {
        id: 6,
        text: "Pick a quote:",
        answers: [
            {
                text: "Nothing is Impossible",
                image: "https://images.unsplash.com/photo-1567677917221-3229fddf8d73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of Neon Sign",
                credit: "Marija Zaric"  
            },
            {
                text: "Please Smile At Strangers",
                image: "https://images.unsplash.com/photo-1593624859907-dfe61e03dbeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                alt: "Photo of neon sign",
                credit: "Nikki S" 
            },
            {
                text: "Do It Together Never Alone",
                image: "https://images.unsplash.com/photo-1562541996-dc329febcdbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
                alt: "Photo of a Neon Sign",
                credit: "Cory Billingsley" 
            },
            {
                text: "I Have A Crush On You",
                image: "https://images.unsplash.com/photo-1534515729281-5ddf2c470538?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                alt: "Photo of a Neon Sign",
                credit: "Leonardo Sanches" 
            }
        ]
    },
    {
        id: 7,
        text: "Pick a rose:",
        answers: [
            {
                text: "Pink Roses",
                image: "https://images.unsplash.com/photo-1527683761419-a124d1a58361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
                alt: "Photo of a Pink Rose",
                credit: "Al Soot"  
            },
            {
                text: "White Roses",
                image: "https://images.unsplash.com/photo-1484639726803-f17534cedb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80",
                alt: "Photo of White Rose",
                credit: "Annie Spratt" 
            },
            {
                text: "Red Roses",
                image: "https://images.unsplash.com/photo-1588735451451-e97661938cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of Red Rose",
                credit: "Ziko liu" 
            },
            {
                text: "Black Roses",
                image: "https://images.unsplash.com/photo-1629694242280-20637c63285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of a Black Rose",
                credit: "Adrian Regeci" 
            }
        ]
    },
    {
        id: 8,
        text: "Pick a drink:",
        answers: [
            {
                text: "Beer",
                image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of Beer",
                credit: "engin akyurt"  
            },
            {
                text: "Tequila",
                image: "https://images.unsplash.com/photo-1612906515356-7792f4ee2cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                alt: "Photo of Tequila",
                credit: "Garreth Paul" 
            },
            {
                text: "Red wine",
                image: "https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                alt: "Photo of Red Wine",
                credit: "Samen Taheri" 
            },
            {
                text: "Scotch",
                image: "https://images.unsplash.com/photo-1607195698542-1b6ce715b2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of Scotch",
                credit: "YesMore Content" 
            }
        ]
    },
    {
        id: 9,
        text: "Pick an element:",
        answers: [
            {
                text: "Fire",
                image: "https://images.unsplash.com/photo-1489275960192-edc747009a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of Fire",
                credit: "Chris Rhoads"  
            },
            {
                text: "Water",
                image: "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                alt: "Photo of Water",
                credit: "David Becker" 
            },
            {
                text: "Air",
                image: "https://images.unsplash.com/photo-1499937405357-13aa5449e360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                alt: "Photo of Air",
                credit: "Tatiana Zhukova" 
            },
            {
                text: "Earth",
                image: "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                alt: "Photo of a Rock",
                credit: "Zoltan Tasi" 
            }
        ]
    }
]

const result = [
    {
        text: "Blueberry Icecream",
        image: "https://images.unsplash.com/photo-1627222295124-f8b3fc09e47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80",
        alt: "Blue Icecream"
    }, 
    {
        text: "Strawberry Icecream",
        image: "https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        alt: "Strawberry Icecream"
    },
    {
        text: "Chocolate Icecream",
        image: "https://images.unsplash.com/photo-1514849302-984523450cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        alt: "Chocolate Icecream"
    },
    {
        text: "Vanilla Icecream",
        image: "https://images.unsplash.com/photo-1593250186288-f06f69859f8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        alt: "Vanilla Icecream"
    },
    {
        text: "Blueberry Icecream",
        image: "https://images.unsplash.com/photo-1627222295124-f8b3fc09e47f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80",
        alt: "Blue Icecream"
    },
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text

        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => 
                handleClick(question.id, answer.text))

            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId)){
        chosenAnswers.push(chosenAnswer)
    }
        const itemToRemove = unansweredQuestions.indexOf(questionId)

        if (itemToRemove > - 1){
            unansweredQuestions.splice(itemToRemove, 1)
        }

    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)

    if(!unansweredQuestions.length) {
        // scroll to answer div
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let output = result[Math.floor(Math.random() * result.length)]
    
    const resultBlock = document.createElement('div')
    resultBlock.classList.add('result-block')

    const resultTitle = document.createElement('h3')
    resultTitle.textContent = output.text

    const resultImage = document.createElement('img')
    resultImage.setAttribute('src', output.image)
    resultImage.setAttribute('alt', output.alt)

    resultBlock.append(resultTitle, resultImage)

    answerDisplay.append(resultBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => 
        answerBlock.replaceWith(answerBlock.cloneNode(true)))

    showGame(output)
    location.href = '#game'
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")


    Array.from(currentQuestionBlock.children).forEach(block => {
        if(block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}

const showGame = (output) => {
    const gameBox = document.createElement('div')
    gameBox.classList.add('game-box')
    gameBox.id = 'game'

    const gameName = document.createElement('p')

    const gameLink = document.createElement('a')

    gameBox.append(gameName)
    answerDisplay.append(gameBox)

    if (output.text === "Blueberry Icecream") {
        gameName.textContent = "Your game is Wordle"

        gameLink.textContent = "Click here"
        gameLink.setAttribute("href", "https://onanuviie.github.io/Wordle-Clone/")
        gameBox.append(gameLink)
    }

    else if (output.text === "Vanilla Icecream") {
        gameName.textContent = "Your game is Word Association"

        gameLink.textContent = "Click here"
        gameLink.setAttribute("href", "https://onanuviie.github.io/word-association-game/")
        gameBox.append(gameLink)
    }

    else {
        gameName.textContent = "Your game is Tic Tac Toe"

        gameLink.textContent = "Click here"
        gameLink.setAttribute("href", "https://onanuviie.github.io/tic-tac-toe/")
        gameBox.append(gameLink)
    }
    
}