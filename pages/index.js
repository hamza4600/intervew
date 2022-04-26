import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{ useState ,useEffect } from 'react'
import Link from 'next/link'

export default function Home({data}) {
  // useEffect
  // const [input, setInput] = useState("")
  // const [data, setData] = useState([null])
    // const data=[];
  // useEffect(() => {
  //   // api call
  //   const fetchData = async () => {
  //     const res = await fetch("https://rickandmortyapi.com/api/character/")
  //     const datax = await res.json();
  //     data.push(datax)
  //     console.log(data[1].results)

  //   }
  //   fetchData()
  //   window.addEventListener("load", fetchData)

  //   return () => {
  //     window.removeEventListener("load", fetchData)
  //   }
  // },[])
    console.log(data.results)
  return (
    <div className={styles.container}>
      <Head>
        <title>The Rick and Morty Api</title>
        <meta name="description" content="For Job assigment  Api for the Rick and Morty series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
   
    {/* <div> */}
    <h1>The Rick and Morty Api  </h1>
    {/* </div> */}
       {/* data in UI */}
       <div className={styles.Plane}> 
        {data.results.map((item,index)=>{
          return(
            <div className={styles.Cards} key={index}>
            <a href={`/character/${item.id}`}> 
            <h2>{item.name}</h2>
            <h2>{item.id}</h2>
            <Image src={item.image} width={320} height={210} layout="fixed" />
            <div className={styles.Inner}> 
            <div className={styles.Status}>
            {/* condition in alive and dead  */}
            
            <span className={item.status==="Alive"? styles.Alive :styles.Dead}>{
              item.status === "Alive" ? "Alive" : "Dead" 
            }</span>
            
            <p>- {item.species}</p>
            </div>
            <div className={styles.Gender}>
              <span>Gender</span>
            <p>{item.gender}</p>
            </div>
            <div className={styles.Location}> 
            <span>Last Known Loacation</span>
            <p> {item.location.name}</p>
            </div>
            <div className={styles.Location}>
              <span>First Seen In </span> 
            <p>{item.origin.name}</p>
            </div>
            <div className={styles.Location}>  
              <span>created at </span>
            <p>{item.created}</p>
            </div>
            </div>
            </a> 
            </div>
          )
        }
        )}
      </div>


    </main>   
    </div>
  )
}
// server side api call
export async function getServerSideProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character/")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

