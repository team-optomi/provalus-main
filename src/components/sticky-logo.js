import React, { useEffect } from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeaderLogo from "../components/header-logo"

const StickyLogo = () => {

  useEffect(() => {
    
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      gsap.core.globals('ScrollTrigger', ScrollTrigger)
    }

      let tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: "#logoTrigger",
            scrub: 1,
            start: '50% top',
            end: '50% top',
            id: 'logo_trigger',
            },
          })
          tl.to('.sticky-logo', { top: '0px' })

    }, []);

      return(
          <StickyDiv className={"sticky-logo"}>
              <HeaderLogo/>
          </StickyDiv>
      );

}

const StickyDiv = styled.div`
    position: fixed;
    top: -120px;
    left: 5px;
    width: 200px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 101;
    .gatsby-image-wrapper {
      width: 200px;
      height: 58px;
      img {
        margin-bottom: 0;
      }
    }
    @media(max-width:768px) {
      display: none;
    }
`

export default StickyLogo