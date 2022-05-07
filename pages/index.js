import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{ useState ,useEffect } from 'react'

export default function Home({data}) {
  const [search, setSearch] = useState('')
// Creating an Array nad Push Data to That Array
  const [dataArray, setDataArray] = useState([])
  
  const handel=(e)=>{
    // if element exist in array then don,t push it 
    if(dataArray.includes(e)){
      return }
      setDataArray([...dataArray,e])
      console.log(dataArray)
    }
  useEffect(() =>{
    // console.log(search)
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>The Rick and Morty Api</title>
        <meta name="description" content="For Job assigment  Api for the Rick and Morty series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={styles.main}>
    
    <Nav data={dataArray}/>
    
    <h1>The Rick and Morty Api  </h1>
    <input className={styles.input} placeholder=" Search Name" 
    onChange={(e)=>setSearch(e.target.value)} />
       {/* data in UI */}
       <div className={styles.Plane}> 
        {data.results.filter(use=>use.name.toLowerCase().includes(search.toLocaleLowerCase())).map((item,index)=>{
          return(
            <div className={styles.Cards} key={index}>
            <nav> 
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
            <div className={styles.BuG}> 
            <button  className={styles.CarP}><a href={`/character/${item.id}`}>Detail Page</a></button>
            <button onClick={()=>handel(item)}  className={styles.Car}>Add to card</button>
            </div>
            </div>
            </nav>

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
 

// nav

export function Nav ({data}) {
  const [show, setShow] = useState(data)
  const [show2, setShow2] = useState(false)
  const Open=()=>{
    setShow2(!show2)
    console.log(show2)
  }
  useEffect(() =>{
    console.log(data)
  },[show])
  return(<div className={styles.Navv}>
      <h5>NFT cartoon</h5>
      <h6 className={show2 ? styles.h6 : styles.h66} onClick={Open}>{data.length}</h6>
      {
      <div  className={show2 ? styles.Ham : styles.Haa} >
      {data.map((item,index)=>{
        return(
          <div className={styles.CardT} key={index}>
          {/* only show first two words from name */}
          <a href={`/character/${item.id}`}> 
          <p>{item.name.split(' ').slice(0,1).join(' ')}</p>
          <div className={styles.Imm}> 
          <Image src={item.image} width={50} height={51} layout="fixed" />
          </div>
          </a>
          </div>
        )
      }
      )}
      </div>
      }

  </div>)
}