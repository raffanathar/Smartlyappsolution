import React from 'react';
import style from './file.module.css';
import Slider from 'react-slick';
import frontimg from '../Free/File Manger/1.webp';
import play from '../Free/play.svg';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import logo from '../Free/File Manger/logo.webp';
import img2 from '../Free/File Manger/2.webp';
import img3 from '../Free/File Manger/3.webp';
import img4 from '../Free/File Manger/4.webp';
import img5 from '../Free/File Manger/5.webp';
import F1 from '../Free/File Manger/Features/1.jpg';
import F2 from '../Free/File Manger/Features/2.jpg';
import F3 from '../Free/File Manger/Features/3.jpg';
import F4 from '../Free/File Manger/Features/4.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Application = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,          // Enable auto-sliding
        autoplaySpeed: 3000,
    };
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
                            Recover Data
                        </h2>
                        <p className={style.para}>1. Restore deleted photos, videos, audio files, and documents effortlessly.
                            <br />
                            2. Recover media files and important documents from your device storage.
                            <br />
                            3. Quickly retrieve lost or deleted files without any complex procedures.
                            <br />
                            4. Access restored files in one central location for easy management.</p>
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
                            Duplicate File Cleaner
                        </h2>
                        <p className={style.para}>1. Identify and remove duplicate files to free up storage space.
                            <br />
                            2. Automatically detect files with the same content, even if they have different names.
                            <br />
                            3. Easily preview duplicates before deleting them to avoid errors.
                            <br />
                            4. Reclaim storage by eliminating redundant files in just a few taps.</p>
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
                            Storage Analyzer
                        </h2>
                        <p className={style.para}>1. Monitor your device’s storage usage and free up space with optimization tools.
                            <br />
                            2. Get real-time insights into which apps and files are consuming the most storage.
                            <br />
                            3. Set alerts for low storage to ensure your device always has enough space.
                            <br />
                            4. Optimize storage by archiving or deleting old and unnecessary files.</p>
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
                            Clean Up
                        </h2>
                        <p className={style.para}>1. Easily remove junk files and temporary data to enhance device performance.
                            <br />
                            2. Clear cache and residual files from apps to free up memory.
                            <br />
                            3. Automatically clean up unused files to keep your device running smoothly.
                            <br />
                            4. Schedule regular cleanups to maintain optimal storage and performance.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Application;
