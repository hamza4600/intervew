import React,{useEffect, useState, useRef} from 'react'
import styles from "./hack.module.css"

function Index() {
  return (
    <div className={styles.Hone}>
        <h1>Hacker </h1>
        {/* On  key down type text  */}
        <KeyDonw/>
    </div>
  )
}

export default Index

// ?Type on key down 
export function KeyDonw () {
const code=`
#include<iostream>
using namespace std; ${<br/>}
int main()
{
    int matOne[10][10], matTwo[10][10], matThree[10][10];
    int matOneRow, matOneCol, matTwoRow, matTwoCol;
    int i, j, k, sum;
    cout<<"Enter the Row Size of First Matrix: ";
    cin>>matOneRow;
    cout<<"Enter the Column Size of First Matrix: ";
    cin>>matOneCol;
    cout<<"\nEnter "<<matOneRow*matOneCol<<" Elements for First Matrix: ";
    for(i=0; i<matOneRow; i++)
    {
        for(j=0; j<matOneCol; j++)
            cin>>matOne[i][j];
    }
    cout<<"\nEnter the Row Size of Second Matrix: ";
    cin>>matTwoRow;
    cout<<"Enter the Column Size of Second Matrix: ";
    cin>>matTwoCol;
    cout<<"\nEnter "<<matTwoRow*matTwoCol<<" Elements for Second Matrix: ";
    for(i=0; i<matTwoRow; i++)
    {
        for(j=0; j<matTwoCol; j++)
            cin>>matTwo[i][j];
    }
    if(matOneCol != matTwoRow)
    {
        cout<<"\nMultiplication Not Possible!\n";
        return 0;
    }
    // Multiplying the two matrix...
    for(i=0; i<matOneRow; i++)
    {
        for(j=0; j<matTwoCol; j++)
        {
            sum = 0;
            for(k=0; k<matOneCol; k++)
                sum = sum + (matOne[i][k] * matTwo[k][j]);
            matThree[i][j] = sum;
        }
    }
    cout<<"\nMultiplication Result:\n";
    for(i=0; i<matOneRow; i++)
    {
        for(j=0; j<matTwoCol; j++)
            cout<<matThree[i][j]<<"\t";
        cout<<endl;
    }
    cout<<endl;
    return 0;
}



	for (i = 0; i < group_info->nb|
 ` ;
    
//  useEffect(()=>{
//   // on key down start typing
  
//   const listner=()=>{
//     const aw=code.split("")
//     for(let i=0; i<aw.length; i++){
//       setTimeout(()=>{
//         arr.push(aw[i])
//         console.log(arr)

//       },1000)
//     }
//     // arr.push(code)
//   }
//   window.addEventListener('click',listner)
//   return ()=>{
//     window.removeEventListener('click',listner)
//   }
// },[arr])
const vieRef=useRef()
const [stres, setStres] = useState();
useEffect(() =>{

  // navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
  //   setStres(stream)
  //   if(vieRef.current){
  //     vieRef.current.srcObject = stream
  //   }
  // })

  navigator.getWebcam = (navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.moxGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({  audio: true, video: true })
      .then(function (stream) {
        setStres(stream)
           if(vieRef.current){
              vieRef.current.srcObject = stream
            }
        //Display the video stream in the video object
       })
       .catch(function (e) { logError(e.name + ": " + e.message); });
       
      }
  else {
  navigator.getWebcam({ audio: true, video: true }, 
       function (stream) {
        setStres(stream)
        if(vieRef.current){
           vieRef.current.srcObject = stream
         }
               //Display the video stream in the video object
       }, 
       function () { logError("Web cam is not accessible."); });
  }
}, [])

return (
      <div className={styles.Key}>
        <br/>
        <br/>
        <h1>accessing The Cameria and Head phone </h1>
        <video className={styles.Camm} ref={vieRef} autoPlay playsInline src={stres}></video>
        {/* {stres && <video autoPlay playsInline src={stres} />} */}
        
        <h2>{code}</h2>
        {/* {code} */}
        {/* {arr.map((item ,key)=>(
          <h2 key={key}>{item}</h2>
        ))} */}

      </div>
    );
  }
