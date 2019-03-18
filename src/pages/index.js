import React from "react"
import styled from 'styled-components'
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";



const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`
export default () => 
(
    <Layout>
        <Wrapper>
            <Hero>
            <p>
                I&apos;m John Doe, a Senior UX Developer with five years of industry experience, specializing in developing
                React apps with the best UX users can get.
                </p>
            </Hero>  
        </Wrapper>
       
    </Layout>
)
