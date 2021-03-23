import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"

import Wiggle from "../components/wiggle"
import GoogleForm from "../components/epicFormModal"

export default function index() {
    return (
        <>
        	<Helmet>
                <title>Gilead Digital Zone — Epic Quest</title>
                {
                    //<link rel="stylesheet" type="text/css" href="../css/style.css"/>
                }
                <link rel="stylesheet" type="text/css" href="../css/epic-quest.css"/>
                <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
            	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
            </Helmet>
            <main className="secondary-template epic-quest">
                <div className="container-fluid ">
                    <Navbar activePage='epic-quest'/>
                    <header>
                        <img src="/img/epic-hero.jpg" className="img-fluid hero"/>
                        <div className="container-fluid">
                            <div className="row">                       
                                <div className="col-sm-10 offset-sm-1 col-md-6 offset-md-3 mb-5">
                                    <img src="/img/epic-quest-logo.svg" alt="epic quest for knowledge" className="img-responsive"/>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <Wiggle class="gray-bottom"/>
    			<section className="py-5" id="join-us">
                    <div className="container">
                        <h2>Join us on our Epic Quest for Knowledge</h2>
                        <p>
                            ACE Medical Affairs invites you on an adventure in BOLD leadership where you OWN your development by unlocking the wealth of knowledge that lies in the HP Development Hub. The Quest is only for the strong in energy, optimism and curiosity who recognize the importance of developing skills and knowledge to support your career goals and enrich your life. 
                        </p>
                    </div>
                </section>
                <Wiggle class="gray-top"/>
                <section className="my-5 py-5" id="how-it-works">
                    <div className="container">
                        <img src="/img/icon-knight.svg" className="icon"/>
                        <h4 className="red-text">How it Works</h4>
                        <p>
                            The Hub Quest will launch at the Hub Booth during ACE MAAC and run through the end of July. During this time, you, the Knights of the Hub Quest, will set out to explore the Hub and conquer as many materials and topic areas as you can. You will earn points for your valor and growing knowledge. The bravest of all who accumulate the most points by each milestone will be rewarded richly for their efforts.
                        </p>
                        <hr/>
                        <div className="row">
                            <div className="col-md-4" style={{marginBottom: "30px"}}>
                                <img src="/img/icon-list.svg" className="icon"/>
                                <h4>Step 1: <span>EXPLORE</span></h4>
                                <p>
                                    Click on the button below to fill out the form and become a Quest Knight. Then participate in our ACE MAAC activity to get started and learn more. You’ll make quick progress on the Quest and receive <b>STAR KNIGHT</b> recognition. Literally! You will receive a unique, celestial reward just for participating in the first Epic Hub Quest Challenge. As you venture into the Digital Zone and Development Hub, explore the different topic areas and materials that interest you. You’ll make a plan and set a goal that will advance your development and help you create your Hub habit and achieve your Epic Quest!
                                </p>
                            </div>
                            <div className="col-md-4" style={{marginBottom: "30px"}}>
                                <img src="/img/icon-calendar.svg" className="icon"/>
                                <h4>Step 2: <span>TAKE ACTION</span></h4>
                                <p>
                                    There is no time to waste. Schedule appointments with yourself to gain knowledge in the Hub and never stray from your goal. As you slay individual Hub materials and whole topic areas, you will earn more points.
                                </p>
                            </div>
                            <div className="col-md-4" style={{marginBottom: "30px"}}>
                                <img src="/img/icon-flag.svg" className="icon"/>
                                <h4>Step 3: <span>VICTORY IS YOURS!</span></h4>
                                <p>
                                    The Hub Quest is designed around three milestone dates: May 13, June 25 and July 27. High-performing Knights with the most points earned from the start of the contest through each milestone date will be rewarded! The three Knights who have persevered through challenging schedules, competing priorities and distractions to win the most points by our final milestone on July 27 will be named our winners. They will hereby be honored with custom illustrations of the photograph of their choosing by a professional artist.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5" id="get-started">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1 mb-5 text-center">
                                <img src="/img/icon-horn.svg" className="icon"/>
                                <h4>PROCLAMATION</h4>
                                <p>
                                    All Hub Quest Knights must stay alert for announcements about how they can double or even triple their points at certain times during the Quest. Click on the button below to become an Epic Hub Quest Knight!
                                </p>
                                <GoogleForm/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5" id="resources">
                    <div className="container">
                        <div className="text-center mb-5">
                            <img src="/img/icon-castle.svg" className="icon"/>
                            <h4>Quest Resources You’ll Need</h4>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 text-center mb-5">
                                <a href="/media/Gilead-Epic_Quest-Tool_Cards-Navigating_The_Hub.pdf" className="card-icon" target="_blank" rel="noreferrer">
                                    <img src="/img/card-navigating.svg"/>
                                </a>
                                <p>
                                    <b>Navigating the Hub</b><br/>
                                    Tool Card
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-4 text-center mb-5">
                                <a href="/media/Gilead-Epic_Quest-Tool_Cards-Hub_Development_Plan_Usage.pdf" className="card-icon" target="_blank" rel="noreferrer">
                                    <img src="/img/card-how-to.svg"/>
                                </a>
                                <p>
                                    <b>How to Use the Hub in Your Development Plan</b><br/>
                                    Tool Card
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-4 text-center mb-5">
                                <a href="/media/Gilead-Epic_Quest-One_Pager.pdf" className="card-icon" target="_blank" rel="noreferrer">
                                    <img src="/img/card-explainer.svg"/>
                                </a>
                                <p>
                                    <b>The Epic Quest</b><br/>
                                    Explainer
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-4 text-center mb-5">
                                <a href="/media/Gilead-Medical_Sciences_Skills_Discussion-Template.pdf" className="card-icon " target="_blank" rel="noreferrer">
                                    <img src="/img/card-sciences.jpg" className="img-responsive"/>
                                </a>
                                <p>
                                    <b>Discussion Template</b><br/>
                                    Medical Sciences
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-4 text-center mb-5">
                                <a href="/media/Gilead-Medical_Manager_Skills_Discussion-Template.pdf" className="card-icon " target="_blank" rel="noreferrer">
                                    <img src="/img/card-manager.jpg" className="img-responsive"/>
                                </a>
                                <p>
                                    <b>Discussion Template</b><br/>
                                    Medical Manager
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-4 text-center mb-5">
                                <a href="/media/Gilead-Country_Medical_Director-Leadership_Skills_Discussion-Template.pdf" className="card-icon " target="_blank" rel="noreferrer">
                                    <img src="/img/card-leadership.jpg" className="responsive"/>
                                </a>
                                <p>
                                    <b>Discussion Template</b><br/>
                                    Country Medical Director/Leadership
                                </p>
                            </div>
                            <a href="/media/EpicQuestZoom.zip" target="_blank" rel="noreferrer" className="zoomlinks">Click here to download your Epic Quest Zoom backgrounds!</a>
                        </div>
                        <div className="big-footer-text">
                            <img src="/img/good-luck.svg" className="good-luck"/>
                        {
                            //©2020 Gilead
                        }
                        </div>
                    </div>
                </section>
                <Wiggle class="light-gray-top"/>
                <img src="/img/epic-ship.svg" className="epic-ship"/>
                <footer>
                <div className="container">
                    <div className="copyright">©2021 Gilead</div>
                </div>
            </footer>
            <a href="/" id="back-compass"></a>
    	    </main>
        </>
	)
}