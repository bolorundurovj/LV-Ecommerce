<template>
  <div class="grid gap-10 md:grid-cols-3" v-if="products.length">
    <div class="flex flex-col m-4 overflow-hidden rounded shadow-md hover:shadow-lg" v-for="product in products" :key="product.id"> <!--  Card -->
        <router-link :to="{name:'products.show', params:{slug: product.slug}}">
            <img class="object-cover w-full h-56 sm:h-48" src="https://images.unsplash.com/photo-1519139270028-ab664cf42264?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="...">
        </router-link>

        <div class="p-2 overflow-y-visiblerflow-hidden ">
            <div class="font-sans text-lg font-semibold text-gray-600 capitalize">{{product.name}}</div>

            <div class="md:mt-2">
                <p class="font-sans text-base antialiased font-semibold leading-6 text-gray-800 md:text-lg truncate">{{product.description}}</p>
            </div>

            <div class="flex pt-1 md:pt-4">
                <span class="font-sans text-xs text-gray-600 font-edium md:text-base"># {{product.price}}</span>
                <span class="px-4 font-sans text-xs font-medium text-gray-600 md:text-base">Greek National Opera</span>
            </div>
        </div>

        <div class="flex p-2 align-middle border-t">
            <div class="px-4" v-for="category in product.categories" :key="category.id">
                <span class="font-sans text-xs font-medium text-gray-700 uppercase bg-gray-200 rounded p-2">{{category.name}}</span>
            </div>
        </div>
    </div> <!-- end card    -->
</div>
<div class="text-center" v-else>
    <h1>No Products</h1>
</div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
}
</script>

<style>

</style>
