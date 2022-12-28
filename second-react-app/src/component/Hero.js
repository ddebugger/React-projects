import React from "react"
import heroImages from "../images/photo-grid.png"
import "../index.css" 


export default function Hero(){
    return(
        <section className ="hero">
            <img src={heroImages}  alt="hero" className ="hero--img" />
            <h1 className ="hero--header">Online Experiences</h1>
            <p className ="hero--text">Join unique activities led by one-of-a-kind
                hosts-all without leaving home. Join unique activities led by one-of-a-kind
                hosts-all without leaving home. Join unique activities led by one-of-a-kind
                hosts-all without leaving home. Join unique activities led by one-of-a-kind
                hosts-all without leaving home. Join unique activities led by one-of-a-kind
                hosts-all without leaving home. 
            </p>
        </section>
    )
}