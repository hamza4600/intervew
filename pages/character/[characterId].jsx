import React from 'react'
import styles from "./character.module.css"
import Image from 'next/image'
import { useRouter } from 'next/router'

function Character({character}) {
    const route = useRouter();
    const Back=()=>{
        route.push('/')
    }
    return (
    <div className={styles.Page}>
        <h1>Detail Page of a Character</h1>
        <button className={styles.Back} onClick={Back}>Go to Main Page</button>
        <div className={styles.Charatr}> 
          <Image src={character.image} width={350} height={300} layout="fixed"/>
          <div className={styles.Data}> 
          <p> Name  <span>  {character.name}           </span> </p>
          <p> status   <span> {character.status}       </span> </p>
          <p> speiec  <span> {character.species}       </span> </p>
          <p> Origin  <span>{character.origin.name}    </span> </p>
          <p>Location <span> {character.location.name}</span> </p>
          <p><span> {character.created}    </span> </p>

          </div>
        </div>     
    </div>
    )
}

export default Character

// get static Path
export async function getStaticPaths() {
    const response= await fetch('https://rickandmortyapi.com/api/character/')
    const data = await response.json()
    const paths = data.results.map(character => ({
        params: {
            characterId: `${character.id}`
        }
    }))
    return {
        paths,
        fallback: false
    }
}

// get staticProps
export async function getStaticProps({ params }) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
    const data = await response.json()
    return {
        props: {
            character: data
        }
    }
}