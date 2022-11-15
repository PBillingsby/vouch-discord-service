export const search = (token) => {
    return fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(res => res.ok ? res.json() : res.text())
        .then(result => result)
}

export const getVouchedUsers = async () => {
    const res = await fetch(`https://discord.com/api/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}/messages`
    ).then(resp => resp.json()).then(obj => console.log(obj))
}