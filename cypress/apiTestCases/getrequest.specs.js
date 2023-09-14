describe("apitesthttprequest",function(){

    it("apitesthttprequest",function(){
cy.api("GET","https://reqres.in/api/users?page=2").should((response)=>{

expect(response.status).to.eq(200);
expect(response.body).to.have.property('support');
expect(response.body.support.url).to.eq('https://reqres.in/#support-heading');
})

    })
    it("apitestposthttprequest",function(){
        cy.api("POST","https://reqres.in/api/users",{
            name: "Sonam Koul",
            job: "QA",
        }).should((response)=>{
        
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("name");
        expect(response.body.name).to.eq("Sonam Koul");
        })
        
    
            }) 
            
            
 it("put request",function(){

cy.api("PUT","https://reqres.in/api/users/161",{
    name: "Sonam Koul",
    job: "Project Lead",

}).should((response)=>{

expect(response.status).to.eq(200);
expect(response.body).to.have.property("job");
expect(response.body.job).to.eq("Project Lead");


})
            })



it("deleterequest",function(){

cy.api("DELETE","https://reqres.in/api/users/161").should((response)=>{

expect(response.status).to.eq(204);


})
        })

    })