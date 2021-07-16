import {SiteClient} from 'datocms-client'

export default async function getFromRequests(request, response){
    const TOKEN ='334938933211bb9e3390f39cc0726c'
    const client = new SiteClient(TOKEN);

    if(request.method==='POST'){

        //Validar os dados antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "967804", // model ID
            ...request.body
            // title: 'Comunidade de teste',
            // imageUrl: 'https://vercel.com/api/www/avatar/u3HDdSXcJy3ZNrzE2TLU5sXv?&s=204',
            // creatorSlug: 'gabriel-elesbao'
          });
        
    
        console.log(registroCriado)
        response.json({
            dados:'Algum dado qualquer',
            registroCriado: registroCriado
        })
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

   
}