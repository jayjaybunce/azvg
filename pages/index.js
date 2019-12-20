import React, { useState } from 'react'
import { Button, Grid, Box} from "@chakra-ui/core"
import { backgroundColor } from 'styled-system'
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');


</style>




const Nav = () => (

  <div className="nav_wrapper">
    <nav className="navBar">
      <ul className ="nav_ul">
        <li>About</li>
        <li>Home</li>
        <li>Mythic +</li>
        <li>Raiding</li>
        <li>Members</li>
      </ul>
  <style jsx global>{`
    body,html{
      margin:0;
      padding:0;
    }
      .navBar ul li {
        color: white;
        border-left:1px solid black;
        text-shadow: 1px 1px 100px #FFFFFF;
        line-height: 50px;
        font-size: 20px;
        display: inline;
        padding:12px 20px 12px 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        list-style-type:none;
        text-align:center;

      }
      .navBar ul li:last-child{
        border-right:1px solid black;
      }
      .navBar ul li:hover {
        transition: all 500ms ease;

        background-color:#2D3748;
      }
      .navBar ul {
        margin-top:0px;
        height: 50px;
        width: 100%;
        padding:0px;
        border:0px;
        display:inline block;
        text-align:center;
      }
      .navBar {
        background-color:#1A202C;
        padding:0px;
        border:0px;
        width:100%;
        margin-top:-10px;
        margin:0 auto;
      }
      .nav_wrapper{
        margin-top:;
        width:100%;
        display:block;
      }
      
    `}</style>
    </nav>
    </div>  
  
)


/*
const Home = () => ( 
<Grid templateColumns="repeat(10, 1fr)"  marginTop="0px" paddingTop="0px" borderTop="0px" gap={1}>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
  <Box w="100%" h="12" bg="blue.500"></Box>
</Grid>
)
const Home = (props) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button>Click Me</Button>
    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>
      <div className="row">
        <a href="https://nextjs.org/docs" className="card">
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className="card"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)
*/


 export default Nav