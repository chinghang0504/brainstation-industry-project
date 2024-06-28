import { useState } from 'react';
import './App.scss'

function App() {

  const [questionNum, setQuestionNum] = useState(0);

  const data = {
    questions: [
      {
        title: 'Please select your industry.',
        description: '',
        options: [
          { title: 'Retail', description: '' },
          { title: 'Hospitality', description: '' },
          { title: 'Healthcare', description: '' },
          { title: 'Education', description: '' }
        ],
        showMore: ''
      }
    ]
  }

  return (
    <>
    <div className='header'>
      <h1 className='header__title'>{data.questions[questionNum].title}</h1>
      <p className='header__description'>{data.questions[questionNum].description}</p>
    </div>
    <div className='main'>
      <div className='main-container'>
        <p className='main-container__title'>{data.questions[questionNum].options[0].title}</p>
        <p className='main-container__description'>{data.questions[questionNum].options[0].description}</p>
      </div>
      <div className='main-container'>
        <p className='main-container__title'>{data.questions[questionNum].options[1].title}</p>
        <p className='main-container__description'>{data.questions[questionNum].options[1].description}</p>
      </div>
      <div className='main-container'>
        <p className='main-container__title'>{data.questions[questionNum].options[2].title}</p>
        <p className='main-container__description'>{data.questions[questionNum].options[2].description}</p>
      </div>
      <div className='main-container'>
        <p className='main-container__title'>{data.questions[questionNum].options[3].title}</p>
        <p className='main-container__description'>{data.questions[questionNum].options[3].description}</p>
      </div>
    </div>
    </>
  )
}

export default App
