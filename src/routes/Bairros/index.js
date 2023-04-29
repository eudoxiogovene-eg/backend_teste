const {Router}=require('express')
const controllersBairros =require('../../controllers/Bairros')








const routes=Router()
routes.post('/cadastarbairro',controllersBairros.store)
routes.get('/listarbairros',controllersBairros.index)
routes.put('/actualizarbairro/:id',controllersBairros.update) 
routes.get('/pesquisarbairro/:id',controllersBairros.show)







module.exports= routes