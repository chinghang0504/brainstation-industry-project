import { useState } from 'react';
import './Question.scss';

function Question(props) {
    const question = props.question;
    const style = props.style;
    const clickContainer = props.clickContainer;
    const [showMore, setShowMore] = useState(false);

    // Click the show more
    function clickShowMore() {
        setShowMore(true);
    }

    return (
        <div className='question' style={style}>
            <div className='header'>
                <h1 className='header__title'>{question.title}</h1>
                <p className='header__description'>{question.description}</p>
                <p className='header__question'>{question.question}</p>
            </div>
            <div className='main'>
                {!showMore && question.options.slice(0, 4).map((question, index) => {
                    return (
                        <div key={index} className='main-container button' onClick={(event) => clickContainer(event, index)}>
                            <p className='main-container__title'>{question.title}</p>
                            <p className='main-container__description'>{question.description}</p>
                        </div>
                    )
                })}
                {showMore && question.options.map((question, index) => {
                    return (
                        <div key={index} className='main-container button' onClick={(event) => clickContainer(event, index)}>
                            <p className='main-container__title'>{question.title}</p>
                            <p className='main-container__description'>{question.description}</p>
                        </div>
                    )
                })}
                <p className='main__show-more button__more' onClick={clickShowMore}>{!showMore && question.showMore}</p>
            </div>
        </div>
    )
}

export default Question