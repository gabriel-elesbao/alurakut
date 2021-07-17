import React from 'react'
import {useState, useEffect} from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

import jwt from 'jsonwebtoken'
import nookies from  'nookies'


function ProfileSideBar(props){
  return(
    
    <Box as='aside'>
     
       <img src ={`https://github.com/${props.gitHubUser}.png` } style={{borderRadius:'8px'}}/>
       <hr/>

       <p>
            <a className='boxLink' href={`https://github.com/${props.gitHubUser}` }>
              @{props.gitHubUser}
            </a>
       </p>
       
       <hr />

       <AlurakutProfileSidebarMenuDefault/>
      
    </Box>
  )
}
function ProfileRelationsBox(props){
  const [seg, setSeg] = useState()
  const totalSeguidores = fetch(`https://api.github.com/users/${props.userGit}`)
                          .then((resp)=> resp.json())
                          .then((resp)=> {
                            setSeg(resp.followers)
                          })
                          

  return (
    <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          {props.title} ({seg})
        </h2>
        <ul>
          {props.items.slice(2,8).map((itemAtual) => {
           
            return (
              <li key={itemAtual}>
                <a href={`https://github.com/${itemAtual.login}`}>
                  <img src={itemAtual.avatar_url} />
                  <span>{itemAtual.login}</span>
                </a>
              </li>
            )
          })}
        </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home(props) {
 
    

  const gitHubUser = props.githubUser
  const [comunidades,setComunidades] = useState([])
  const pessoasFavoritas = [
      'juunegreiros',
      'omariosouto',
      'peas',
      'rafaballerini',
      'marcobrunodev',
      'felipefialho'
    ]
    const [seguidores, setSeguidores]=useState([]);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${gitHubUser}/followers`)
        .then((respServidor)=>{
            return respServidor.json()
    
        })
        .then((respCompleta)=>{
            setSeguidores(respCompleta)
          })

          // API GrapQL
          fetch('https://graphql.datocms.com/',{
            method: 'POST',
            headers: {
              'Authorization': 'e69b3f09c2fdc09f83b43199ace816',
              'Content-Type': 'application/json',
              'Accept': 'application/json',

            },
            body: JSON.stringify({
              "query": `query {
                allCommunities{
                  id,
                  title,
                  imageUrl
                  creatorSlug
                }
              }`
            })


          }).then((resp)=> resp.json())
            .then((resp)=>{
              const comunidadesDato = resp.data.allCommunities
              setComunidades(comunidadesDato)
              
            })


      },[]) //colocando um array como segundo parametro, o useEffect, irá carregar apenas uma vez


  return (
    <> 
    <AlurakutMenu githubUser={gitHubUser}/>
    
    <MainGrid> 
    
      <div className='profileArea'style={{gridArea:'profileArea'}}>
        
               <ProfileSideBar gitHubUser={gitHubUser} />

        
          
      </div>
       
      <div className='welcomeArea' style={{gridArea:'welcomeArea'}}>
        <Box>
          <h1 className='title'>
              Bem vindo(a)
          </h1>
          <span>{gitHubUser}</span>
          <OrkutNostalgicIconSet/>  
        </Box>

        <Box>
           <h2 className='subTitle'>O que você deseja fazer?</h2>
           <form onSubmit={function handleCriaComunidade(e){
                e.preventDefault()

                const dadosDoForm = new FormData(e.target)

                const comunidade = {
                  title:  dadosDoForm.get('title'),
                  imageUrl: dadosDoForm.get('image'),
                  creatorSlug: gitHubUser
                }
                fetch('/api/comunidades',{
                  method: 'POST',
                  headers:{
                      'Content-Type':'application/json'
                  },
                  body: JSON.stringify(comunidade)
                }).then(async (resp)=>{
                    const dados= await resp.json()
                    console.log(dados.registroCriado)
                    const comunidade = dados.registroCriado
                    const comunidadesAtualizadas = [...comunidades, comunidade]
                   setComunidades(comunidadesAtualizadas)
                })

                
           }}>
             <div>
              <input 
                  placeholder='Qual vai ser o nome da sua  comunidade?'
                  name='title' 
                  aria-label='Qual vai ser o nome da sua  comunidade?'
                  type='text'
                />
             </div>

             <div>
              <input 
                  placeholder='Coloque uma URL para usarmos de capa'
                  name='image' 
                  aria-label='Qual vai ser o nome da sua  comunidade?'
                  type='text'
                />
             </div>

             <button>
               Criar comunidade
             </button>

           </form>
        </Box>
      </div> 
        
      <div className='profileRelationsArea'style={{gridArea:'profileRelationsArea'}}>

      <ProfileRelationsBox userGit={gitHubUser} title='Seguidores' items={seguidores}/>

      <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Comunidades ({comunidades.length})
              </h2>
              <ul>
                {comunidades.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/communities/${itemAtual.id}`}>
                        <img src={itemAtual.imageUrl} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
          </ProfileRelationsBoxWrapper>


        <ProfileRelationsBoxWrapper>
              <h2 className='smallTitle'>
                  Pessoas da comunidade ({pessoasFavoritas.length})
              </h2>


              <ul>
                  {pessoasFavoritas.map((itemAtual)=>{
                  return(
                    <li key={itemAtual}>
                        <a href={`/users/${itemAtual}`}>
                          <img src={`https://github.com/${itemAtual}.png`} />
                          <span>{itemAtual}</span>
                        </a>
                    </li>
                    
                  ) 
                  })}
              </ul>
        </ProfileRelationsBoxWrapper>

         
          
        
      </div> 

    </MainGrid>
   </> 
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
}

