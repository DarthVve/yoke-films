import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='qr-container'>
                <p className='qr-text'>
                    Scan the QR code to get access to our movie library.
                </p>
                <p className='qr-text'>
                    A new Qr code will be generated every 3 mins.
                </p>
                <div className='qrcode'>
                    <img src='https://i.imgur.com/6Z4dX6v.png' alt='QR Code' loading='lazy' />
                </div>
                <button className='qr-gen'>generate</button>
            </div>
        </div>
    )
};

export default Home;