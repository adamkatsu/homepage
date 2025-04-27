import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top top",
        end: "bottom 10%",
        scrub: true,
      },
      background: 'linear-gradient(180deg,rgba(7, 7, 7, 1) 00%, rgba(7, 7, 7, 0.7) 80%, rgba(7, 7, 7, 0) 100%)',
      duration: 1,
    });

    if(window.innerWidth <= 768) {
      gsap.to(boxRef.current.querySelectorAll('.navbar-list_item'), {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 20%",
          end: "bottom 30%",
          scrub: true,
        },
        x: '50vw',
        opacity: 0,
        duration: 1,
      });
      gsap.to(boxRef.current.querySelector('.navbar-list_item.mobile'), {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 20%",
          end: "bottom 30%",
          scrub: true,
        },
        display: 'block',
        x: 0,
        opacity: 1,
        duration: 1,
      });
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 50%",
          end: "bottom 60%",
          scrub: true,
        },
        background: 'linear-gradient(180deg,rgba(7, 7, 7, 1) 00%, rgba(7, 7, 7, 0.8) 50%, rgba(7, 7, 7, 0) 100%)',
        duration: 1,
      });
    }
  }, []);

  function scrollToSection(id) {
    const el = document.getElementById(`${id}`);
    const offset = 80; // how many pixels from the top you want
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
      top: rect.top + scrollTop - offset,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <nav className="navbar" ref={boxRef}>
        <div className="container navbar-container">
          <ul className="navbar-list">
            <li className="navbar-list_item">
              <span 
                className="uppercase" 
                onClick={() => {scrollToSection('wid')}}
              >About</span>
            </li>
            <li className="navbar-list_item">
              <span 
                className="uppercase" 
                onClick={() => {scrollToSection('works')}}
              >Works</span>
            </li>
            <li className="navbar-list_item">
              <span 
                className="uppercase" 
                onClick={() => {scrollToSection('testimonials')}}
              >Testimonials</span>
            </li>
            <li className="navbar-list_item">
              <span 
                className="uppercase" 
                onClick={() => {scrollToSection('contact')}}
              >Contact</span>
            </li>
            <li className="navbar-list_item is-active">
              <span 
                  className="uppercase" 
                  onClick={() => {scrollToSection('home')}}
                >Home</span>
            </li>
            <li className="navbar-list_item mobile">
              <span 
                className="uppercase" 
                onClick={() => {scrollToSection('home')}}
              >Home</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}