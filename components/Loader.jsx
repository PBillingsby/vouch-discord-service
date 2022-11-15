import { ThreeDots } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className="pt-32">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#1D4ED8"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <p className="text-center">...loading</p>
    </div>
  )
}