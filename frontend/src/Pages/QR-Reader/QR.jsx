import React from 'react';
import style from './QR.module.css';
import frontimg from '../Free/QR Code/1.webp';
import play from '../Free/play.svg';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import logo from '../Free/QR Code/logo.webp';
import img2 from '../Free/QR Code/2.webp';
import img3 from '../Free/QR Code/3.webp';
import img4 from '../Free/QR Code/4.webp';
import img5 from '../Free/QR Code/5.webp';
import F1 from '../Free/QR Code/Features/1.jpg';
import F2 from '../Free/QR Code/Features/2.png';
import F3 from '../Free/QR Code/Features/3.png';
import F4 from '../Free/QR Code/Features/4.jpg';
const Application = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style['col-r']}>
                    <h2 className={style.heading}>
                        QR, Barcode Scanner & Reader
                    </h2>
                    <p className={style.headpara}>"QR, Barcode Scanner & Reader" is an intuitive app that allows you to effortlessly scan and generate QR codes and barcodes. Customize
                        your QR codes with colors, patterns, and logos for promotional use. The app provides quick access to information, payments, and connectivity by scanning codes
                        for products, Wi-Fi, contacts, and more. Additionally, it ensures security by protecting against malicious links. Perfect for both personal and business use,
                        this app makes QR code creation and scanning easy, secure, and customizable.</p>
                    <div className={style.side}>
                        <IoCloudDownloadOutline className={style.icon} /><h3 className={style.h3}>50+ Thousand Download</h3>
                        <MdRateReview className={style.icon} /><h3 className={style.h3}>Rating: <FaStar className={style.star} /><FaStar className={style.star} />
                            <FaStar className={style.star} /><FaStar className={style.star} /><FaStarHalf className={style.star} /></h3>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                        <img className={style.mainplaystore} src={play} alt="Play Store" />
                    </a>
                </div>
                <div className={style['col-l']}>
                    <img className={style.mainimg} src={frontimg} alt="File Explorer" />
                    <img className={style.alternateimg} src={logo} alt="Icon" />
                    <h2 className={style.altheading}>
                    QR, Barcode Scanner & Reader
                    </h2>
                </div>
            </div>

            <div className={style.background}>
                <div className={style.midtext}>
                    <h2>Features</h2>
                </div>
                <div className={style.container2}>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F1} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Quick QR & Barcode Scanning
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Scan QR codes and barcodes for products, websites, and contacts with a user-friendly interface.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F2} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Custom QR Code Generation
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Create custom QR codes with colors, patterns, and logos, tailored for business or personal use.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F3} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Multi-Format Support
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Generate QR codes for contacts, locations, Wi-Fi, and promotions, and create barcodes for product info.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F4} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Effortless QR Code Sharing
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Easily share your generated QR codes through email, social media, or messaging apps with a single tap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.midtext}>
                <h2>Functions</h2>
            </div>
            <div className={style.rightbackground}>
                <div className={style.rightcontainer}>
                    <div className={style['col-righttext']}>
                        <h2 className={style.heading}>
                            Add Image or Logo to QR Code
                        </h2>
                        <p className={style.para}>1. Customize your QR codes by adding your brand’s logo or any image.
                            <br />
                            2. Enhance the visual appeal of your QR codes with personalized designs.
                            <br />
                            3. Ensure your QR codes are still scannable with a built-in verification feature.
                            <br />
                            4. Create unique and branded QR codes that stand out from the standard black-and-white designs.</p>
                        <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={style['col-img']}>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.leftbackground}>
                <div className={style.leftcontainer}>
                    <div className={style['col-img']}>
                        <img src={img3} alt="" />
                    </div>
                    <div className={style['col-lefttext']}>
                        <h2 className={style.heading}>
                            Generate QR Code and Barcode
                        </h2>
                        <p className={style.para}>1. Easily create barcodes and QR codes for products, websites, contact information, and more.
                            <br />
                            2. Choose from various barcode formats and QR code styles to fit your needs.
                            <br />
                            3. Generate codes in seconds and share them via email, social media, or print.
                            <br />
                            4. Store and manage all your generated codes within the app for easy access.</p>
                        <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.rightbackground}>
                <div className={style.rightcontainer}>
                    <div className={style['col-righttext']}>
                        <h2 className={style.heading}>
                            Scan WiFi QR and Connect Instantly
                        </h2>
                        <p className={style.para}>1. Scan WiFi QR codes to automatically connect to networks without typing passwords.
                            <br />
                            2. Quickly access public or private WiFi networks with a simple scan.
                            <br />
                            3. Save scanned WiFi networks for future connections.
                            <br />
                            4. Ideal for sharing your home or office WiFi securely with guests.</p>
                        <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={style['col-img']}>
                        <img src={img4} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.leftbackground}>
                <div className={style.leftcontainer}>
                    <div className={style['col-img']}>
                        <img src={img5} alt="" />
                    </div>
                    <div className={style['col-lefttext']}>
                        <h2 className={style.heading}>
                            Barcode Scanner
                        </h2>
                        <p className={style.para}>1. Effortlessly scan barcodes to get product information, prices, and reviews.
                            <br />
                            2. Compatible with a wide range of barcode types, including UPC, EAN, and more.
                            <br />
                            3. Quickly compare prices and details while shopping.
                            <br />
                            4. Access historical data of scanned barcodes for easy reference.</p>
                        <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Application;
