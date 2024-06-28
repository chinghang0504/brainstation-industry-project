import React, { useState } from 'react'
import './Feature.scss'
import cooking from '../assets/cooking.png'
import copilot from '../assets/copilot.png'
import designer from '../assets/designer.png'
import fitness from '../assets/fitness.png'
import vacation from '../assets/vacation.png'
import briefcase from '../assets/briefcase.png'
import Question from './Question/Question'

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

  // Click the container
  function clickContainer(num) {
    // Compare the container number and the answer
    if (questions[questionNum].answer === num) {
      let newQuestionNum = questionNum + 1;

      // Change the new question
      if (newQuestionNum < questions.length) {
        setQuestionNum(newQuestionNum);
      }
    }
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
        {questions.map((question, index) => {
          return (
            <Question key={index} question={question} clickContainer={clickContainer} style={{display: index <= questionNum ? 'block' : 'none'}} />
          )
        })}
      </div>
    </>
  )
}

export default Feature