import React from 'react'
import styles from './Slider.module.css'
import Slider from 'react-slick';
import BG from '../Free/BG.png'
import FMlogo from '../Free/File Manger/logo.webp'
import QRlogo from '../Free/QR Code/logo.webp'
import SMSlogo from '../Free/SMS backup/logo.webp'
import RMlogo from '../Free/Remote/logo.webp'
import FM1 from '../Free/File Manger/1.png'
import FM2 from '../Free/File Manger/2.png'
import FM3 from '../Free/File Manger/3.png'
import QR1 from '../Free/QR Code/1.webp'
import QR2 from '../Free/QR Code/2.webp'
import QR3 from '../Free/QR Code/3.webp'
import SMS1 from '../Free/SMS backup/1.webp'
import SMS2 from '../Free/SMS backup/2.webp'
import SMS3 from '../Free/SMS backup/3.webp'
import RM1 from '../Free/Remote/1.png'
import RM2 from '../Free/Remote/2.png'
import RM3 from '../Free/Remote/3.png'
import play from '../Free/play.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sample = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Enable auto-sliding
        autoplaySpeed: 3000,
    };
    return (
        <div className={styles['slider-container']} style={{ backgroundImage: `url(${BG})` }}>
            <Slider {...settings}>
                {/* File Manager */}
                <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                    <div className={styles['left-section']}>
                        <img src={FMlogo} alt="Logo" className={styles.logo} />
                        <h1>File Explorer: Manager & Clean</h1>
                        <p>File Manager to organize data. Move, delete, rename files & EZ file cleaner</p>

                        <a href="/apps/file-manager"><button className={styles.read}>READ MORE</button></a>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                            <img className={styles.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={styles['right-section']}>
                        <img className={styles.mainimg} src={FM1} alt="Screenshot 1" />
                        <img className={styles.mainimg} src={FM2} alt="Screenshot 2" />
                        <img className={styles.mainimg} src={FM3} alt="Screenshot 3" />
                    </div>
                    <div className={styles['altleft-section']}>
                        <div className={styles['altcol-l']}>
                            <img src={FMlogo} alt="Logo" className={styles.logo} />
                            <h1>File Explorer: Manager & Clean</h1>
                        </div>
                        <div className={styles['altcol-r']}>
                            <p>File Manager to organize data. Move, delete, rename files & EZ file cleaner</p>
                            <a href="/apps/file-manager"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                    </div>
                    <div className={styles['altright-section']}>
                        <img className={styles.altimg} src={FM1} alt="Screenshot 1" />
                    </div>
                </div>
                <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                    <div className={styles['left-section']}>
                        <img src={QRlogo} alt="Logo" className={styles.logo} />
                        <h1>QR, Barcode Scanner & Reader</h1>
                        <p>Scan and generate QR code and barcode effortlessly with additional custom design features through QR, Barcode Scanner & Reader.</p>

                        <a href="#qr-reader"><button className={styles.read}>READ MORE</button></a>
                        <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                            <img className={styles.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={styles['right-section']}>
                        <img className={styles.mainimg} src={QR1} alt="Screenshot 1" />
                        <img className={styles.mainimg} src={QR2} alt="Screenshot 2" />
                        <img className={styles.mainimg} src={QR3} alt="Screenshot 3" />
                    </div>
                    <div className={styles['altleft-section']}>
                        <div className={styles['altcol-l']}>
                            <img src={QRlogo} alt="Logo" className={styles.logo} />
                            <h1>QR, Barcode Scanner & Reader</h1>
                        </div>
                        <div className={styles['altcol-r']}>
                            <p>Scan and generate QR code and barcode effortlessly with additional custom design features through QR, Barcode Scanner & Reader.</p>
                            <a href="qr-reader"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                    </div>
                    <div className={styles['altright-section']}>
                        <img className={styles.altimg} src={QR1} alt="Screenshot 1" />
                    </div>
                </div>
                {/* Remote */}
                <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                    <div className={styles['left-section']}>
                        <img src={RMlogo} alt="Logo" className={styles.logo} />
                        <h1>Remote Control for TV - AC</h1>
                        <p>Universal TV Remote : ReMo is an IR-based app that effortlessly links with various TVs including smart TVs through a single tap.</p>

                        <a href="remote"><button className={styles.read}>READ MORE</button></a>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
                            <img className={styles.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={styles['right-section']}>
                        <img className={styles.mainimg} src={RM1} alt="Screenshot 1" />
                        <img className={styles.mainimg} src={RM2} alt="Screenshot 2" />
                        <img className={styles.mainimg} src={RM3} alt="Screenshot 3" />
                    </div>
                    <div className={styles['altleft-section']}>
                        <div className={styles['altcol-l']}>
                            <img src={RMlogo} alt="Logo" className={styles.logo} />
                            <h1>Remote Control for TV - AC</h1>
                        </div>
                        <div className={styles['altcol-r']}>
                            <p>Universal TV Remote : ReMo is an IR-based app that effortlessly links with various TVs including smart TVs through a single tap.</p>
                            <a href="remote"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                    </div>
                    <div className={styles['altright-section']}>
                        <img className={styles.altimg} src={RM1} alt="Screenshot 1" />
                    </div>
                </div>
                {/* SMS backup  */}
                <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                    <div className={styles['left-section']}>
                        <img src={SMSlogo} alt="Logo" className={styles.logo} />
                        <h1>Recover Deleted Message, Calls</h1>
                        <p>EZ Restore is one of the simplest and fastest ways to backup and restore SMS and Call logs</p>

                        <a href="sms-backup"><button className={styles.read}>READ MORE</button></a>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                            <img className={styles.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={styles['right-section']}>
                        <img className={styles.mainimg} src={SMS1} alt="Screenshot 1" />
                        <img className={styles.mainimg} src={SMS2} alt="Screenshot 2" />
                        <img className={styles.mainimg} src={SMS3} alt="Screenshot 3" />
                    </div>
                    <div className={styles['altleft-section']}>
                        <div className={styles['altcol-l']}>
                            <img src={SMSlogo} alt="Logo" className={styles.logo} />
                            <h1>Recover Deleted Message, Calls</h1>
                        </div>
                        <div className={styles['altcol-r']}>
                            <p>EZ Restore is one of the simplest and fastest ways to backup and restore SMS and Call logs</p>
                            <a href="sms-backup"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                    </div>
                    <div className={styles['altright-section']}>
                        <img className={styles.altimg} src={SMS1} alt="Screenshot 1" />
                    </div>
                </div>
            </Slider>

        </div>
    )
}

export default Sample
