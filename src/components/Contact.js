import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <h3>Join Our Newsletter and get 20% off</h3>
      <div className="content">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptatibus quod molestiae optio ipsa neque quo facilis quae cum nisi.</p>
        <form className="contact-form" action="https://formspree.io/f/xayaolrp"
  method="POST" >
          <input type="email" className="form-input" placeholder="enter email" name="_replyto" />
          <button type="submit" className="submit-btn" >Subscribe</button>
        </form>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
    text-align:center;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
    text-align:center;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    width:100%;
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    h3{
    text-align:left;
    }
    p {
      margin-bottom: 0;
      text-align:left;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
