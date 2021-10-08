<?php

namespace App\Http\Requests;

use App\Traits\ApiResponseWithHttpStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Symfony\Component\HttpFoundation\Response;

class JobFormRequest extends FormRequest
{
    use ApiResponseWithHttpStatus;

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
        return [
            'title' => 'required',
            'company' => 'required',
            'location' => 'required',
            'email' => 'required',
            'salary' => 'required',
            'close_date' => 'required',
            'cat_id' => 'required',
            'type' => 'required',
            'description' => 'required'
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException($this->apiResponse('validation errors', null, Response::HTTP_UNPROCESSABLE_ENTITY, false, $validator->errors()));
    }
}
