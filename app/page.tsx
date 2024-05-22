'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';



export default function Home() {

  const [inbox, setInbox] = useState<any>([]);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState<any>(undefined);

  const handleSendMessage = () => {
    console.log(message);
    socket.emit('message', message);
  }


  useEffect(() => {

    const socket = io('http://localhost:3006');

    socket.on('message', (message) => {
      setInbox((inbox: any) => [...inbox, message]);
    })

    setSocket(socket);

  }, [])


  return (

    <div className='flex flex-col h-screen'>

      <header id='querySection' className='flex items-center justify-center flex-[1_1_auto] min-h-[104px]'>
        <div id='queryContainer' className='flex items-center gap-4 justify-start w-[800px]'>
          <img src='/avatar.png' alt='User&#39;s avatar' className='rounded-full size-10'></img>
          <p id='queryText'>List my top 10 accounts</p>
        </div>

      </header>


      <main id='noxudataResponse' className='flex items-center justify-center flex-[5_1_auto] bg-slate-100'>

        <div id='responseContainer'>

        <div id='confidenceLevel' className='flex font-medium pb-6'>

          <button className='flex items-center p-2 border border-1 bg-white text-[#F0671A] border-slate-300 rounded-l-lg'>
            <img src='/exclamation.svg' className='size-6 pr-1'></img>
             Not Confident
          </button>

          <button className='flex items-center p-2 border border-1 border-l-0 bg-white text-[#F0671A] border-slate-300 rounded-r-lg'>
             Human Help
            <img src='/right-arrow.svg' className='size-6 pl-1'></img>
          </button>

        </div>

        <div id='tableContainer' className='flex'>
          <img src='/logo.svg' className='self-start pr-2'></img>

          <div id='tableSubContainer' className='pl-2 pt-2'>
            <p className='pb-2'>To find out how many accounts you have, you can use the following query:</p>

            <table className='table-fixed outline outline-1 outline-slate-300 bg-white rounded-t-lg'>
              <thead>
                <tr className='text-slate-500 text-left'>
                  <th>
                    <img src='/sort.svg' className='inline-block size-4 cursor-pointer'></img>
                  </th>
                  <th className='w-[225px]'>
                    Name
                    <img src='/sort.svg' className='inline-block size-4 cursor-pointer ml-2'></img>
                  </th>
                  <th>Industry</th>
                  <th>
                    City
                    <img src='/sort.svg' className='inline-block size-4 cursor-pointer ml-2'></img>
                  </th>
                  <th>
                    State
                    <img src='/sort.svg' className='inline-block size-4 cursor-pointer ml-2'></img>
                  </th>
                  <th>Segment</th>
                  <th className='pr-4'>
                    Owner ID
                    <img src='/sort.svg' className='inline-block size-4 cursor-pointer ml-2'></img>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colo...</td>
                  <td>CO</td>
                  <td>Ente...</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colo...</td>
                  <td>CO</td>
                  <td>Ente...</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colo...</td>
                  <td>CO</td>
                  <td>Ente...</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colo...</td>
                  <td>CO</td>
                  <td>Ente...</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colo...</td>
                  <td>CO</td>
                  <td>Ente...</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>


            <div id='tableFooter' className='outline outline-1 outline-slate-300 rounded-b-lg'>
              <div id='extraRows' className='flex items-center gap-2 text-slate-600 bg-slate-50 p-2 font-medium border-b border-1 border-slate-300'>
                <img src='/info.svg' className='size-6'></img>
                Only X rows are shown. View full list for more.
                <img src='/close.svg' className='size-4 ml-auto cursor-pointer'></img>
              </div>
              <div id='tableButtons' className='flex bg-white p-3 gap-4'>
                <button className='table-btns'>Show Full List</button>
                <button className='table-btns'>Show Query</button>
                <button className='table-btns'>Show Chart</button>
                <button className='table-btns'>Pin to Dashboard</button>
              </div>
            </div>

          </div>


        </div>

        </div>

      </main>

      <div>
        {inbox.map((entry: string, index: number) => (
          <p key={index}>{entry}</p>
        ))}
      </div>


      <footer id='chatModule' className='flex flex-col items-center flex-[1_1_auto] min-h-[144px] border-t border-1 border-slate-400'>
        <div>
          <div className='flex gap-4 py-4 w-[800px]'>
            <button className='table-btns'>Suggest question 1</button>
            <button className='table-btns'>Suggest question 2</button>
            <button className='table-btns'>Suggest question 3</button>
          </div>

          <div className='flex'>
            <button className='flex items-center gap-2 outline outline-1 outline-slate-300 rounded-l-lg p-2'>
              <img src='/chat.svg' className='size-6'></img>
              Chat
              <img src='/sort.svg' className='inline-block size-4 cursor-pointer ml-2 mr-2'></img>
            </button>
            <div className='flex items-center outline outline-1 outline-slate-300 rounded-r-lg p-2'>
              <input id='chatInput' onKeyUp={(e)=>{
                console.log(e.key)
                if (e.key === 'Enter' || e.keyCode === 13) {
                  return handleSendMessage();
                }
          }} onChange={(e) => setMessage(e.target.value)} placeholder='Start a new chat' className='pl-2 w-[50vw]'></input>
              <img src='/send.svg' onClick={handleSendMessage} className='size-8 cursor-pointer'></img>
            </div>
            <button className='outline outline-1 outline-[#DC2626] text-[#DC2626] px-6 rounded-lg ml-4'>End Chat</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
