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
                                        <h2>Toads</h2>
                                        <p>Toads is a European trading office operating exclusively in Bangladesh. It is a medium and flexible organization specialized in the Surf wear industry for more than 35 years. We have built their website using WordPress and Elementor page builder and still give them continuous service to remove any bugs or modifications. We are acting as their tech team.</p>
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
import banner from '~/assets/images/project04/toads.png';

export default {
    name: 'ProjectSingle',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            duration: '2023',
            name: 'Toads',
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