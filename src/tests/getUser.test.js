const app = require("../app")
const request = require("supertest")
const token = require("./token")

test("Get All the users",async()=>{
    const res = await request(app).get('/user').send()
    expect(res.status).toBe(200)
})

test("Create a User",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        name:"Arya",
        contactNumber:"7722043607",
        address:"ABCD",
        dateOfBirth: "07/08/2002",
        bloodGroup:"A+"  
    })
    expect(res.status).toBe(200)
})

test("Checking with improper phone number",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        name:"Arya",
        contactNumber:"abcd1234",
        address:"ABCD",
        dateOfBirth: "07/08/2002",
        bloodGroup:"A+" 
    })
    expect(res.status).toBe(400)
})

test("Checking with improper blood group",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        name:"Arya",
        contactNumber:"abcd1234",
        address:"ABCD",
        dateOfBirth: "07/08/2002",
        bloodGroup:"C+" 
    })
    expect(res.status).toBe(400)
})

test("Checking with null name",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        contactNumber:"7722043607",
        address:"ABCD",
        dateOfBirth: "07/08/2002",
        bloodGroup:"A+" 
    })
    expect(res.status).toBe(400)
})

test("Checking with null address",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        name:"Arya",
        contactNumber:"7722043607",
        dateOfBirth: "07/08/2002",
        bloodGroup:"A+" 
    })
    expect(res.status).toBe(400)
})

test("Checking with null date of birth",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        name:"Arya",
        contactNumber:"7722043607",
        address:"ABCD",
        bloodGroup:"A+" 
    })
    expect(res.status).toBe(400)
})

test("Checking with null blood group",async()=>{
    const res = await request(app).post('/user').set('Authorization','Bearer '+token).send({
        name:"Arya",
        contactNumber:"7722043607",
        address:"ABCD",
        dateOfBirth: "07/08/2002",
    })
    expect(res.status).toBe(400)
})