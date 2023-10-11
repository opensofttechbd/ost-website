<template>
    <section>
        <Nav/>
        <div class="project">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <img :src="banner" alt="Smart Property" class="mt-2 mt-lg-5 d-block mx-auto img-fluid" width="704" height="457"/>
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
                                        <h2>Legacy Lock</h2>
                                        <p>For a client named Legacy Lock, we worked on the Legacy Lock project in April of 2022. For this client, we made a mobile application. This program aids in the production and security of video tales for generations and families, giving you access to a living time vault. Two MVPs have been made available. The process of mending and modification is currently underway. Although several of the features (notification, invite, and security setting) are only partially complete, some new features have been introduced. This app will soon have features like video recording, comments, video timeline, contact search, invite contacts, follow/unfollow user, notification work in progress, user profile, member profile, and followers video timeline. For this project, we used the following technologies: For Mobile - Flutter and for Backend - Aws, Lambda, Cognito, Api gateway, Dynamodb, Sqs, S3, Cloudfront, Mux.</p>
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
import banner from '~/assets/images/project05/legacy-lock.png';

export default {
    name: 'ProjectSingle',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            duration: '2022 - Continue',
            name: 'Legacy Lock',
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