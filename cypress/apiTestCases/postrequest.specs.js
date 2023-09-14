const { faker } = require("@faker-js/faker");

const post = require("../fixtures/post");

describe("apitesthttprequest",function(){
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const name = firstname + " " +lastname

    it.skip("apitestposthttprequest",function(){
        cy.api("POST","https://reqres.in/api/users",{
            name: name,
            job: "QA",
        }).should((response)=>{
        
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.eq(name);
        })
        
    
            }) 

it ("postusingfixtures",function(){


    cy.api("POST","https://reqres.in/api/users",{
        name: post.name,
        job: post.job,
    }).should((response)=>{
    
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property("name");
    expect(response.body).to.have.property("job");
    expect(response.body.name).to.eq(post.name);
    expect(response.body.job).to.eq(post.job);

    })
    

        }) 


})


