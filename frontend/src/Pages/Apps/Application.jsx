import React from 'react';
import style from './Application.module.css';
import logo from '../Free/File Manger/1.png';
import play from '../Free/play.svg';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import img1 from '../Free/features/cleanup.webp';
import img2 from '../Free/File Manger/logo.png';
const Application = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style['col-r']}>
                    <h2 className={style.heading}>
                        File Explorer: Manager & Clean
                    </h2>
                    <p className={style.headpara}>"File Explorer: Manager & Clean" is a fast and easy-to-use file organizer for Android devices. This app allows you to manage files and folders with ease, featuring tools to sort, search, rename, move, and delete files. It also acts as a storage cleaner, identifying and removing duplicate or unnecessary files, even if the names differ. The app categorizes files by type, date, or size, and offers a convenient way to locate and manage APKs. Simplify file management and free up space on your phone with this efficient file explorer.</p>
                    <div className={style.side}>
                        <IoCloudDownloadOutline className={style.icon} /><h3 className={style.h3}>5+ Million Download</h3>
                        <MdRateReview className={style.icon} /><h3 className={style.h3}>Rating: <FaStar className={style.star} /><FaStar className={style.star} /><FaStar className={style.star} /><FaStar className={style.star} /><FaStarHalf className={style.star} /></h3>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                        <img className={style.mainplaystore} src={play} alt="Play Store" />
                    </a>
                </div>
                <div className={style['col-l']}>
                    <img  className={style.mainimg}src={logo} alt="File Explorer" />
                    <img  className={style.alternateimg}src={img2} alt="Icon" />
                    <h2 className={style.altheading}>
                        File Explorer: Manager & Clean
                    </h2>
                </div>
            </div>
            <div className={style.background}>
                <div className={style.container2}>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={img1} alt="Data Recovery Feature" />
                            </div>
                            <h3 className={style.col2h3}>Data Recovery</h3>
                            <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero iste? Iste, itaque eius impedit hic culpa sint quisquam tenetur nemo, corrupti ratione maiores libero, modi nobis ipsa dolore alias.</p>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={img1} alt="Data Recovery Feature" />
                            </div>
                            <h3 className={style.col2h3}>Data Recovery</h3>
                            <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero iste? Iste, itaque eius impedit hic culpa sint quisquam tenetur nemo, corrupti ratione maiores libero, modi nobis ipsa dolore alias.</p>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={img1} alt="Data Recovery Feature" />
                            </div>
                            <h3 className={style.col2h3}>Data Recovery</h3>
                            <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero iste? Iste, itaque eius impedit hic culpa sint quisquam tenetur nemo, corrupti ratione maiores libero, modi nobis ipsa dolore alias.</p>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={img1} alt="Data Recovery Feature" />
                            </div>
                            <h3 className={style.col2h3}>Data Recovery</h3>
                            <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, libero iste? Iste, itaque eius impedit hic culpa sint quisquam tenetur nemo, corrupti ratione maiores libero, modi nobis ipsa dolore alias.</p>
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
                            File Explorer: Manager & Clean
                        </h2>
                        <p className={style.para}>"File Explorer: Manager & Clean" is a fast and easy-to-use file organizer for Android devices. This app allows you to manage files and folders with ease, featuring tools to sort, search, rename, move, and delete files. It also acts as a storage cleaner, identifying and removing duplicate or unnecessary files, even if the names differ. The app categorizes files by type, date, or size, and offers a convenient way to locate and manage APKs. Simplify file management and free up space on your phone with this efficient file explorer.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                    <div className={style['col-img']}>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className={style.leftbackground}>
                <div className={style.leftcontainer}>
                    <div className={style['col-img']}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={style['col-lefttext']}>
                        <h2 className={style.heading}>
                            File Explorer: Manager & Clean
                        </h2>
                        <p className={style.para}>"File Explorer: Manager & Clean" is a fast and easy-to-use file organizer for Android devices. This app allows you to manage files and folders with ease, featuring tools to sort, search, rename, move, and delete files. It also acts as a storage cleaner, identifying and removing duplicate or unnecessary files, even if the names differ. The app categorizes files by type, date, or size, and offers a convenient way to locate and manage APKs. Simplify file management and free up space on your phone with this efficient file explorer.</p>
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
