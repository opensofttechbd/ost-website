<template>
    <div class="projects">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="projects__sort--category">
                        <span class="projects__sort--filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">All</span>                        
                        <span class="projects__sort--filter" v-bind:class="{ active: currentFilter === 'MOBILE' }" v-on:click="setFilter('MOBILE')">Mobile</span>
                        <span class="projects__sort--filter" v-bind:class="{ active: currentFilter === 'WEBDESIGN' }" v-on:click="setFilter('WEBDESIGN')">Web Design</span>
                        <span class="projects__sort--filter" v-bind:class="{ active: currentFilter === 'DEVELOPMENT' }" v-on:click="setFilter('DEVELOPMENT')">Development</span>                        
                    </div>
                </div>                
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <transition-group class="projects__block" name="fade">
                        <div class="projects__block--transition" v-for="project in filteredProjects" :key="project.title">
                            <div class="projects__block--inner clearfix">
                                <h4>{{ project.title }}</h4>
                                <h5>{{ project.description }}</h5>
                                <NuxtLink :to="project.link" class="btn-link">
                                    <div class="d-flex align-items-center">
                                        View Project<img :src="view_project" alt="Arrow" width="16" height="16">
                                    </div>
                                </NuxtLink> 
                                <img :src="project.image" :alt="project.alt" class="img-fluid float-end" :width="project.width" :height="project.height"/> 
                            </div>                               
                        </div>
                    </transition-group>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import viewProject from '~/assets/svg/read-more.svg';

export default {
    name: 'FilterProject',
    data() {
        return {
            view_project: viewProject,
            currentFilter: "ALL",
            projects: [
                {
                    title: 'Web Design & Development',
                    description: 'Smart Property',
                    link: '/smart-property',
                    image: require('~/assets/svg/smart-property.svg'),
                    alt: 'Smart Property',
                    category: ["ALL", "WEBDESIGN", "DEVELOPMENT"],
                    width: 508,
                    height: 319
                },              
                {
                    title: 'Web Design & Development',
                    description: 'Thr3efold',
                    link: '/threefold',
                    image: require('~/assets/svg/threefold.svg'),
                    alt: 'Thr3efold',
                    category: ["ALL", "WEBDESIGN", "DEVELOPMENT"],
                    width: 508,
                    height: 319                    
                },
                {
                    title: 'Web Design & Development',
                    description: 'Pactfi',
                    link: '/pactfi',
                    image: require('~/assets/svg/pactfi.svg'),
                    alt: 'Pactfi',
                    category: ["ALL", "WEBDESIGN", "DEVELOPMENT"],
                    width: 508,
                    height: 319                    
                },
                {
                    title: 'Web Design & Development',
                    description: 'Toads',
                    link: '/toads',
                    image: require('~/assets/svg/toads.svg'),
                    alt: 'Toads',
                    category: ["ALL", "WEBDESIGN", "DEVELOPMENT"],
                    width: 508,
                    height: 319                    
                },              
                {
                    title: 'Web & Mobile Application',
                    description: 'Legacy Lock',
                    link: '/legacy-lock',
                    image: require('~/assets/svg/legacy-lock.svg'),
                    alt: 'Legacy Lock',
                    category: ["ALL", "MOBILE", "DEVELOPMENT"],
                    width: 508,
                    height: 319                    
                }                                                                                                                                
            ]
        }
    },
    computed: {
        filteredProjects: function () {
            var filter = this.currentFilter;
                return this.projects.filter(function (project) {
                return project.category.indexOf(filter) !== -1;
            });
        }
    },
    methods: {
        setFilter: function (project) {
        this.currentFilter = project;
        }
    }    
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/style.scss';

.projects {
    @include padding(70px,0px,70px,0px);

    &__sort {
        &--category {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &--filter {
            @include font($base-font,$base-font-size,$font-weight-2,20px);    
            @include margin(0px,15px,0px,15px);
            @include padding(10px,25px,10px,25px);
            color: #636466;
            cursor: pointer;
        }

    }
    &__block {
        display: flex;
        flex-wrap: wrap;  
        justify-content: left;     
        margin-top: 70px;
        transition: all 0.35s ease-in-out;
        &--transition {
            transition: all 0.35s ease-in-out;
        }
        &--inner {
            max-width: 605px;
            border: 6px solid $white-100;
            background: linear-gradient(141.27deg, #E6FAF5 -8.72%, #FAF3E6 109.39%);
            padding: 40px 20px 0 50px;
            margin: 0px 20px 40px 20px;
            transition: all 0.3s ease;
            h4 {
                @include font($base-font,$base-font-size,$font-weight-2,16px);
                color: #5A5A67;
                margin-bottom: 15px;
            } 
            h5 {
                @include font($base-font,$heading-3,$font-weight-3,$line-height-3);
                color: $black-1000;
                max-width: 415px;
                margin-bottom: 50px;
            }
            .btn-link {
                @include font($base-font,$base-font-size,$font-weight-2,20px);
                text-decoration: none;   
                margin-bottom: 75px;     
            }   
            &:hover {
                border: 6px solid $white-100;
                background: linear-gradient(93.59deg, #E6FAF5 -12.1%, #FAF3E6 110.31%);
                box-shadow: 0px 10px 30px -3px rgba(9, 9, 32, 0.15);
                cursor: pointer;
                h5 {
                    color: $secondary-1;
                }
            }                        
        }
    }
}

.projects__sort--filter.active {
    background: $secondary-1;
    color: $white-100;
    border-radius: 20px;    
}

// Media Queries: 1200px - 1399px

$min-width-1200: 1200px;
$max-width-1399: 1399px;

@media (min-width: $min-width-1200) and (max-width: $max-width-1399) {
    .projects {
        &__block {
            &--inner {
                max-width: 510px;
            }
        }
    }
}

// Media Queries: 992px - 1199px

$min-width-992: 992px;
$max-width-1199: 1199px;

@media (min-width: $min-width-992) and (max-width: $max-width-1199) {
    .projects {
        &__block {
            &--inner {
                max-width: 410px;
            }
        }
    }
}

// Media Queries

$max-width: 767px;

@media (max-width: $max-width) {
    .projects {
        @include padding(35px,0px,35px,0px);
        &__block {
            margin-top: 35px;
            &--inner {
                @include margin(0px,0px,5px,0px);
                max-width: 605px;
                h5 {
                    font-size: 30px;
                    line-height: 35px;
                    margin-bottom: 20px;
                }
                .btn-link {
                    margin-bottom: 40px;
                }      
            }
        }
        &__sort {
            &--filter {
                @include margin(0px,5px,0px,5px);
                @include padding(5px,7.5px,5px,7.5px);
            }
        }
    }
    .projects__sort--filter.active {
        border-radius: 2px;
    }
}

</style>