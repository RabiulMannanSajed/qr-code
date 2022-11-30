import Favicon from 'react-favicon';
import icon from '../src/images/favicon-32x32.png'
import qrCode from '../src/images/image-qr-code.png';
function App() {
  return (
    <>
      <div>
        <Favicon url={icon} />
      </div>
      <div className='grid justify-items-center mt-10 '>
        <div className=" w-96 bg-base-100 shadow-xl rounded-md ">
          <figure className='p-5'><img className='rounded-md' src={qrCode} alt="Shoes" /></figure>
          <div className="card-body justify-items-center">
            <h2 className="card-title">Improve Your front-end Skills by building project</h2>
            <p>Scan the QR code to visit frontend Mentor and take you coding skills to the next level</p>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
