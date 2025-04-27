import TestimonialsCard from "../components/TestimonialsCard"

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container testimonials-container">
        <h2>⋆˙⟡ Testimonials ⋆˙⟡</h2>
        <div className="testimonials-main">
          <div className="testimonials-main-list">
            <TestimonialsCard 
              name="Fajrin Arrahman Bilqisti"
              role="Product Designer | Ex-UIX Designer Telkomsel Enterprise"
              content="Adam is a person who is very smart in finding solutions and has extraordinary results in working on projects. Very extraordinary skills and I highly recommend them for other website projects."
            />
            <TestimonialsCard 
              name="Sheilla Fitri Honey W"
              role="Illustrator"
              content="As a fellow worker at the design studio, I have observed Adam to be a highly skilled frontend developer. He consistently arrives on time and works with great efficiency. Adam is an individual who thinks ahead, often planning his tasks in advance. His work not only satisfies our clients but also impresses our entire design team. Moreover, Adam is receptive to feedback and excels at collaborating with various stakeholders on projects. His analytical skills and attention to detail are invaluable in identifying and resolving technical challenges effectively. Adam’s strong commitment to quality makes him a valuable asset to our team."
            />
            <TestimonialsCard 
              name="Nuha Maulana Ahsan"
              role="UI/UX Designer || Figma Expert || Visual Designer"
              content="Adam Katsutrio is an excellent front-end developer, especially with Webflow. He understands UI/UX design deeply and consistently translates my designs into functional, polished websites. His attention to detail and collaboration skills make him a valuable asset to any team. Highly recommended!"
            />
            <TestimonialsCard 
              name="Marina Mizoguchi"
              role="UI Designer / Graphic Designer"
              content="Shout out to Adam Katsutrio for his incredible skills as a website front-end developer! 
              We had the pleasure of collaborating on a project for 'Infinite Siennas', and I must say, Adam's proficiency in Webflow blew me away! He brought the design ideas in Figma to functional websites. Adam's expertise in HTML, CSS, and JavaScript and mastery of the Webflow platform make him a standout developer. He's also a pleasure to work with, always bringing a positive attitude and a keen eye for detail to every project."
            />
          </div>
        </div>
      </div>
    </section>
  )
}