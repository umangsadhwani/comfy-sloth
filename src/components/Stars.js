import React , {useState }from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews}) => {
  const [star,setStar] = useState(stars);
  
  const tempstars = Array.from({length:5},(_,index)=>{
    const num=index+0.5;
    return <span key={index}>
      {
        stars>=index+1?(<BsStarFill/>):stars>=num?(<BsStarHalf/>):(<BsStar/>)
      }
    </span>
  })
  
  return (
  <Wrapper>
    <div className="stars">
      {tempstars}
    </div>
    <p className="reviews">({reviews} customer reviews )</p>
  </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars