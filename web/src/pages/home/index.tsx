import { useEffect, useState } from 'react';

import './home.scss';
import axios from '../../axios';

const Home = () => {
    const [qr, setQr] = useState('');

    const generateQR = async () => {
        const res = await axios.get('/qrcode-gen');
        setQr(res.data);
    };

    useEffect(() => {
        generateQR();

        // setTimeout(() => {
        //     generateQR();
        // }, 180000);
    }, []);

    return (
        <div className='home'>
            <div className='qr-container'>
                <p className='qr-text'>
                    Scan the QR code to get access to our movie library.
                </p>
                <p className='qr-text'>
                    A new QR code will be generated every 3 mins.
                </p>
                <div className='qrcode'>
                    <img src={qr} alt='QR Code' loading='lazy' />
                </div>
                <button className='qr-gen' onClick={generateQR}>generate</button>
            </div>
        </div>
    )
};

export default Home;