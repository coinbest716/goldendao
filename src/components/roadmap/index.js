import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

const roadmapConts = [
  {
    date: 'February 2022',
    content: 'Andrew Yang public announcement',
  },
  {
    date: 'March 2022',
    content: 'NFT founding membership key public sale + POAP launch',
  },
  {
    date: 'MARCH 2022',
    content:
      'NFT gated Discord chat invite to founding members, collaborating and contributing to the future of GoldenDAO',
  },
  {
    date: 'MARCH 2022',
    content: 'Reveal Day',
  },
  {
    date: 'MARCH 2022',
    content:
      'In-person launch party exclusively for founding members, hosted by Andrew Yang, with special guests, celebrity appearances and performances and GoldenDAO sponsors',
  },
  {
    date: 'APRIL 2022',
    content: 'GoldenDAO members meet-up in Miami for bitcoin conference',
  },
  {
    date: 'MAY 2022',
    content: 'Season 2 NFT launch',
  },
  {
    date: 'MAY 2022',
    content:
      'DAO community expansion - after GoldenDAO’s infrastructure is complete, the DAO will vote on how proceeds in the community wallet will be used. GoldenDAO will have a treasury aimed to fund AAPI empowerment projects, community initiatives, and further GoldenDAO’s mission.',
  },
  {
    date: 'MAY 2022',
    content:
      'GoldenDAO vote on brand equity growth, partnerships, and logo usage. Potential, but not limited-to opportunities include: <p style="margin-left:30px;">• GoldenDAO metaverse outpost• GoldenDAO wearable tech\n • GoldenDAO physical location in major cities (NYC, LA,MIA, etc.) used as a hub for members and partners.\n • GoldenDAO x specific partnerships (cross community and project engagement, brand partnerships, etc.)</p>',
  },
  {
    date: 'JUNE 2022',
    content: 'GoldenDAO party in NYC for NFT week',
  },
  {
    date: 'SEPTEMBER 2022',
    content: 'Autumn Moon Festival GoldenDAO membership in-person event hosted in LA (location subject to change)',
  },
  {
    date: 'NOVEMBER 2022',
    content:
      'GoldenDAO custom gold plated signet ring gifted to founding members, cross matching # of minted NFT (i.e. #888, #747, #1) <a class="roadmap-content-link text-lightest_gold">View 3D rendering of ring</a>',
  },
  {
    date: '2023',
    content: 'International expansion targeting cities such as Singapore, Jakarta, Seoul, Hong Kong, and more to come',
  },
]
export default function Roadmap(props) {
  const onCallback = () => {}
  const timeline = useRef(null)
  let initalArray = []
  let diamondsRefs = []
  for (var i = 0; i < 13; i++) {
    initalArray.push('')
  }
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))
  diamondsRefs.push(useRef(null))

  const [timePonints, setTimePointsArray] = useState(initalArray)
  let halfScreenHeight = null

  const animation = () => {
    if (timeline.current != null) {
      const rect = timeline.current.getBoundingClientRect()
      if (rect.top - 200 > halfScreenHeight || rect.bottom + 200 < halfScreenHeight) {
        //reduce too many calculations on unnecessary part
        return
      }
      window.requestAnimationFrame(() => {
        const initialColor = '#898783'
        const fillColor = '#895F1F'
        handleDiamonds()
        const rect = timeline.current.getBoundingClientRect()
        if (rect.bottom > halfScreenHeight && rect.top < halfScreenHeight) {
          const depthPx = rect.bottom - halfScreenHeight
          const depthPercent = (depthPx * 100) / rect.height
          timeline.current.style.background = `linear-gradient(to top, ${initialColor} ${depthPercent}%, ${fillColor} ${depthPercent}% 100%)`
          timeline.current.style.transform = 'translateZ(0)'
        } else if (rect.bottom < halfScreenHeight) {
          timeline.current.style.background = `linear-gradient(to top, ${initialColor} 0%, ${fillColor} 0% 100%)`
          timeline.current.style.transform = 'translateZ(0)'
        } else if (rect.top > halfScreenHeight) {
          timeline.current.style.background = `linear-gradient(to top, ${initialColor} 100%, ${fillColor} 100% 100%)`
          timeline.current.style.transform = 'translateZ(0)'
        }
      })
    }
  }

  const handleDiamonds = () => {
    if (diamondsRefs != null) {
      diamondsRefs.map((item, index) => {
        const rect = item.current.getBoundingClientRect()
        if (rect.top < halfScreenHeight) {
          setTimePointsArray(prev => {
            prev[index] = 'active'
            return [...prev]
          })
        } else if (rect.top > halfScreenHeight) {
          setTimePointsArray(prev => {
            prev[index] = ''
            return [...prev]
          })
        }
      })
    }
  }

  const handleResize = () => {
    halfScreenHeight = window?.innerHeight / 2
  }

  useEffect(() => {
    halfScreenHeight = window?.innerHeight / 2
    window.addEventListener('resize', handleResize)
    document.addEventListener('scroll', animation)
    return () => {
      document.removeEventListener('scroll', animation)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`roadmap-wrapper ${props.className ? props.className : ''}`}>
      <div className="roadmap-list pl-[16px] space-y-[40px]">
        <div ref={timeline} className="timeline mt-[2px]" />
        {roadmapConts.map((item, index) => (
          <div
            key={index}
            ref={diamondsRefs[index]}
            className={`roadmap-list-item grid sm:grid-cols-3 grid-cols-1 relative ${timePonints[index]}`}
          >
            <span className="md:ml-[32px] sm:ml-[8px] ml-[16px] col-span-1 text-[18px] text-lightest_gold">
              {item.date}
            </span>
            <div
              className="item-content col-span-2 md:pl-[8px] pl-[16px] text-white"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
