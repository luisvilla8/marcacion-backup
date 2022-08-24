import '../styles/Loader.css'

export const Loader = () => {
  return (
    <div className='fixed backdrop-blur-sm bg-neutral-300/50 w-full h-screen left-0 top-0 grid place-items-center'>
      <div className='flex flex-col justify-center items-center bg-white p-8 rounded-md'>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> 
          <div></div>
          <div></div>
        </div>
          <p className='font-bold text-base text-center w-auto mt-6 text-gray-700'>Su asistencia esta siendo registrada</p>
      </div>
    </div>
  );
}
