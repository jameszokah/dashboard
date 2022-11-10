import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useEffect, useState } from 'react'
// import faceIO from  'https://cdn.faceio.net/fio.js'

type FaceIO = {
  authenticate(params: any): Promise<object>,
  enroll(params: any): Promise<object>
 } | null;

interface IFaceIO  {
   faceio: FaceIO | null; 
}

declare global {
  interface Window { // ⚠️ notice that "Window" is capitalized here
    faceIO: any,
    faceio: any
  }
}

const Home: NextPage = () => {
  const [{faceio}, setFaceio] = useState<IFaceIO>({ faceio: null });

   const registerUser = async (): Promise<void> => {
        try {

            const user = await faceio?.enroll({
              locale: "auto",
              payload: {
                email: "jameszokah@gmail.com",
                pin: "123456",
              },
            });
            console.log(faceio);
            console.log(user);
        }
        catch(err) {
          console.error(err);
        }
   }  
   
   const authenticateUser = async (): Promise<void> => {

        try {
            const user = await faceio?.authenticate({
              locale: "auto",
            });
            console.log(faceio);
            console.log(user);
        }
        catch(err) {
          console.error(err);
        }
    }

    

    useEffect(() => {
      const faceio = window.faceio;
             setFaceio({faceio});
     
    } , []);



  return (
    <div>
      <Head>
        <title>Hori Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 

      <section className="flex relative dark:bg-main-dark-bg">
        <h1 className="text-2xl text-red-300">Hori Dashboard</h1>

        <div className="fixed right-4 bottom-4" style={{zIndex: "1000"}}>
          <TooltipComponent 
            content='settings'
            position='LeftTop'
          >
            <button>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </section>
      
        {/* <button className="bg-blue-400 rounded-sm px-3 py-1 text-white shadow-md mt-5 hover:shadow-2xl" onClick={() => registerUser()}>Sign in</button> */}

    </div>
  )
}

export default Home
