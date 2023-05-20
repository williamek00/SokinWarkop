Endpoints
====
post/favourite/:id
delete/favourite/:id
get/favourite'
post/login
post/register
post/login
post/generate-midtrans
get/warkop
get/warkop/:id
===
Favourite Endpoints
POST /favourites/:id
Add a new favourite Warkop by id.

Request Parameters:

id - required, ID of the Warkop to add to favourites
Request Headers:

Authorization - required, JWT token
Response:

201 Created
500 Internal Server Error

response 
{
  "favourites": {
    "UserId": 1,
    "WarkopId": 3,
    "updatedAt": "2023-04-07T10:12:28.548Z",
    "createdAt": "2023-04-07T10:12:28.548Z",
    "id": 1
  },
  "UserId": 1
}
==============
GET /favourites
Get all favourite Warkops for the logged in user.

Request Headers:

Authorization - required, JWT token
Response:

200 OK
500 Internal Server Error

response

[  {    "id": 1,    "UserId": 1,    "WarkopId": 3,    "createdAt": "2023-04-07T10:12:28.000Z",    "updatedAt": "2023-04-07T10:12:28.000Z",    "Warkop": 
{      "id": 3,      "name": "Warkop A",      "location": "Jakarta",      "createdAt": "2023-04-07T09:44:08.000Z",      "updatedAt": "2023-04-07T09:44:08.000Z"    }  },  {    "id": 2,    "UserId": 1,    "WarkopId": 5,    "createdAt": "2023-04-07T10:12:40.000Z",    "updatedAt": "2023-04-07T10:12:40.000Z",    "Warkop": {      "id": 5,      "name": "Warkop C",      "location": "Surabaya",      "createdAt": "2023-04-07T09:44:08.000Z",      "updatedAt": "2023-04-07T09:44:08.000Z"    }  }]
================
DELETE /favourites/:id
Remove a favourite Warkop by id.

Request Parameters:

id - required, ID of the Warkop to remove from favourites
Request Headers:

Authorization - required, JWT token
Response:

201 Created
500 Internal Server Error

response 
{
  "name": "Success delete id 3"
}
=======
POST /login
Log in a user and returns an access token.

Request Body:
{
  "email": "example@example.com",
  "password": "password123"
}

response 200 ok
{
  "access_token": "<JWT_TOKEN>",
  "email": "example@example.com"
}

response 400 
{
  "message": "InvalidEmail"
}
{
  "message": "InvalidPassword"
}
{
  "message": "Email or password is wrong!"
}

POST /register
Create a new user account.
{
  "email": "example@example.com",
  "password": "password123"
}
response 201 
{
  "message": "User with this example@example.com has been created"
}
response 400
{
  "message": "InvalidEmail"
}
{
  "message": "InvalidPassword"
}
===========
GET /subscription
Generate a Midtrans snap token for premium subscription payment.

Headers:

Authorization: Bearer <JWT_TOKEN>
Responses:

200 OK
{
  "token": "<MIDTRANS_SNAP_TOKEN>"
}

400 Bad Request
{
  "message": "ALREADY_PREMIUM"
}
=============
Favourites
POST /favourites/:id
Add a new warkop to the user's favourites list.

Headers:

Authorization: Bearer <JWT_TOKEN>
URL Parameters:

id: The id of the warkop to add to favourites.
Responses:

201 Created
{
  "favourites": {
    "UserId": 1,
    "WarkopId": 1,
    "createdAt": "2023-04-07T06:34:56.183Z",
    "updatedAt": "2023-04-07T06:34:56.183Z"
  },
  "UserId": 1
}

Response 400
{
  "message": "Favourite already exists"
}
=============
GET /favourites
Get a list of the user's favourite warkops.

Headers:

Authorization: Bearer <JWT_TOKEN>
Responses:

200 OK
[
  {
    "id": 1,
    "name": "Warkop 1",
    "address": "Jl. Sudirman No. 1",
    "createdAt": "2023-04-07T06:34:56.183Z",
    "updatedAt": "2023-04-07T06:34:56.183Z"
  },
  {
    "id": 2,
    "name": "Warkop 2",
    "address": "Jl. Gatot Subroto No. 2",
    "createdAt": "2023-04-07T06:34:56.183Z",
    "updatedAt": "2023-04-07T06:34:56.183Z"
  }
]
==============
DELETE /favourites/:id
Remove a warkop from the user's favourites list.

Headers:

Authorization: Bearer <JWT_TOKEN>
URL Parameters:

id: The id of the warkop to remove from favourites.
=============

API documentation for WarkopController:

Base URL: http://localhost:3000

Get all warkops
Returns a list of all warkops, with optional filtering and pagination.

URL: /warkops

Method: GET

Query Parameters:

filter (optional): string - Search warkops by name
page (optional): integer - Page number for pagination (default: 0)
size (optional): integer - Number of results per page (default: 6, maximum: 3)
Success Response:

Status Code: 200
Content:
{
    "warkop": [
        {
            "id": 1,
            "name": "Warkop Mamink",
            "address": "Jl. Salemba Raya No. 40, RT.14/RW.3, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430",
            "city": "Jakarta Pusat",
            "createdAt": "2022-04-06T14:00:00.000Z",
            "updatedAt": "2022-04-06T14:00:00.000Z"
        },
        {
            "id": 2,
            "name": "Warkop Dikala Santai",
            "address": "Jl. Cideng Barat No.34, RT.2/RW.2, Cideng, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10150",
            "city": "Jakarta Pusat",
            "createdAt": "2022-04-06T14:00:00.000Z",
            "updatedAt": "2022-04-06T14:00:00.000Z"
        }
    ],
    "totalPages": 2
}

Error Responses:

Status Code: 500
Content:
{
    "message": "Internal server error"
}


Get a warkop by ID
Returns a single warkop by ID, with weather information for the warkop's city.

URL: /warkops/:id

Method: GET

URL Parameters:

id (required): integer - ID of the warkop to retrieve
Success Response:

Status Code: 200
Content:

{
    "id": 1,
    "name": "Warkop Mamink",
    "address": "Jl. Salemba Raya No. 40, RT.14/RW.3, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430",
    "city": "Jakarta Pusat",
    "createdAt": "2022-04-06T14:00:00.000Z",
    "updatedAt": "2022-04-06T14:00:00.000Z",
    "weather": {
        "weather": {
            "description": "few clouds",
            "icon": "02n",
            "id": 801,
            "main": "Clouds"
        },
        "wind": {
            "deg": 320,
            "speed": 1.54
        },
        "main": {
            "humidity": 75,
            "pressure": 1011,
            "temp": 27.52,
            "temp_max
        }
    }
    }

