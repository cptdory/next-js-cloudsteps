import Image from "next/image";
import Hero from "@/app/components/hero";
import NavBar from "./components/nav-bar";
("@/app/components/nav-bar");

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section
        className="px-10 pt-8"
        style={{
          background:
            "linear-gradient(180deg,rgba(3, 0, 0, 1) 60%, rgba(0, 17, 43, 1) 95%, rgba(197, 209, 102, 0.7) 100%)",
        }}
      >
        <div className="card mx-10 card-xl lg:card-side shadow-sm lg:grid lg:grid-cols-2 lg:h-96 mb-8">
          <figure>
            <img
              src="https://img1.wsimg.com/isteam/ip/e0b02d97-2d61-45fc-8661-84ba6f5d4cd1/BUSINESS%2001.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
              alt="Album"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl pt-3">Our Mission</h2>
            <p className="text-2xl">
              "To simplify your business operations, we offer innovative and
              reliable software solutions that ensure a seamless journey for our
              clients. We are dedicated to providing you with the best possible
              service and experience."{" "}
            </p>
          </div>
        </div>
        
        <div className="card mx-10 card-xl lg:card-side shadow-sm lg:grid lg:grid-cols-2 lg:h-96 mb-8">
          {/* Make the image appear first on small screens, second on lg and up */}
          <figure className="order-1 lg:order-2">
            <img
              src="https://img1.wsimg.com/isteam/ip/e0b02d97-2d61-45fc-8661-84ba6f5d4cd1/BUSINESS%2002.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
              alt="Album"
            />
          </figure>

          {/* Make the text appear second on small screens, first on lg and up */}
          <div className="card-body items-center text-center order-2 lg:order-1">
            <h2 className="card-title text-4xl pt-3">Our Expertise</h2>
            <p className="text-2xl">
              Unleash the Power of Microsoft Dynamics 365 Business Central with
              CLOUDSTEPS. We are experts in every facet of Business Central
              functions, offering a comprehensive suite of services tailored to
              meet the unique needs of small and medium businesses. Our
              commitment to excellence ensures that every project we undertake
              is a masterpiece.
            </p>
          </div>
        </div>

        <div className="card mx-10 card-xl lg:card-side shadow-sm lg:grid lg:grid-cols-2 lg:h-96 mb-8">
          <figure>
            <img
              src="https://img1.wsimg.com/isteam/ip/e0b02d97-2d61-45fc-8661-84ba6f5d4cd1/BUSINESS%2003.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true"
              alt="Album"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl pt-3">Our Clients</h2>
            <p className="text-2xl">
              Embark on a Digital Transformation Journey with CLOUDSTEPS:
              Trusted by Small and Medium Businesses Seeking Excellence. While
              we're building our portfolio of notable clients and projects, our
              focus remains on delivering exceptional value and creating
              satisfied clients who experience the true potential of ERP
              solutions.{" "}
            </p>
          </div>
        </div>
      </section>

      <section id="about-us" className="px-10 pt-8">
        <h2 className="card-title text-4xl pt-3">About Us</h2>
      </section>
    </div>
  );
}
