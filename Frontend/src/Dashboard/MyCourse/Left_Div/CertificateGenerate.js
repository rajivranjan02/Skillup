import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import '../mycourse_style/certificate_Genarate.css'

function CertificateGenerate() {
  const Cerificatetemplate = `${process.env.PUBLIC_URL}/photos/CerificateImg.png`;
  const [currentDateTime, setCurrentDateTime] = useState(null);
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleCertificateClick = async () => {
    if (!isChecked) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    setCurrentDateTime(formattedDateTime);

    // Wait for the state to update
    setTimeout(() => {
      generateCertificate();
    }, 100);
  };

  const generateCertificate = async () => {
    const certificateElement = document.getElementById('certificate');
    const canvas = await html2canvas(certificateElement);
    const image = canvas.toDataURL('image/png');
    setDownloadUrl(image);
  };

  return (
    <div className='main'>
      <h1 id='heading'>Generate Your Certificate From Here</h1>
        <div className='main2'>
        <div className='container_certificate' id='certificate'>
          <img id="template" src={require('../images/CerificateImg.png')} alt="template" />
          <div className='content'>
            <div className='name_generate'><h1>{name}</h1></div>
            <div className='time_generate'>{currentDateTime && <p>{currentDateTime}</p>}</div>
          </div>
        </div>

      <div className='formpage'>
        <div className='terms'>
          <div className='termscheck'>
            <input 
              type="checkbox" 
              id="termsCheckbox" 
              checked={isChecked} 
              onChange={(e) => setIsChecked(e.target.checked)} 
            />
            <h1>I have Successfully Completed the Course.</h1>
          </div>
          <div className='generate'>
            <input 
              type='text' 
              placeholder='Enter Your Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleCertificateClick}>Get Certificate</button>
          </div>
          {downloadUrl && (
            <div  className="button-89" role="button">
              <a href={downloadUrl} download="certificate.png">Download Certificate</a>
            </div>
          )}
        </div>
      </div>
        </div>
    </div>
  );
}

export default CertificateGenerate;
