import React, { useEffect, useState } from 'react'

export default function Signup(props) {
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
    console.log(status)
    if (status == 'error') {
      setIsSending(false)
    }
  }, [status])

  return (
    <>
      <div className="flex 2xl:mt-[20px] lg:mt-[20px] mt-[10px] w-full justify-center">
        <div className="sm:w-[580px] w-full singup-wrapper bg-gradient-to-t from-darkest_gold to-medium_gold hover:from-medium_gold hover:to-darkest_gold flex rounded h-[60px]">
          <input
            className="signup-info basis-3/4  rounded m-[2px] px-[4px]"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            className="basis-1/4 bg-gradient-to-t from-darkest_gold to-medium_gold hover:from-medium_gold hover:to-darkest_gold text-white rounded font-extrabold h-[60px] w-[143px]"
            onClick={e => onClickEvent()}
          >
            {isSending === true ? 'Sending...' : 'Signup'}
          </button>
        </div>
      </div>
      {status === 'error' && <div className="text-white" dangerouslySetInnerHTML={{ __html: message }} />}
      {isShowing === true && status === 'success' && (
        <div className="text-white" dangerouslySetInnerHTML={{ __html: message }} />
      )}
    </>
  )
}
