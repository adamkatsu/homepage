import WorksCard from "../components/WorksCard"
import avatar from "../assets/adamkatsu.png"
import amz from "../assets/works-amzonite.png"
import wobl from "../assets/works-wobl.png"
import moon from "../assets/works-moonshot.png"
import auto from "../assets/works-autonomie.png"
import slab from "../assets/works-slabpixel.png"
import adva from "../assets/works-advalogis.png"

export default function Works() {
  return (
    <section className="works" id="works">
      <div className="container works-container">
        <h2 className="txt-center">⋆˙⟡ Selected Projects ⋆˙⟡</h2>
        <div className="works-grid">
          < WorksCard
            title="Amzonite"
            year="2025"
            description="Amzonite is a fully transparent and highly diversified investment fund. This website is built on Webflow with emphasis to user interaction."
            image={amz}
            link="https://www.amzonite.com/"
          />
          <WorksCard 
            title="WOBL"
            year="2024"
            description="A creative agency specializing in brand and game design. Built on Webflow."
            image={wobl}
            link="https://www.woblcreative.com/about"
          />
          <WorksCard 
            title="Moonshot"
            year="2024"
            description="An interesting concept for a 'coming soon' page. Utilising custom codes on Webflow for user interaction."
            image={moon}
            link="https://www.themoonshot.xyz/"
          />
          <WorksCard 
            title="Autonomie"
            year="2024"
            description="Shopify site for a Dubai-based fashion brand with custom product 'add to cart' functionalities."
            image={auto}
            link="https://auto-nomie.com/collections/shop"
          />
          <WorksCard 
            title="Slabpixel"
            year="2024"
            description="A special site for a special creative agency based in Indonesia."
            image={slab}
            link="https://www.slabpixel.com/"
          />
          <WorksCard 
            title="Advalogis"
            year="2025"
            description="Building sites on Wordpress is always a challenge. Includes GSAP animation as well as smooth scroll."
            image={adva}
            link="https://advalogis.com/"
          />
        </div>
      </div>
    </section>
  )
}