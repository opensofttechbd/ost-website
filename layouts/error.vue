<template>
    <div class="error vh-100 d-flex align-items-center justify-content-center flex-column">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <img src="~/assets/svg/error.svg" alt="Error" class="mx-auto d-block img-fluid">
                        <div class="text-center">
                            <h1>Oops!</h1>
                            <h2>We can't seem to find the page you're looking for</h2>
                            <div class="error__btn mt-3">
                                <NuxtLink to="/" class="btn-blue">
                                    <div class="d-flex align-items-center">
                                        Back to homepage
                                    </div>
                                </NuxtLink>                  
                            </div>
                        </div>                        
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: "Error"
}
</script>