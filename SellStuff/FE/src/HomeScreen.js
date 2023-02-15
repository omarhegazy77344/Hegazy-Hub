import Hero from "./HomeComponents/Hero"
import Features from "./HomeComponents/Features";
import Coupon from "./HomeComponents/Coupon";
import BestsellingProducts from "./HomeComponents/BestsellingProducts";
import Testimonials from "./HomeComponents/Testimonials";


function HomeScreen() {
    return (
        <div>
            <Hero />
            <Features />
            <Testimonials />
        </div>
    )
}

export default HomeScreen