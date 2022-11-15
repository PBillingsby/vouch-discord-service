import { useEffect, useState } from "react";
import { DiscordCard } from "../../components/DiscordCard";
import { search } from "../../services/discord";
import { Loader } from '../../components/Loader'
export default function Discord() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false)
  let code
  let address
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    code = new URLSearchParams(window.location.hash.slice(1)).get('access_token');
    address = new URLSearchParams(window.location.hash.slice(1)).get('state');
  }

  useEffect(() => {
    fetchDiscord()
  }, [!user, !code])

  const fetchDiscord = async () => {
    setLoading(true)
    const res = await search(code)
    setUser(res)
    setLoading(false)
  }

  return (
    <div className="flex items-center h-4/5 w-full justify-center">
      {loading ?
        <Loader />
        :
        user ?
          <div>
            <DiscordCard user={user} address={address} />
          </div>
          :
          <p>User not found</p>
      }
    </div >
  )
}