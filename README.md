# laravel-metronic

## Installation steps
    1. Open backend folder
    2. Run in the console php artisan:migrate for generate fake users.
    3. Run in the console php artisan passport:install
    3. Copy the client id and the client id and the client secret and replace the values of the varables
                    clientId: number = 2;
            	clientSecret: string = 'EgiCjJEZgpzThiFGoPaXpRrAm1qnhoFLUswG2Rnu';
    
    in metronic-laravel\frontend\src\app\auth\_services\authentication.service.ts for the generated ones.
    4. Run php artisan serve on backend
    5. And npm start on frontend