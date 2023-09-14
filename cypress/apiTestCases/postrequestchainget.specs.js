const { faker } = require("@faker-js/faker");


describe("apitesthttprequest",function(){
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const fullname = firstname + " " +lastname

    it("apitestposthttprequest",function(){
        cy.api("POST","https://reqres.in/api/users",{
            name: fullname,
            job: "QA",
        }).should((response)=>{
        
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("name");
         expect(response.body.name).to.eq(fullname);

        }).then((response)=>{
        
        const userid = response.body.id;
        cy.log("user id is"+userid);

        cy.api("GET","https://reqres.in/api/users/"+userid).should((response)=>{

expect(response.status).to.eq(200);
expect(response.body).to.have.property('support');
expect(response.body.support.url).to.eq('https://reqres.in/#support-heading');

} )
        
        
     } )
        
    
            }) 

        })
