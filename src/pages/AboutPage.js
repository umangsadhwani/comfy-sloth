import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title='about' />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eos sed beatae excepturi quae deleniti incidunt iste sequi in sapiente libero, ullam itaque reprehenderit modi eaque ut officiis commodi. Eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure possimus expedita perferendis ab dicta? Eveniet, commodi distinctio itaque recusandae dignissimos corrupti id tenetur adipisci nobis, pariatur placeat temporibus eos velit?</p>
      </article>      
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    text-align:center
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: auto;
    margin-right:auto;
  }
  
    h2{
      text-align:center;
    }


  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;

    h2{
      text-align:left;
    }
    .underline{
      margin-left:0
    }
    p{
      text-align:left;
    }
  }
`
export default AboutPage
