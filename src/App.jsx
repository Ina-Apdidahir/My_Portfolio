
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Works from './Sections/Works'
import Services from './Sections/Services'
import Resume from './Sections/Resume'
import Testimonial from './Sections/Testimonial'
import Blog from './Sections/Blog'
import Clients from './Sections/Clients'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => (
  <div className="relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <Header />
    <section className="xl:padding-1 wide:padding-r padding-b">
      < Hero />
    </section>
    <section className=" padding ">
      < About />
    </section>
    <section className=" padding bg-coral-red bg-[radial-gradient(#ffffff33_1px,#ea4343_1px)] bg-[size:20px_20px] ">
      < Skills />
    </section>
    <section className=" padding ">
      < Works />
    </section>
    <section className=" padding overflow-x-hidden">
      < Services />
    </section>
    <section className=" padding ">
      <Resume />
    </section>
    <section className="  bg-black relative ">
      <div //red and white
        className=" bg-[radial-gradient(circle_farthest-side,rgba(253,253,21,.15),rgba(255,255,255,0))]"
      >
        <div //white in the midle
          className="rounded-full bg-[radial-gradient(circle_farthest-side,rgba(253,21,0,.5),rgba(255,255,255,0))]"
        >
          <div //back ground pattern
            className="  px-[4rem] pt-14  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
          >
            < Testimonial />
          </div>
        </div>
      </div>
    </section>
    <section className=" padding ">
      < Blog />
    </section>
    <section className=" padding ">
      < Clients />
    </section>
    <section className=" padding ">
      < Contact />
    </section>
    <section className=" padding-x padding-t bg-second-grey pb-8 text-whit-color ">
      < Footer />
    </section>
  </div>
)

export default App


{/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */ }