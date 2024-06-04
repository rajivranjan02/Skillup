import React, { useState } from 'react';
import '../style/faq.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: 'What types of courses do you offer?',
      answer: 'We offer a wide range of courses covering various subjects, including programming, design, business, language learning, and more. Our curriculum is designed to cater to diverse interests and skill levels.',
    },
    {
      id: 2,
      question: 'How do I enroll in a course?',
      answer: 'Enrolling in a course is easy! Simply browse our course catalog, find the course youre interested in, and click on the "Enroll" button. Youll be guided through the registration process.',
    },
    {
      id: 3,
      question: 'Do you offer any free courses?',
      answer: 'Yes, we have a selection of free courses available to help you get started or explore new topics. Check our course catalog for the free offerings.',
    },
    {
      id: 4,
      question: 'What is the learning format?',
      answer: 'Our courses are delivered through a combination of video lectures, interactive exercises, quizzes, and projects. Youll have access to course materials, resources, and instructor support throughout your learning journey.',
    },
    {
      id: 5,
      question: 'Do you provide certificates upon completion?',
      answer: 'Absolutely! Upon successful completion of a course, youll receive a certificate that you can showcase your achievement and newly acquired skills.',
    },
    {
      id: 6,
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit cards, PayPal, and other popular online payment systems. The available options will be displayed during the checkout process.',
    },
  ]);

  const toggleFAQ = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div
              className={`faq-question-container ${faq.open ? 'active' : ''}`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <button className="faq-question">{faq.question}</button>
              <span className={faq.open ? 'arrow down' : 'arrow'}></span>
            </div>
            {faq.open && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;