import React from 'react';
import style from './file.module.css';
import frontimg from '../Free/File Manger/1.png';
import play from '../Free/play.svg';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import logo from '../Free/File Manger/logo.webp';
import img2 from '../Free/File Manger/2.png';
import img3 from '../Free/File Manger/3.png';
import img4 from '../Free/File Manger/4.png';
import img5 from '../Free/File Manger/5.png';
import F1 from '../Free/File Manger/Features/1.jpg';
import F2 from '../Free/File Manger/Features/2.jpg';
import F3 from '../Free/File Manger/Features/3.jpg';
import F4 from '../Free/File Manger/Features/4.jpg';
const Application = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style['col-r']}>
                    <h2 className={style.heading}>
                        File Explorer: Manager & Clean
                    </h2>
                    <p className={style.headpara}>"File Explorer: Manager & Clean" is a fast and easy-to-use file organizer for Android devices. This app allows you to
                        manage files and folders with ease, featuring tools to sort, search, rename, move, and delete files. It also acts as a storage cleaner, identifying
                        and removing duplicate or unnecessary files, even if the names differ. The app categorizes files by type, date, or size, and offers a convenient way
                        to locate and manage APKs. Simplify file management and free up space on your phone with this efficient file explorer.</p>
                    <div className={style.side}>
                        <IoCloudDownloadOutline className={style.icon} /><h3 className={style.h3}>5+ Million Download</h3>
                        <MdRateReview className={style.icon} /><h3 className={style.h3}>Rating: <FaStar className={style.star} /><FaStar className={style.star} />
                            <FaStar className={style.star} /><FaStar className={style.star} /><FaStarHalf className={style.star} /></h3>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                        <img className={style.mainplaystore} src={play} alt="Play Store" />
                    </a>
                </div>
                <div className={style['col-l']}>
                    <img className={style.mainimg} src={frontimg} alt="File Explorer" />
                    <img className={style.alternateimg} src={logo} alt="Icon" />
                    <h2 className={style.altheading}>
                        File Explorer: Manager & Clean
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
                                <h3 className={style.col2h3}>Easy File Management
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>
                                    Effortlessly manage and organize files with just a few taps—access, move, delete, and rename files across your device with ease.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F2} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Storage Cleaner
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>
                                    Efficiently clean up your storage by removing unnecessary files, duplicates, and clutter to free up valuable space on your device.
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
                                <h3 className={style.col2h3}>Category-Based Organization
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>
                                    Automatically organize files by type, name, date, or size for easy access to photos, videos, documents, and many more files.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F4} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Secure Folder
                                </h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>
                                    Protect and manage your sensitive files with a secure folder that offers encryption and restricted access to ensure your data remains private and safe.</p>
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
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={style.slider}>
                <h1>Slider</h1>
            </div>
            <div className={style.downloadnow}>
                <h2>Download Now</h2>
                <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                    <img className={style.playstore} src={play} alt="Play Store" />
                </a>
            </div>
        </>
    );
}

export default Application;
