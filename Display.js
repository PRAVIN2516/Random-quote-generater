import React,{useState, useEffect} from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Extrabit() {
    const[quotes,setQuotes]=useState("");
    const[author,setAuthor]=useState("");
    
    let changeColor=()=>{
        document.body.style.backgroundColor=
        'rgb('+ Math.round(Math.random()*257)+
        ','+ Math.round(Math.random()*257)+
        ','+ Math.round(Math.random()*257)+')';
     }

    useEffect(()=> { 
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    },[]);
    let fetchNewQuotes=()=>{
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) =>{
                setQuotes(quotes.content);
               setAuthor(quotes.author);
               console.log(quotes);
            }
        )
    }
  return (
    <div className='quotesbox'>
    <div className='box'>
    <div className='quot'>{quotes}</div>
    <small>-{author}-</small><br />
   <div><h className='twiter'> <a href='https://github.com/PRAVIN2516'><GitHubIcon  /></a></h><h className='insta' ><a href='https://www.instagram.com/_vincrazy___25/'><InstagramIcon/></a></h></div>
   <div className='mov'> <button className='btn' onClick={()=>{fetchNewQuotes(); changeColor(); }}>Generate new Quotes</button></div>
</div>
    </div>
)
}