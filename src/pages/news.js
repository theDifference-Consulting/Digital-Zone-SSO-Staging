import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Navbar from "../components/navBar"
import BlogRoll from '../components/BlogRoll'




export default class BlogIndexPage extends React.Component {
  render() {
    return (
    <>
    <Helmet>
        <title>Gilead Digital Zone — News</title>
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css"/>
        <link rel="stylesheet" type="text/css" href="../css/style.css"/>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link type="text/css" href="https://fonts.googleapis.com/css?family=Lato:300,900&display=swap" rel="stylesheet"/>
    	<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="../favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
    </Helmet>
    <main class="secondary-template">
        <div class="container-fluid news">
            <Navbar/>
            <header>
                <div class="container">
                    <div class="heading-cloud-wrapper row">
                        <h1>News</h1>
                    </div>
                </div>
            </header>

			<React.Fragment>
				<BlogRoll />
			</React.Fragment>

            <section class="light-bg row" id="">
                <div class="container">
                    <img src="../img/news-bug.svg" class="bug"/>
                    <h2>What's new in the Digital Zone!</h2>
                    <h3>Meet the Digital Country Champions</h3>
                    <p>
                        Be sure to pop by the Visitor Centre to meet the Digital Country Champions. They are your local digital experts and ready to discuss all things digital!
                    </p>
                    <br/>
                    <h3>Podcast News Across ACE…</h3>
                    <ul class="triangle">
                        <li>
                            Are you thinking about creating a podcast series for your HCPs? Check out Podcast Alley for your recipe for success. Please reach out to some of the experts below who are creating podcast series in their own countries and adding their local flavour!
                        </li>
                        <li>
                            Turkey’s local language HIV in Podcast series goes live on Android! Contact @Ahmet Yilmaz for details!
                        </li>
                        <li>
                            Russia is well underway with 2 podcast series in Russian! HIV in Podcast and HCV in Podcast. Contact @Tatiana Usacheva and @Natalia Tikhonova for details about how to create a podcast series in your local language. Yes it is possible!
                        </li>
                        <li>
                            The Australian Hepatology in Podcast series is launching in July. Please reach out to @Aurelie Freismuth for details on her vision!
                        </li>
                    </ul>
                    <br/>
                    <h3>Coming Soon!</h3>
                    <p>                  
                        Stay tuned for a new neighbourhood in the ZONE featuring virtual ad boards, @Joyeta Das will be sharing her tips and concept soon.
                    </p>
                </div>
            </section>

            <section class="light-bg row" id="">
                <div class="container">
                    <img src="../img/news-bug.svg" class="bug"/>
                    <h2>Coming Soon: The Virtual Advisory Board Zone</h2>
                    <p>
                        Stay tuned for this exciting new zone to open up! We will profile a series of rolling advisory board projects being done across ACE &mdash; in Canada (Dana Mundil), the UK (Joyeta Das) and Australia (Danielle Croall).
                    </p>
                </div>
            </section>
            <section class="light-bg row" id="">
                <div class="container">
                    <img src="../img/news-bug.svg" class="bug"/>
                    <h2>Coming Soon: Have a Bite at the Compliance Cafe!</h2>
                    <p>
                        Hungry for more knowledge? Stop by this small neighborhood café that contains tips and tricks from a Legal/BC point of view to consider when you are working on a digital project.
                    </p>
                </div>
            </section>
            <section class="light-bg row" id="welcome">
                <div class="container">
                    <img src="../img/news-bug.svg" class="bug"/>
                    <h2>Welcome!</h2>
                    <h3>The Digital Zone is Live</h3>
                    
                    <p>
                        Welcome to the Zone.
                    </p>
                    <p>
                        Check here often for breaking news about some of the innovations and digital projects that are happening across Gilead and the world.
                    </p>
                    <p>
                        Please submit your ideas and best practices to share with your colleagues. Each month we will select a digital project to be profiled on the Zone. Your project could be next!
                    </p>
                    <p>
                        Coming soon… a review of virtual meetings and ideas to make them more engaging! See what your friends and colleagues are doing! Share your tips and tricks!
                    </p>
                </div>
            </section>
            <footer>
                <div class="container">
                    <div class="copyright">©2020 Gilead</div>
                </div>
            </footer>
            <a href="/" id="back-compass"></a>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="../js/bootstrap.min.js"></script>
    </main>
    </>
  )
}
}