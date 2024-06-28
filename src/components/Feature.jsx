import React, { useState } from 'react'
import './Feature.scss'
import cooking from '../assets/cooking.png'
import copilot from '../assets/copilot.png'
import designer from '../assets/designer.png'
import fitness from '../assets/fitness.png'
import vacation from '../assets/vacation.png'
import briefcase from '../assets/briefcase.png'

const questions = [
  {
    title: 'Business consultant',
    description: 'I can hep design exercise programs & educate on nutrition, health & wellness',
    question: 'What is your industry',
    options: [
      { title: 'Retail', description: 'Selling goods directly to consumers.' },
      { title: 'Hospitality', description: 'Providing services to guests (e.g., hotels, restaurants).' },
      { title: 'Healthcare', description: 'Offering medical services and health-related products.' },
      { title: 'Education', description: 'Providing educational services and training.' },
      { title: 'Manufacturing', description: 'Producing goods from raw materials.' },
      { title: 'Technology', description: 'Developing and distributing tech products and services.' },
      { title: 'Finance', description: 'Managing money and financial services.' },
      { title: 'Other', description: 'Any other industry not listed. Specify if selected.' },
    ],
    answer: 0,
    showMore: '+4 more industries',
  },
  {
    title: '',
    description: '',
    question: 'question 2',
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
      { title: '12', description: 'd12' },
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
  },
  {
    title: '',
    description: '',
    question: 'question 3',
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
      { title: '12', description: 'd12' },
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
  }
];

function Feature() {
  const [questionNum, setQuestionNum] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Click the container
  function clickContainer(num) {
    // Compare the container number and the answer
    if (questions[questionNum].answer === num) {
      let newQuestionNum = questionNum + 1;

      // Change the new question
      if (newQuestionNum < questions.length) {
        setQuestionNum(newQuestionNum);
        setShowMore(false);
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
          <h1 className='header__title'>{questions[questionNum].title}</h1>
          <p className='header__description'>{questions[questionNum].description}</p>
          <p className='header__question'>{questions[questionNum].question}</p>
        </div>
        <div className='main'>
          {!showMore && questions[questionNum].options.slice(0, 4).map((question, index) => {
            return (
              <div className='main-container button' onClick={() => clickContainer(index)}>
                <p className='main-container__title'>{question.title}</p>
                <p className='main-container__description'>{question.description}</p>
              </div>
            )
          })}
          {showMore && questions[questionNum].options.map((question, index) => {
            return (
              <div className='main-container button' onClick={() => clickContainer(index)}>
                <p className='main-container__title'>{question.title}</p>
                <p className='main-container__description'>{question.description}</p>
              </div>
            )
          })}
          <p className='main__show-more button__more' onClick={clickShowMore}>{!showMore && questions[questionNum].showMore}</p>
        </div>
      </div>
    </>
  )
}

export default Feature