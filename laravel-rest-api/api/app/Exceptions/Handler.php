<?php

namespace App\Exceptions;

use http\Env\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (NotFoundHttpException $e, $request){
            if($request->expectsJson())
            {
                return response()->json([
                    'errors'=>'Not Found',
                ],404);
            }
        });

        $this->renderable(function (ModelNotFoundException $e, $request){
            if($request->expectsJson())
            {
                return response()->json([
                    'errors'=>'Model Not Found',
                ],404);
            }
        });
    }


}
