import React, { useEffect } from 'react'
import Collapsible from 'react-collapsible'

const faqQuestions = [
  {
    question: 'How many NFTs are available?',
    answer: 'Need to add questions',
  },
  {
    question: 'How do I mint a GoldenDAO founding member NFT?',
    answer: 'Need to add questions',
  },
  {
    question: 'How can I become a founding member?',
    answer: 'Need to add questions',
  },
  {
    question: 'If I’m unable to purchase one of the NFTs upon public sale, how else can I become a member?',
    answer: 'Need to add questions',
  },
  {
    question: 'How much will the NFT cost?',
    answer: 'Need to add questions',
  },
  {
    question: 'How long am I a member for?',
    answer: 'Need to add questions',
  },
  {
    question: 'Can I attend GoldenDAO events if I do not have an NFT membership key?',
    answer: 'Need to add questions',
  },
  {
    question: 'When do I receive the GoldenDAO member ring?',
    answer: 'Need to add questions',
  },
  {
    question: 'Are there differences in membership benefits between presale, public sale, and reserve?',
    answer: 'Need to add questions',
  },
]
export default function Faq(props) {
  return (
    <div className={`faq-wrapper space-y-[40px] ${props.className ? props.className : ''}`}>
      {faqQuestions.map((faq, index) => {
        return (
          <Collapsible key={index} trigger={faq.question} transitionTime={200}>
            <p>{faq.answer}</p>
          </Collapsible>
        )
      })}
    </div>
  )
}
