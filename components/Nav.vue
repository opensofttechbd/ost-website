<template>
    <header class="menu">
        <nav class="navbar py-0 navbar-expand-lg">
            <div class="container">
                <div class="menu__block">
                    <div class="menu__block--logo">
                        <NuxtLink to="/">
                            <img src="~assets/svg/logo.svg" alt="Logo" width="161" height="42" class="d-block mx-auto img-fluid">
                        </NuxtLink>                        
                    </div>
                    <div class="menu__block--desktop d-none d-lg-block">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li class="nav-item dropdown">
                                <NuxtLink to="/services">Services</NuxtLink>
                                <span @click="isDropDownShow = !isDropDownShow">
                                    <img src="../assets/svg/arrow-down.svg" alt="Dropdown" class="ms-1">
                                </span>  
                                <transition name="fade">
                                    <ul v-if="isDropDownShow" class="dropdown-menu" v-click-outside="closeDropdown">
                                        <li>
                                            <NuxtLink to="/offshore-team">Offshore Team</NuxtLink>
                                        </li>                                        
                                        <li>
                                            <NuxtLink to="/software-development">Software Development</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/design-development">Design &amp; Development</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/mobile-application">Mobile Application</NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/devops">DevOps</NuxtLink>
                                        </li>  
                                        <li>
                                            <NuxtLink to="/digital-marketing">Digital Marketing</NuxtLink>
                                        </li>                                                                                                              
                                    </ul>
                                </transition>      
                            </li> 
                            <li class="nav-item">
                                <NuxtLink to="/about">About us</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/projects">Case studies</NuxtLink>
                            </li>                                                                                   
                            <li class="nav-item">
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </li>                            
                        </ul>
                    </div>
                    <div @click="isMobileMenu = !isMobileMenu" class="menu__block--mobile d-block d-lg-none">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <transition name="slide-fade">
                        <div v-if="isMobileMenu" class="menu__block--mobile--show">
                            <div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <img src="~assets/svg/logo.svg" alt="Logo" width="161" height="42" class="mx-auto img-fluid">
                                    </div>                                    
                                    <div @click="close" class="menu__block--mobile--close">
                                        <img src="~assets/svg/cross.svg" alt="Close">
                                    </div> 
                                </div>                                       
                                <ul class="navbar-nav mt-4">
                                    <li class="nav-item">
                                        <NuxtLink to="/">Home</NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/services">Services</NuxtLink>
                                        <span class="menu__block--mobile--arrow">
                                            <img @click="openDropdown" src="../assets/svg/arrow-down.svg" alt="Dropdown" class="ms-1">
                                        </span>                                                                                      
                                        <ul :class="{'d-block': isMobileDropdown}" class="dropdown-menu menu__block--mobile--dropdown">
                                            <li class="nav-item">
                                                <NuxtLink to="/offshore-team">Offshore Team</NuxtLink>
                                            </li>                                             
                                            <li class="nav-item">
                                                <NuxtLink to="/software-development">Software Development</NuxtLink>
                                            </li> 
                                            <li class="nav-item">
                                                <NuxtLink to="/design-development">Design &amp; Development</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/mobile-application">Mobile Application</NuxtLink>
                                            </li>                                  
                                            <li class="nav-item">
                                                <NuxtLink to="/devops">DevOps</NuxtLink>
                                            </li> 
                                            <li class="nav-item">
                                                <NuxtLink to="/digital-marketing">Digital Marketing</NuxtLink>
                                            </li>                                                                                                                                                                                                         
                                        </ul>
                                    </li>                                        
                                    <li class="nav-item">
                                        <NuxtLink to="/about">About Us</NuxtLink>
                                    </li> 
                                    <li class="nav-item">
                                        <NuxtLink to="/projects">Case Studies</NuxtLink>
                                    </li>                            
                                    <li class="nav-item">
                                        <NuxtLink to="/contact">Contact</NuxtLink>
                                    </li>                                                                                           
                                </ul>
                            </div>
                        </div>  
                    </transition>                                        
                                      
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

import vClickOutside from 'v-click-outside'

export default {

    name: 'Nav',   
    directives: {
        clickOutside: vClickOutside.directive
    },    
    data() {
        return {
            isMobileDropdown: false,
            isMobileMenu: false,
            isDropDownShow: false,
        }
    },
    methods: {
        closeDropdown (event) {
            this.isDropDownShow = false;
        },
        close() {
            this.isMobileMenu = false;
            this.isMobileDropdown = false;
        },      
        openDropdown: function() {
            this.isMobileDropdown = !this.isMobileDropdown;
        }      
    }      
}
</script>