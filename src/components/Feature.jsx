import React, { useState } from 'react'
import './Feature.scss'
import cooking from '../assets/cooking.png'
import copilot from '../assets/copilot.png'
import designer from '../assets/designer.png'
import fitness from '../assets/fitness.png'
import vacation from '../assets/vacation.png'
import briefcase from '../assets/briefcase.png'

function Feature() {
  const [questionNum, setQuestionNum] = useState(0);

  function clickQuestion() {
    setQuestionNum(questionNum + 1);
    console.log('AAA');
  }

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
      },
      {
        title: 'xxx',
        description: '',
        options: [
          { title: '1', description: '' },
          { title: '2', description: '' },
          { title: '3', description: '' },
          { title: '4', description: '' },
          { title: '5', description: '' },
          { title: '6', description: '' },
          { title: '7', description: '' },
          { title: '8', description: '' },
          { title: '9', description: '' },
          { title: '10', description: '' },
          { title: '11', description: '' },
          { title: '12', description: '' }
        ],
        showMore: ''
      }
    ]
  }

  return (
    <>
      <div className='feature'>
        <input className='feature__input' type="text" placeholder='Ask me anything...' />
      </div>

      <div className='feature__side'>
        <div className="feature__side-elem">
          <img src={copilot} className="feature__elem-img"></img>
          <p className="feature__desc">Copilot</p>
        </div>
        <div className="feature__side-elem">
          <img src={designer} className="feature__elem-img"></img>
          <p className="feature__desc">Designer</p>
        </div>
        <div className="feature__side-elem">
          <img src={vacation} className="feature__elem-img"></img>
          <p className="feature__desc">Vacation planner</p>
        </div>
        <div className="feature__side-elem">
          <img src={cooking} className="feature__elem-img"></img>
          <p className="feature__desc">Cooking assistant</p>
        </div>
        <div className="feature__side-elem">
          <img src={fitness} className="feature__elem-img"></img>
          <p className="feature__desc">Fitness trainer</p>
        </div>
        <div className="feature__side-elem feature__side-elem--active">
          <img src={briefcase} className="feature__elem-img"></img>
          <p className="feature__desc">Business consultant</p>
        </div>
      </div>

      <div className='feature__main' onClick={clickQuestion}>
        <div className='header'>
          <h1 className='header__title'>{data.questions[questionNum].title}</h1>
          <p className='header__description'>{data.questions[questionNum].description}</p>
        </div>
        <div className='main'>
          {data.questions[questionNum].options.map(question => {
            return (
              <div className='main-container'>
                <p className='main-container__title'>{question.title}</p>
                <p className='main-container__description'>{question.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Feature