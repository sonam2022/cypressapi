const {faker} = require("@faker-js/faker");

describe("apitesthttprequest",function(){


    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const fullname = firstname + " " +lastname;
    const personjob = faker.commerce.department();
    
    it("apitestposthttprequest",function(){
        cy.api("POST","https://reqres.in/api/users",{
            name: fullname,
            job: personjob,
        }).should((response)=>{
        
        expect(response.status).to.eq(201);
        expect(response.body).has.property("name");
        expect(response.body.name).to.eq(fullname)
        }).then((response)=>{

const userid =response.body.id;
cy.log(userid);
cy.api("DELETE","https://reqres.in/api/users/"+userid).should((response)=>{

expect(response.status).to.eq(204);

})


        })

        })
        
    
            }) 
            


