import React from 'react'
import styles from './Slider.module.css'
import Slider from 'react-slick';
import BG from '../Free/BG.png'
import FMlogo from '../Free/File Manger/logo.webp'
import QRlogo from '../Free/QR Code/logo.webp'
import SMSlogo from '../Free/SMS backup/logo.webp'
import RMlogo from '../Free/Remote/logo.webp'
import FM1 from '../Free/File Manger/1.webp'
import FM2 from '../Free/File Manger/2.webp'
import FM3 from '../Free/File Manger/3.webp'
import QR1 from '../Free/QR Code/1.webp'
import QR2 from '../Free/QR Code/2.webp'
import QR3 from '../Free/QR Code/3.webp'
import SMS1 from '../Free/SMS backup/1.webp'
import SMS2 from '../Free/SMS backup/2.webp'
import SMS3 from '../Free/SMS backup/3.webp'
import RM1 from '../Free/Remote/1.webp'
import RM2 from '../Free/Remote/2.webp'
import RM3 from '../Free/Remote/3.webp'
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
            <div className={styles.main}>
                <Slider {...settings}>
                    {/* File Manager */}
                    <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                        <div className={styles['left-section']}>
                            <a href="/apps/file-manager">
                                <img src={FMlogo} alt="Logo" className={styles.logo} />
                            </a>
                            <a href="/apps/file-manager" style={{ textDecoration: 'none' }}>
                                <h1>File Explorer: Manager & Clean</h1>
                            </a>
                            <p>File Manager to organize data. Move, delete, rename files & EZ file cleaner</p>

                            <a href="/apps/file-manager"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                        <div className={styles['right-section']}>
                            <a href="/apps/file-manager">
                                <img className={styles.mainimg} src={FM1} alt="Screenshot 1" />
                            </a>
                            <a href="/apps/file-manager">
                                <img className={styles.mainimg} src={FM2} alt="Screenshot 2" />
                            </a>
                            <a href="/apps/file-manager">
                                <img className={styles.mainimg} src={FM3} alt="Screenshot 3" />
                            </a>

                        </div>
                        <div className={styles['altleft-section']}>
                            <div className={styles['altcol-l']}>
                                <img src={FMlogo} alt="Logo" className={styles.logo} />
                                <a href="/apps/file-manager" style={{ textDecoration: 'none' }}>
                                    <h1>File Explorer: Manager & Clean</h1>
                                </a>
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
                            <a href="/apps/file-manager">
                                <img className={styles.altimg} src={FM1} alt="Screenshot 1" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                        <div className={styles['left-section']}>
                            <a href="apps/qr-reader">
                                <img src={QRlogo} alt="Logo" className={styles.logo} />
                            </a>
                            <a href="apps/qr-reader" style={{ textDecoration: 'none' }}>
                                <h1>QR, Barcode Scanner & Reader</h1>
                            </a>
                            <p>Scan and generate QR code and barcode effortlessly with additional custom design features through QR, Barcode Scanner & Reader.</p>

                            <a href="apps/qr-reader"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                        <div className={styles['right-section']}>
                            <a href="apps/qr-reader">
                                <img className={styles.mainimg} src={QR1} alt="Screenshot 1" />
                            </a>
                            <a href="apps/qr-reader">
                                <img className={styles.mainimg} src={QR2} alt="Screenshot 2" />
                            </a>
                            <a href="apps/qr-reader">
                                <img className={styles.mainimg} src={QR3} alt="Screenshot 3" />
                            </a>
                        </div>
                        <div className={styles['altleft-section']}>
                            <div className={styles['altcol-l']}>
                                <a href="apps/qr-reader">
                                    <img src={QRlogo} alt="Logo" className={styles.logo} />
                                </a>
                                <a href="apps/qr-reader" style={{ textDecoration: 'none' }}>
                                    <h1>QR, Barcode Scanner & Reader</h1>
                                </a>
                            </div>
                            <div className={styles['altcol-r']}>
                                <p>Scan and generate QR code and barcode effortlessly with additional custom design features through QR, Barcode Scanner & Reader.</p>
                                <a href="apps/qr-reader"><button className={styles.read}>READ MORE</button></a>
                                <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.playstore} src={play} alt="Play Store" />
                                </a>
                            </div>
                        </div>
                        <div className={styles['altright-section']}>
                            <a href="apps/qr-reader">
                            <img className={styles.altimg} src={QR1} alt="Screenshot 1" />
                            </a>
                        </div>
                    </div>
                    {/* Remote */}
                    <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                        <div className={styles['left-section']}>
                            <a href="apps/remote">
                                <img src={RMlogo} alt="Logo" className={styles.logo} />
                            </a>
                            <a href="apps/remote" style={{ textDecoration: 'none' }}>
                                <h1>Remote Control for TV - AC</h1>
                            </a>
                            <p>Universal TV Remote : ReMo is an IR-based app that effortlessly links with various TVs including smart TVs through a single tap.</p>

                            <a href="apps/remote"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                        <div className={styles['right-section']}>
                            <a href="apps/remote">
                                <img className={styles.mainimg} src={RM1} alt="Screenshot 1" />
                            </a>
                            <a href="apps/remote">
                                <img className={styles.mainimg} src={RM2} alt="Screenshot 2" />
                            </a>
                            <a href="apps/remote">
                                <img className={styles.mainimg} src={RM3} alt="Screenshot 3" />
                            </a>
                        </div>
                        <div className={styles['altleft-section']}>
                            <div className={styles['altcol-l']}>
                                <a href="apps/remote">
                                <img src={RMlogo} alt="Logo" className={styles.logo} />
                                </a>
                                <a href="apps/remote" style={{ textDecoration: 'none' }}>
                                    <h1>Remote Control for TV - AC</h1>
                                </a>
                            </div>
                            <div className={styles['altcol-r']}>
                                <p>Universal TV Remote : ReMo is an IR-based app that effortlessly links with various TVs including smart TVs through a single tap.</p>
                                <a href="apps/remote"><button className={styles.read}>READ MORE</button></a>
                                <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.playstore} src={play} alt="Play Store" />
                                </a>
                            </div>
                        </div>
                        <div className={styles['altright-section']}>
                            <a href="apps/remote">
                            <img className={styles.altimg} src={RM1} alt="Screenshot 1" />
                            </a>
                        </div>
                    </div>
                    {/* SMS backup  */}
                    <div className={styles.slide} style={{ width: '100%', display: 'flex' }} >
                        <div className={styles['left-section']}>
                            <a href="apps/sms-backup">
                            <img src={SMSlogo} alt="Logo" className={styles.logo} />
                            </a>
                            <a href="apps/sms-backup" style={{ textDecoration: 'none' }}>
                                <h1>Recover Deleted Message, Calls</h1>
                            </a>
                            <p>EZ Restore is one of the simplest and fastest ways to backup and restore SMS and Call logs</p>

                            <a href="apps/sms-backup"><button className={styles.read}>READ MORE</button></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                                <img className={styles.playstore} src={play} alt="Play Store" />
                            </a>
                        </div>
                        <div className={styles['right-section']}>
                            <a href="apps/sms-backup">
                            <img className={styles.mainimg} src={SMS1} alt="Screenshot 1" />
                            </a>
                            <a href="apps/sms-backup">
                            <img className={styles.mainimg} src={SMS2} alt="Screenshot 2" />
                            </a>
                            <a href="apps/sms-backup">
                            <img className={styles.mainimg} src={SMS3} alt="Screenshot 3" />
                            </a>
                        </div>
                        <div className={styles['altleft-section']}>
                            <div className={styles['altcol-l']}>
                                <a href="apps/sms-backup">
                                <img src={SMSlogo} alt="Logo" className={styles.logo} />
                                </a>
                                <a href="apps/sms-backup" style={{ textDecoration: 'none' }}>
                                    <h1>Recover Deleted Message, Calls</h1>
                                </a>
                            </div>
                            <div className={styles['altcol-r']}>
                                <p>EZ Restore is one of the simplest and fastest ways to backup and restore SMS and Call logs</p>
                                <a href="apps/sms-backup"><button className={styles.read}>READ MORE</button></a>
                                <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                                    <img className={styles.playstore} src={play} alt="Play Store" />
                                </a>
                            </div>
                        </div>
                        <div className={styles['altright-section']}>
                            <a href="apps/sms-backup">
                            <img className={styles.altimg} src={SMS1} alt="Screenshot 1" />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Sample
