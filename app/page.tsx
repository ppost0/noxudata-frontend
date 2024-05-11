import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>

      <header id='querySection' className='flex items-center justify-center flex-[1_1_auto] min-h-[104px]'>
        <div id='queryContainer' className='flex items-center gap-4 justify-start w-[800px]'>
          <img src='/avatar.png' alt='User&#39;s avatar' className='rounded-full size-10'></img>
          <p>List my top 10 accounts</p>
        </div>

      </header>


      <main id='noxudataResponse' className='flex items-center justify-center flex-[5_1_auto] bg-slate-100'>

        <div id='responseContainer'>

        <div id='confidenceLevel' className='flex pb-4'>

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

          <div id='tableSubContainer' className=''>
            <p className='p-2'>To find out how many accounts you have, you can use the following query:</p>

            <table className='table-fixed outline outline-1 outline-slate-300 bg-white'>
              <thead>
                <tr className='text-slate-500 text-left'>
                  <th></th>
                  <th>Name</th>
                  <th>Industry</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Segment</th>
                  <th className='pr-14'>Owner ID</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colorado</td>
                  <td>CO</td>
                  <td>Entertainment</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colorado</td>
                  <td>CO</td>
                  <td>Entertainment</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colorado</td>
                  <td>CO</td>
                  <td>Entertainment</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colorado</td>
                  <td>CO</td>
                  <td>Entertainment</td>
                  <td>7</td>
                </tr>
                <tr className='border-t border-1'>
                  <td>477</td>
                  <td>Abbott - Pacocha</td>
                  <td>IT</td>
                  <td>Colorado</td>
                  <td>CO</td>
                  <td>Entertainment</td>
                  <td>7</td>
                </tr>
              </tbody>
            </table>

            <div id='tableFooter'>
              <div id='extraRows'>
                <img></img>
                Only X rows are shown. View full list for more.
              </div>
              <div id='tableButtons'>
                <button>Show full list</button>
                <button>Show query</button>
                <button>Show chart</button>
                <button>Pin to Dashboard</button>
              </div>
            </div>

          </div>


        </div>

        </div>

      </main>


      <footer id='chatModule' className='flex-[1_1_auto] min-h-[144px] bg-violet-300'>
        Footer
      </footer>

    </div>
  );
}
