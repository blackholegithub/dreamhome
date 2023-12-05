import Header from "../../component/Header"
import Nav from "../../component/Nav"
import FeaturedProperties from "../../component/FeaturedProperties"
import Footer from "../../component/Footer"
import Area from "../../component/Area"
import Sale from "../../component/Sale" 
import Rent from "../../component/Rent"
import MeetAgrents from "../../component/MeetAgents"
import Contact from "../../component/Contact"
import Blog from "../../component/Blog"
import CommentCustomers from "../../component/CommentCustomers"
import Introduce from "../../component/Introduce"



const Home = () => {
  return (
    <div >
      <Header/>
      <Nav />
      <Introduce/>
      <FeaturedProperties />   
      <Area /> 
      <Sale />
      <Rent />
      <MeetAgrents />
      <Contact />
      <Blog  />
      <CommentCustomers />
      <Footer />
    </div>
  )
}

export default Home