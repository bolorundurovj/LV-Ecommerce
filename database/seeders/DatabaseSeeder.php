<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();
        Product::factory(20)->create();
        Category::factory(5)->create();

        $categories = Category::all();
        Product::all()->each(function($product) use ($categories) {
            $product->categories()->attach(
                $categories->random(2)->pluck("id")->toArray()
            );
        });
    }
}
