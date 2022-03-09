import React from 'react'
import dynamic from 'next/dynamic'

const Collapsible = dynamic(
  import('react-collapsible').then(mod => mod),
  { ssr: false }
)

const faqQuestions = [
  {
    question: 'How do I mint a GoldenDAO founding member NFT?',
    answer: [
      'Step 1: Download MetaMask (preferred), or other compatible wallet (WalletConnect, Trezor, Ledger, etc.)',
      'Step 2: Fund your MetaMask by sending ETH from your Coinbase or other cryptocurrency wallet (see below on how to purchase ETH)',
      'Step 3: Connect your wallet here before our sale',
      'Step 4: Once wallet is connected and authorized, click add to cart during our sale',
      'Step 5: Review transaction details and complete purchase',
    ],
  },
  {
    question: 'How can I become a founding member?',
    answer: [
      'You can become a founding member by purchasing one of our limited NFT gated founding membership keys on our website when the public sale launches. Stay tuned for more details and announcements for the public sale by following our social media (insert social links here)',
    ],
  },
  {
    question: 'If I’m unable to purchase one of the NFTs upon public sale, how else can I become a member?',
    answer: [
      'Founding membership keys are exclusive to the initial launch. They will be continue to be available for purchase from a secondary market (i.e. OpenSea)',
    ],
  },
  {
    question: 'How much will the NFT cost?',
    answer: ['1 ETH plus gas fees.'],
  },
  {
    question: 'How long am I a member for?',
    answer: [
      'You are a member for as long as you hold the membership key. Membership will be transferred to the new owner of the NFT if sold (available to be exchanged via secondary market).',
    ],
  },
  {
    question: 'Can I attend GoldenDAO events if I do not have an NFT membership key?',
    answer: [
      'Currently, all planned events in-person and virtually are exclusively held for GoldenDAO members and partners. We plan on expanding membership for our Season 2 NFT drop (see roadmap for details). Membership will continue to be available for individuals via the secondary market (i.e. OpenSea)',
    ],
  },
  {
    question: 'When do I receive the GoldenDAO member ring?',
    answer: [
      'You must be a member (have the NFT in your wallet) in the designated month that the signet rings would be delivered to be able to receive one.',
    ],
  },
  {
    question: 'Are there differences in membership benefits between presale, public sale, and reserve?',
    answer: ['No. All NFT holders will receive the same benefits, including the gifted physical custom signet ring.'],
  },
  {
    question: 'When can I mint the NFT?',
    answer: [
      'Our presale date will be on 3/21/22 and our public sale date will be on 3/25/22. Stay tuned for announcements on Twitter and Discord for exact sale time windows.',
    ],
  },
]
export default function Faq(props) {
  return (
    <div className={`faq-wrapper space-y-[40px] ${props.className ? props.className : ''}`}>
      {faqQuestions.map((faq, index) => {
        return (
          <Collapsible key={index} trigger={faq.question} transitionTime={200}>
            {faq.answer.map(item => (
              <p>{item}</p>
            ))}
          </Collapsible>
        )
      })}
    </div>
  )
}
