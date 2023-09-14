const { faker } = require("@faker-js/faker");
 
describe("apitesthttprequestput",function(){
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const fullname = firstname + " " +lastname;
    const personjob = faker.commerce.department();
    const personjob1 = faker.commerce.department();

    
    it("apitestposthttprequest",function(){
        cy.api("POST","https://reqres.in/api/users",{
            name: fullname,
            job: personjob,
        }).should((response)=>{
        
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("job");
        expect(response.body.job).to.eq(personjob);
        }).then((response)=>{

const userid = response.body.id;
cy.log(userid);

cy.api("PUT","https://reqres.in/api/users/"+userid,{
id:userid,
job:personjob1
}).should((response)=>{
    expect(response.status).to.eq(200);

    expect(response.body).to.have.property("id")
    expect(response.body.id).to.eq(userid);

})

        
    
            }) 



        })

})