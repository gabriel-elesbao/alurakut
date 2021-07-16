import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Alurakut</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Venha fazer parte dessa comunidade!  :D</title>
            <meta name="title" content="Venha fazer parte dessa comunidade!  :D"/>
            <meta name="description" content=""/>

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://alurakut-phi-nine.vercel.app/"/>
            <meta property="og:title" content="Venha fazer parte dessa comunidade!  :D"/>
            <meta property="og:description" content=""/>
            <meta property="og:image" content=""/>

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://alurakut-phi-nine.vercel.app/"/>
            <meta property="twitter:title" content="Venha fazer parte dessa comunidade!  :D"/>
            <meta property="twitter:description" content=""/>
            <meta property="twitter:image" content=""/>
        
        
      </Head>
    </div>
  )
}

export default IndexPage