<template>
    <section>
        <Nav/>
        <div class="project">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <img :src="banner" alt="Project 01" class="mt-2 mt-lg-5 d-block mx-auto img-fluid" width="704" height="457"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="project__inner">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="row">
                                        <div class="col-lg-12 col-6">
                                            <div class="project__inner--info">
                                                <h3>Project Date</h3>
                                                <h4>{{ duration }}</h4>
                                            </div>
                                        </div> 
                                        <div class="col-lg-12 col-6"> 
                                            <div class="project__inner--info">
                                                <h3>Client</h3>
                                                <h4>{{ name }}</h4>
                                            </div>
                                        </div>   
                                        <div class="col-lg-12 col-6">
                                            <div class="project__inner--info">
                                                <h3>Category</h3>
                                                <h4>{{ category }}</h4>
                                            </div>             
                                        </div>      
                                    </div>    
                                </div>
                                <div class="col-lg-9">
                                    <div class="project__inner--details">
                                        <h2>Pactfi</h2>
                                        <p>In August 2021, Alexa Halcomb's PactFi began. For the business, we created the website pactfi.com. Understanding the needs of the client and the solutions they anticipated posed the biggest challenge for us. Creating the application, coordinating with a US remote team, and effectively delivering the features were additional challenges. Through communication with one another and video explanations, we were able to resolve the problems. We have also dealt with client requirements through a software management platform called JIRA. We enhanced the website with features like deal creation, working groups, deal facilities, allocating facilitated funds to working groups, sub-allocating facilitated funds, KYC features, dynamic forms, data rooms, etc. HTML was the programming language, software, and sort of technology that we utilised.</p>
                                        <!-- <div class="project__inner--gallery">
                                            <lightbox :items="images"></lightbox>
                                        </div> -->
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import banner from '~/assets/images/project03/pactfi.png';

export default {
    name: 'ProjectSingle',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            duration: '2021 - Continue',
            name: 'Pactfi',
            category: 'Web Design, Development',        
            items: [
                { 
                    image: require('@/assets/images/project01/image01.jpg'),
                    alt: '01'
                },
                { 
                    image: require('@/assets/images/project01/image02.jpg'),
                    alt: '02' 
                },
                { 
                    image: require('@/assets/images/project01/image03.jpg'),
                    alt: '03' 
                },
                { 
                    image: require('@/assets/images/project01/image04.jpg'), 
                    alt: '04'
                },
                { 
                    image: require('@/assets/images/project01/image05.jpg'),
                    alt: '05' 
                }
            ],
            images: [
                require("~/assets/images/project01/image01.jpg"),
                require("~/assets/images/project01/image02.jpg"),
                require("~/assets/images/project01/image03.jpg"),
                require("~/assets/images/project01/image04.jpg"),
                require("~/assets/images/project01/image05.jpg")
            ]                 
        }
    }   
}
</script>