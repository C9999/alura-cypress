describe('Buscar fotos e dados', ()=> {
    it('buscar fotos do Flavio', ()=> {
        cy.request({
            method: 'GET', 
            url: 'https://www.google.comapialurapic.herokuapp.com/flavio/photos'
        }).then((res) =>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
        })
    })
})