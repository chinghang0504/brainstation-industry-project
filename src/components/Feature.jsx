import React, { useState } from 'react'
import './Feature.scss'
import cooking from '../assets/cooking.png'
import copilot from '../assets/copilot.png'
import designer from '../assets/designer.png'
import fitness from '../assets/fitness.png'
import vacation from '../assets/vacation.png'
import briefcase from '../assets/briefcase.png'

const data = {
  questions: [
    {
      title: 'Please select your industry.',
      description: '',
      question: '',
      options: [
        { title: 'Retail', description: 'd1' },
        { title: 'Hospitality', description: 'd2' },
        { title: 'Healthcare', description: 'd3' },
        { title: 'Education', description: 'd4' }
      ],
      answer: 0,
      showMore: '+19 more industries',
      showLess: 'show less',
    },
    {
      title: 'xxx',
      description: '',
      question: '',
      options: [
        { title: '1', description: 'd1' },
        { title: '2', description: 'd2' },
        { title: '3', description: 'd3' },
        { title: '4', description: 'd4' },
        { title: '5', description: 'd5' },
        { title: '6', description: 'd6' },
        { title: '7', description: 'd7' },
        { title: '8', description: 'd8' },
        { title: '9', description: 'd9' },
        { title: '10', description: 'd10' },
        { title: '11', description: 'd11' },
        { title: '12', description: 'd12' }
      ],
      answer: 0,
      showMore: '+19 more industries',
      showLess: 'show less',
    }
  ]
};

function Feature() {
  const [questionNum, setQuestionNum] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Click the container
  function clickContainer(num) {
    // Compare the container number and the answer
    if (data.questions[questionNum].answer === num) {
      let newQuestionNum = questionNum + 1;

      // Change the new question
      if (newQuestionNum < data.questions.length) {
        setQuestionNum(newQuestionNum);
      }
    }
  }

  // Click the show more
  function clickShowMore() {
    setShowMore(!showMore);
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

      <div className='feature__main'>
        <div className='header'>
          <h1 className='header__title'>{data.questions[questionNum].title}</h1>
          <p className='header__description'>{data.questions[questionNum].description}</p>
          <p className='header__question'>{data.questions[questionNum].question}</p>
        </div>
        <div className='main'>
          { !showMore && data.questions[questionNum].options.slice(0, 4).map((question, index) => {
            return (
              <div className='main-container button' onClick={() => clickContainer(index)}>
                <p className='main-container__title'>{question.title}</p>
                <p className='main-container__description'>{question.description}</p>
              </div>
            )
          })}
          {showMore && data.questions[questionNum].options.map((question, index) => {
            return (
              <div className='main-container button' onClick={() => clickContainer(index)}>
                <p className='main-container__title'>{question.title}</p>
                <p className='main-container__description'>{question.description}</p>
              </div>
            )
          })}
          <p className='main__show-more button__more' onClick={clickShowMore}>{!showMore && data.questions[questionNum].showMore}</p>
          <p className='main__show-less button__more' onClick={clickShowMore}>{showMore && data.questions[questionNum].showLess}</p>
        </div>
      </div>
    </>
  )
}

export default Feature