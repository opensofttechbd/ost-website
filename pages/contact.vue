<template>
    <section>
        <Nav/>
        <header-inner
            headline="Let’s Talk "
            headlineStyle="Business!"
            :ornaments="headlineFontStyle"
            subheadline="Do you have a project in need of some attention? Fill out the form below and we'll get back to you in a heartbeat ❤️"
        ></header-inner>
        <div class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="contact__top--info">
                                    <img src="~/assets/images/call-icon.png" alt="Call us">
                                    <h3 class="mt-3">Call us</h3> 
                                    <div class="mt-2">
                                        <a href="tel:19293403037">+1 (929) 340-3037</a>     
                                    </div>                             
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="contact__top--info">
                                    <img src="~/assets/images/mail-icon.png" alt="Mail us">
                                    <h3 class="mt-3">Drop us a line</h3> 
                                    <div class="mt-2">
                                        <a href="mailto:info@bitsware.org">info@bitsware.org</a>     
                                    </div>                      
                                </div>                              
                            </div>
                            <div class="col-lg-4">
                                <div class="contact__top--info">
                                    <img src="~/assets/images/social-icon.png" alt="Social">
                                    <h3 class="mt-3">Find us on</h3> 
                                    <div class="contact__socials mt-2">
                                        <ul class="list-inline mb-0">
                                            <li v-for="(contactsocial,i) in contactsocials" :key="i" class="list-inline-item">
                                                <a :href="contactsocial.link" :aria-label="contactsocial.name" target="_blank"><i :class="[contactsocial.social,contactsocial.socialClass]"></i></a> 
                                            </li>
                                        </ul>                                
                                    </div>                                                                  
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>    
                <div class="row mt-5">
                    <div class="col-lg-5 d-none d-lg-block">
                        <div class="contact__left--map d-none d-lg-block">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387198.045735161!2d-74.60278806654232!3d40.696333898371634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686905272050!5m2!1sen!2sbd" width="100%" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                            
                        </div>                                                 
                    </div>
                    <div class="col-lg-7 contact__border">
                        <div class="contact__right">
                            <h2>Hey! Got a project?</h2>
                            <div class="contact__right--services">
                                <h4>Services you need</h4>
                                <ul class="contact__right--btn list-inline">
                                    <li v-for="item in contactServices" 
                                    :key="item" 
                                    class="list-inline-item" @click="selectService(item)">
                                        <div :class="isSelected(item) ? 'selected-service' : ''" class="btn-gray cursor-pointer">
                                            <span v-html="item"></span>
                                        </div>
                                    </li>                                                                                                                                                                                                
                                </ul>                                
                            </div>
                            
                            <div class="contact__right--form">
                                <form @submit.prevent="submitForm">
                                <!-- Form inputs -->
                                <div class="row">
                                    <div class="col-lg-6">
                                    <label for="name" class="form-label">Your name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Full name" v-model="formData.fullName" required>
                                    </div>
                                    <div class="col-lg-6">
                                    <label for="email" class="form-label">Your email</label>
                                    <input type="email" class="form-control" id="email" placeholder="mail@domain.com" v-model="formData.email" required>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                    <label for="comment" class="form-label">Tell us more about your idea</label>
                                    <textarea class="form-control" placeholder="comment" id="comment" v-model="formData.comment" required></textarea>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                                        <div>
                                            <label for="file-upload" class="upload btn-upload btn-file">
                                                <img :src="attachement" alt="Attachment" class="me-3">
                                                Attachment
                                                <input
                                                    id="file-upload"
                                                    type="file"
                                                    multiple
                                                    @change="handleFileUpload"
                                                    accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .xls, .xlsx, .xlsx"
                                                >
                                                </label>
                                                <div v-if="selectedFiles?.length > 0">
                                                    <div class="contact__upload" v-for="file in selectedFiles" :key="file.name">{{ file.name }}</div>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                                        <button type="submit" class="btn-blue float-end border-none">Submit</button>
                                    </div>
                                    <div v-if="successMessage" class="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div class="pt-4 contact__success">
                                            <div>
                                                <img src="~/assets/images/check.png" alt="Confirm">
                                            </div>
                                            <div>
                                                {{ successMessage }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </form>
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
import headlineFontStyle from '~/assets/svg/contact-ornament.svg';
import attachement from '~/assets/svg/attachment.svg';
const API_GATEWAY_URL = "https://api.bitsware.org/contact-form"


export default {
    name: 'Contact',
    components: {
        Nav,
        "header-inner": () => import("@/components/Common/HeaderInner"),
        Footer
    },

    data() {
        return {
            headlineFontStyle,
            attachement,
            contactsocials: [
            {
                    name: 'Facebook',
                    social: 'fa fa-facebook',
                    socialClass: 'facebook',
                    link: 'https://www.facebook.com/bitswarellc'
                },
                {
                    name: 'Twitter',
                    social: 'fa fa-twitter',
                    socialClass: 'twitter',
                    link: 'https://twitter.com/_bitsware'
                },
                {
                    name: 'Pinterest',
                    social: 'fa fa-pinterest',
                    socialClass: 'pinterest',
                    link: 'https://www.pinterest.com/bitsware'
                },
                {
                    name: 'Instagram',
                    social: 'fa fa-instagram',
                    socialClass: 'instagram',
                    link: 'https://www.instagram.com/bitswarellc'
                },
                {
                    name: 'Youtube',
                    social: 'fa fa-youtube-play',
                    socialClass: 'youtube',
                    link: 'https://www.youtube.com/@bitsware'
                },
                {
                    name: 'Linkedin',
                    social: 'fa fa-linkedin',
                    socialClass: 'linkedin',
                    link: 'https://www.linkedin.com/company/bitswarellc'
                }  
            ],
            formData: {
                fullName: "",
                email: "",
                comment: "",
            },
            contactServices: [
                "Business Analysis &amp; Research",
                "Product Strategy",
                "UX/UI Design",
                "Web Design",
                "Web Development",
                "Mobile Application",
                "DevOps"
            ],
            selectedService: [],
            selectedFiles: null,
            successMessage: ""  
        }
    },
    methods: {
        async submitForm() {
            const formData = new FormData();
            formData.append('fullName', this.formData.fullName);
            formData.append('email', this.formData.email);
            formData.append('comment', this.formData.comment);
    
            if (this.selectedService) {
                formData.append('serviceType', this.selectedService);
            }
            if (this.selectedFiles?.length) {
                formData.append('attachment', this.selectedFiles);
            }

            this.successMessage = "Thank you. We will contact you shortly!"
                    setInterval(() => {
                        this.successMessage = ""
                    }, 2000);
            try {
                const response = await fetch(API_GATEWAY_URL, {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                });
                if (response) {
                    this.resetForm()
                    formData = null
                    this.successMessage = "Thank you. We will contact you shortly!"
                    console.log(response)
                    setInterval(() => {
                        this.successMessage = ""
                    }, 2000);
                }
            } catch (error) {
                console.error(error);
            }

        },
        resetForm(){
            this.formData.fullName = ""
            this.formData.comment = ""
            this.formData.email = ""
            this.selectedFiles = []
            this.selectedService = []
        },
        selectService(item){
            const found = this.selectedService?.find(data=> data ==item);
            if (!found) {
                this.selectedService.push(item)
            }else{
                this.selectedService = this.selectedService?.filter(data=> data !=item)
            }
            
        },
        handleFileUpload(event) {
            const files = event.target.files;

            if (files.length === 0) {
                this.selectedFiles = []; // Reset the selected files array
                return; // No files selected
            }

            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'xlsx'];
            const filteredFiles = [];
            const maxSize = 5 * 1024 * 1024;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const extension = file.name.split('.').pop().toLowerCase();

                if (allowedExtensions.includes(extension) && file.size <= maxSize) {
                    filteredFiles.push(file);
                }
            }

            this.selectedFiles = filteredFiles;
            console.log(this.selectedFiles);
        },
        isSelected(item){
            const found = this.selectedService?.find(data=> data ==item);
            if (!found) {
                return false; //
            }
            return true;
        }
  
        
  }
}
</script>
<style scoped>
.selected-service {
    color: #FFFFFF;
    border: 1px solid #4285F4;
    background-color: #4285F4;
    cursor: pointer;
    transition: all 0.2s ease;
}
.border-none {
    border: 0;
}
.text-right {
    text-align: right;
}
</style>