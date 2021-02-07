<?php

namespace Database\Factories\Model;

use App\Models\Model\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker=$this->faker;
        return [
            'name' => $faker->word,
            'price' => $faker->randomFloat($nbMaxDecimals=2, $min=0, $max = 999),
            'stock' => $faker->randomDigit,
        ];
    }
}
