<template>
    <div class="gallery">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3>Bitsware Gallery</h3>
                </div>
            </div>            
            <div class="row">
                <div class="col-lg-12">
                    <div class="gallery__block">
                        <lightbox :items="images"></lightbox>            
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gallery',
    data() {
        return {
            images: [
                require('~/assets/images/gallery/gallery01.jpg'),
                require('~/assets/images/gallery/gallery02.jpg'),
                require('~/assets/images/gallery/gallery03.jpg'),
                require('~/assets/images/gallery/gallery04.jpg'),
                require('~/assets/images/gallery/gallery05.jpg')
            ]
        }
    }
}
</script>