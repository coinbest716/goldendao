import React, { useEffect, useState } from 'react'

export default function SignupOnNFT(props) {
  const [email, setEmail] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [isShowing, setIsShowing] = useState(false)
  const { onValidated, status, message } = props

  function onClickEvent() {
    onValidated({
      EMAIL: email,
    })
    setIsSending(true)
  }

  useEffect(() => {
    if (status == 'success') {
      setIsSending(false)
      setIsShowing(true)
      setEmail('')
      setInterval(() => {
        setIsShowing(false)
      }, 1000)
    }
    if (status == 'error') {
      setIsSending(false)
    }
  }, [status])

  return (
    <>
      <div className="2xl:w-[370px] md:w-[310px] w-full bg-gradient-to-t from-darkest_gold to-medium_gold hover:from-medium_gold hover:to-darkest_gold dao-btn-wrapper flex rounded 2xl:h-[60px] sm:h-[40px] h-[40px]">
        <input
          className="signup-info basis-3/4  rounded m-[2px] px-[4px]"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button
          className="basis-2/5 dao-btn-wrapper text-white rounded font-extrabold 2xl:h-[60px] sm:h-[40px] h-[40px] w-[143px]"
          onClick={e => onClickEvent()}
        >
          {isSending === true ? 'Sending...' : 'Signup'}
        </button>
      </div>
      {status === 'error' && <div className="text-white" dangerouslySetInnerHTML={{ __html: message }} />}
      {isShowing === true && status === 'success' && (
        <div className="text-white" dangerouslySetInnerHTML={{ __html: message }} />
      )}
    </>
  )
}
