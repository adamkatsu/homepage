import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsCard({name, role, content}) {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 50%",
        end: "bottom 60%",
        scrub: true,
      },
      backgroundColor: '#1F1F1F',
      duration: 1,
    });
    gsap.to(boxRef.current.querySelector('.txt-author_name'), {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 50%",
        end: "bottom 60%",
        scrub: true,
      },
      color: '#1DB0FF',
      duration: 1,
    });
  }, []);

  return (
    <div className="testimonials-main-list_item" ref={boxRef}>
      <p>{content}</p>
      <div className="testimonials-author">
        <span className="txt-author_name">{name}</span>
        <p className="txt-author_title">{role}</p>
      </div>
    </div>
  )
}