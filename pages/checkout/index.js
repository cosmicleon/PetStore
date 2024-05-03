// import Cart from 'components/Cart/CartInfo'
// import Cart from 'components/Cart/CustomerInfo'
import Cart from 'components/Cart/OrderComplete'
import { cartDetail } from 'components/mocks/cartDetail'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const CheckoutPage = () => {
  const router = useRouter()
  // const cartSlice = useSelector((state) => state.checkout)
  const cartSlice = cartDetail
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }
  return <Cart cartSlice={cartSlice} />
}

export default CheckoutPage
