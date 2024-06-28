import React, { useRef, useState } from 'react'
import './Feature.scss'
import cooking from '../assets/cooking.png'
import copilot from '../assets/copilot.png'
import designer from '../assets/designer.png'
import fitness from '../assets/fitness.png'
import vacation from '../assets/vacation.png'
import briefcase from '../assets/briefcase.png'
import Question from './Question/Question'
import ResultImage from '../assets/response.png'

const questions = [
  {
    title: 'Business consultant',
    description: 'I can help guide decisions, and drive growth with tailored insights and prompts.',
    question: 'What is your industry',
    options: [
      { title: 'Retail'},
      { title: 'Hospitality'},
      { title: 'Healthcare'},
      { title: 'Education'},
      { title: 'Manufacturing'},
      { title: 'Technology'},
      { title: 'Finance'},
    ],
    answer: 0,
    showMore: '+ 3 more industries',
  },
  {
    title: '',
    description: '',
    question: 'What area of your business do you want to focus on',
    options: [
      { title: 'Marketing'},
      { title: 'Sales'},
      { title: 'Human Resources'},
      { title: 'Legal & Compilance'},
    ],
    answer: 0,
    showMore: '+ 8 more areas',
  },
  {
    title: '',
    description: '',
    question: 'Which Marketing Areas',
    options: [
      { title: 'Customer Retention Strategy' },
      { title: 'Storefront Optimizations' },
      { title: 'Digital Marketing' },
      { title: 'Seasonal Marketing Campaigns' },
    ],
    answer: 0,
    showMore: '+ 8 more areas',
  },
  {
    title: '',
    description: '',
    question: 'Digital Marketing Strategy Prompts',
    options: [
      { title: '', description: '“What strategies should I use for online advertising to promote my [type of retail] business on platforms like [Google Ads], ensuring a high return on investment?”' },
      { title: '', description: '“What are the best practices for creating an email marketing campaign for my [type of retail] store, aiming to boost customer retention and drive repeat purchases?”' },
      { title: '', description: '“How can I develop an effective social media marketing strategy for my [industry] business, focusing on platforms like [Facebook] to increase brand awareness and customer engagement?”' },
      { title: '', description: '“How can I optimize my [type of retail] store’s website to increase conversions and reduce bounce rates?”' },
    ],
    answer: 0,
    showMore: '+ Show More',
  }
];

function Feature() {
  const [questionNum, setQuestionNum] = useState(0);
  const imageRef = useRef();
  const [showResult, setShowResult] = useState(false);

  // Click the container
  function clickContainer(event, num) {
    console.log(event.target);
    event.target.classList.toggle("active");

    // Compare the container number and the answer
    if (questions[questionNum].answer === num) {
      let newQuestionNum = questionNum + 1;

      // Change the new question
      if (newQuestionNum < questions.length) {
        setQuestionNum(newQuestionNum);
      } else if (newQuestionNum === questions.length) {
        setShowResult(true);
      }
    }
  }

  return (
    <>
      <label htmlFor="textBox" className='feature'>
        <input id='textBox' className='feature__input' type="text" placeholder='Ask me anything...' />
      </label>

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
        <img className='result-image' src={ResultImage} ref={imageRef} style={{display: showResult ? 'block' : 'none'}} />
      </div>
      
    </>
  )
}

export default Feature