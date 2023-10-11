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
                                                <h3>Project Duration</h3>
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
                                        <h2>Smart Property</h2>
                                        <p>Smart Property is a collaborative, paperless, and social property management solution. It allows you to manage your residential or commercial property without any physical contact. You can monitor the visitor log, maintenance requests from residence, collecting rents and overall staff management for your property and many more. It’s a SaaS product and we can set you up within 24 hours.</p>
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
import banner from '~/assets/images/project01/smart-property.png';

export default {
    name: 'ProjectSingle',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            duration: '2018 - 2020',
            name: 'Smart Property',
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