import { productDetail, productDetail2, productDetail3, productDetail4, productDetail5 } from 'components/mocks/productDetail'
import Home from '../components/Home'
import axios from 'axios'

const HomePage = ({ trendingProducts, blogs }) => {
  return <Home trendingProducts={trendingProducts} blogs={blogs} />
}



export async function getStaticProps() {
  // const trendingProducts = [productDetail(id="1024", name="Colorful Striped Socks", price=2.07, images={"id": "#43", "url": "https://i.redd.it/zymxt9aahri61.jpg"})]
  const trendingProducts = [productDetail, productDetail2, productDetail3, productDetail4, productDetail5]
  const blogs = []
  return {
    props: {
      trendingProducts,
      blogs,
    },
    revalidate: 10,
  }
  // try {
  //   const trendingProducts = await axios.get(`${process.env.BACKEND_URL}/home`).then((res) => res.data.trendingProducts)
  //   const blogs = await axios.get(`${process.env.BACKEND_URL}/blog`).then((res) => res.data)

  //   return {
  //     props: {
  //       trendingProducts,
  //       blogs,
  //     },
  //     revalidate: 10,
  //   }
  // } catch (e) {
  //   const trendingProducts = []
  //   console.log(e)
  //   return {
  //     props: {
  //       trendingProducts,
  //       blogs,
  //     },
  //     revalidate: 10,
  //   }
  // }
}

export default HomePage
