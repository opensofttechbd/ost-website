<template>
    <section>
        <Nav/>
        <div class="project">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <img :src="banner" alt="Threefold" class="mt-2 mt-lg-5 d-block mx-auto img-fluid" width="704" height="457"/>
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
                                        <h2>Thr3efold</h2>
                                        <p>THR3EFOLD is a digital platform for ethical manufacturing. They provide a platform where manufacturers find the ethical certified factories to produce their products. We have built their web application from scratch and still give them continuous service to remove any bugs or update any operations. We are acting as their tech team.</p>
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
import banner from '~/assets/images/project02/threefold.png';

export default {
    name: 'ProjectSingle',
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            banner,
            duration: '2018 - Continue',
            name: 'Thr3efold',
            category: 'Web Design, Development',        
            items: [
                { 
                    image: require('@/assets/images/project02/image01.jpg'),
                    alt: '01'
                },
                { 
                    image: require('@/assets/images/project02/image02.jpg'),
                    alt: '02' 
                },
                { 
                    image: require('@/assets/images/project02/image03.jpg'),
                    alt: '03' 
                },
                { 
                    image: require('@/assets/images/project02/image04.jpg'), 
                    alt: '04'
                },
                { 
                    image: require('@/assets/images/project02/image05.jpg'),
                    alt: '05' 
                }
            ],
            images: [
                require("~/assets/images/project02/image01.jpg"),
                require("~/assets/images/project02/image02.jpg"),
                require("~/assets/images/project02/image03.jpg"),
                require("~/assets/images/project02/image04.jpg"),
                require("~/assets/images/project02/image05.jpg")
            ]                 
        }
    }   
}
</script>