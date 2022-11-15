import { useState } from "react"
import { Loader } from './Loader'
export const DiscordCard = ({ user, address }) => {
  const [success, setSuccess] = useState(false)
  const [status, setStatus] = useState()
  const msg = `I am vouching for my wallet address ${address}  🐘 via @vouchdao!`
  const postMessage = async () => {
    setSuccess(false)
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL, {
        headers: {
          'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          avatar_url: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpeg`,
          content: msg,
          about: `${user.username}#${user.discriminator}`
        })
      })
      setStatus(res.status)
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="max-w-md">
      {!success ?
        <div className="bg-dark shadow-xl rounded-lg py-6">
          <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpeg`} alt="John Doe" />
          </div>
          <div className="p-2 flex flex-col items-center text-white">
            <h2 className="text-center text-xl font-medium leading-8">{user.username}#{user.discriminator}</h2>
            <h4 className='text-center font-medium leading-8'>{msg}</h4>
            <button type="button" onClick={() => postMessage()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Post to Discord</button>
          </div>
        </div>
        :
        success && status === 204 ?
          <p>Success!</p>
          :
          <Loader />
      }
    </div>
  )
}