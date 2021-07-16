import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router' //Hook do next

import nookies from 'nookies'


    export default function LoginScreen() {
        const router = useRouter()
        const [githubUser, setGithubUser] = useState('')
        
      return (
        <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <div className="loginScreen">
            <section className="logoArea">
              <img src="https://alurakut.vercel.app/logo.svg" />
    
              <p><strong>Conecte-se</strong> aos seus amigos e familiares usando recados e mensagens instantâneas</p>
              <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
              <p><strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só lugar</p>
            </section>
    
            <section className="formArea">
              <form className="box" onSubmit={(infosDoEvento)=>{
                    infosDoEvento.preventDefault()
                    console.log('Usuario: ', githubUser)

                    fetch('https://alurakut.vercel.app/api/login',{
                        method:'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({githubUser: githubUser})
                    })
                    .then( async (resp)=>{
                        const dadosResp = await resp.json()
                        const token = dadosResp.token

                        nookies.set(null, 'USER_TOKEN', token,{
                            path:'/',
                            maxAge: 86400 * 7
                        })
                        router.push('/')

                    })

                }}>
                <p>
                  Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
              </p>
                <input 
                    placeholder="Usuário" 
                    value={githubUser} 
                    onChange={(evento)=>{
                        const user = evento.target.value
                        setGithubUser(user)
                    }}
                    />
                    {githubUser.length === 0
                        ? 'Preencha o campo'
                        : ''
                    }   
                <button type="submit">
                  Login
              </button>
              </form>
    
              <footer className="box">
                <p>
                  Ainda não é membro? <br />
                  <a href="/login">
                    <strong>
                      ENTRAR JÁ
                  </strong>
                  </a>
                </p>
              </footer>
            </section>
    
            <footer className="footerArea">
              <p>
                © 2021 alura.com.br - <a href="/">Sobre o Orkut.br</a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
              </p>
            </footer>
          </div>
        </main>
      )
    } 
    
     