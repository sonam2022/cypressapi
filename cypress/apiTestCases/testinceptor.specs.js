describe("interceptor api",function(){
    
    it.skip("interceptor api",function(){

cy.visit("https://jsonplaceholder.typicode.com/")
cy.intercept({

    path: "/posts"
}).as("spost");
cy.get('a').contains("/posts").click().then((resp)=>{

    cy.log(JSON.stringify(resp))


})




    })


      it("interceptor api",function(){

cy.visit("https://jsonplaceholder.typicode.com/")
cy.intercept("GET","/posts",{fixture: "post.json"}).as("posts")

cy.get('a').contains("/posts").click();
cy.wait("@posts");
cy.log()
})




 
    
    
})