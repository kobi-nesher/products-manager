<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
//        |max:255|unique:products
//        |min:0.01
//        |min:0
        return [
            'name'=>'required|min:2|max:255',
            'price'=>'required|numeric|min:0.01',
            'stock'=>'required|numeric|min:0',
        ];
    }
}
