import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="p-4 flex gap-10 ">
      <Link href="https://vouchdao.arweave.dev" target="_blank" className="text-blue-400 hover:text-blue-200">VouchDAO</Link>
      <Link href="https://vouch-twitter.arweave.dev" target="_blank" className="text-blue-400 hover:text-blue-200">Twitter Vouch Service</Link>
    </div>
  )
}