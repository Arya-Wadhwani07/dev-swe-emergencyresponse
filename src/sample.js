const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImRjMzdkNTkzNjVjNjIyOGI4Y2NkYWNhNTM2MGFjMjRkMDQxNWMxZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2FoYXlhdGEtZDhhZGIiLCJhdWQiOiJzYWhheWF0YS1kOGFkYiIsImF1dGhfdGltZSI6MTY2NzY3NzYyMywidXNlcl9pZCI6InNiNVU1emZHSU9ST1dtbmd5cWhmcDRJSUl0ejIiLCJzdWIiOiJzYjVVNXpmR0lPUk9XbW5neXFoZnA0SUlJdHoyIiwiaWF0IjoxNjY3Njc3NjI0LCJleHAiOjE2Njc2ODEyMjQsImVtYWlsIjoiYWRzYWRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkc2FkQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.jL3IEo2vPy1Ekrm6VzVyVE5EfU9DuoED2bxFv5dycChJYyo5GrRw1dXeDwHnauQiYTKO4FdJRkTBM4rQucKU3apibc2NA0B1FbOCVMawYGAUWYZZTxU521E6mzF4Saqe8DOlkpxtkQLcEQqjCYtwJ5WYpaBgVvgumJLKneYEBqx1aaiZyMiB_-ZZwMFOsVnt9BZuB_NNHhGusvu69zkQJKnJNv2QQWmzkkF_qX5gPVJJ3xtlBz4PXvjW_QmCsU5eM-hU_6wlz0k4bVsL9sL6HFwBhnA5U9Cmdqf1lMadjzBUp4rynqKnd6yxjsOjj_V9d7IkyogGbBpRbpLh_t5YhQ"

const data = {
    "name":"Arya",
    "contactNumber":"7722043607",
    "address":"ABCD",
    "dateOfBirth": "07/08/2002",
    "bloodGroup":"A+"
  }

const fetch = require('node-fetch')
  fetch("https://dev-swe-sahayata.herokuapp.com/user",{
    method:"POST",
    headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
    },
    body:JSON.stringify(data)
  })