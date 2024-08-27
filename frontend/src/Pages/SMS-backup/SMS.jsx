import React from 'react';
import style from './SMS.module.css';
import frontimg from '../Free/SMS backup/1.webp';
import play from '../Free/play.svg';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import img1 from '../Free/features/cleanup.webp';
import logo from '../Free/SMS backup/logo.webp';
import img2 from '../Free/SMS backup/2.webp';
import img3 from '../Free/SMS backup/3.webp';
import img4 from '../Free/SMS backup/4.webp';
import img5 from '../Free/SMS backup/5.webp';
import img6 from '../Free/SMS backup/6.webp';
import F1 from '../Free/SMS backup/Features/1.png';
import F2 from '../Free/SMS backup/Features/2.png';
import F3 from '../Free/SMS backup/Features/3.png';
import F4 from '../Free/SMS backup/Features/4.png';
const Application = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style['col-r']}>
                    <h2 className={style.heading}>
                        Recover Deleted Message, Calls
                    </h2>
                    <p className={style.headpara}>"EZ Restore: Recover Deleted Messages & Call Log" is a fast and easy-to-use app that helps you back up and restore SMS and call logs
                        effortlessly. With just a click, you can create backup files, restore messages, and even upload your data to Google Drive. Perfect for those switching phones
                        or wanting peace of mind, this app ensures your important messages and call logs are safely stored and easily recoverable. Enjoy a hassle-free experience with
                        intuitive features designed to make backup and recovery simple.</p>
                    <div className={style.side}>
                        <IoCloudDownloadOutline className={style.icon} /><h3 className={style.h3}>1+ Million Download</h3>
                        <MdRateReview className={style.icon} /><h3 className={style.h3}>Rating: <FaStar className={style.star} /><FaStar className={style.star} />
                            <FaStar className={style.star} /><FaStar className={style.star} /><FaStarHalf className={style.star} /></h3>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                        <img className={style.mainplaystore} src={play} alt="Play Store" />
                    </a>
                </div>
                <div className={style['col-l']}>
                    <img className={style.mainimg} src={frontimg} alt="File Explorer" />
                    <img className={style.alternateimg} src={logo} alt="Icon" />
                    <h2 className={style.altheading}>
                        Recover Deleted Message, Calls
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
                            <h3 className={style.col2h3}>Instant SMS Backup</h3>
                            </div>
                            <div className={style.para}>
                            <p className={style.para}>Securely back up your SMS messages with a single tap. Never worry about losing important texts again,
                                with fast and reliable backup options.</p>
                                </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F2} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                            <h3 className={style.col2h3}>Easy Restore Functionality</h3>
                            </div>
                            <div className={style.para}>
                            <p className={style.para}>Restore your SMS messages effortlessly from a backup file. Simply select the desired backup, and your messages
                                are instantly recovered.</p>
                                </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F3} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Google Drive Integration</h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Upload your backup files directly to Google Drive for added security and accessibility. Access your backed-up messages
                                    from anywhere, anytime.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F4} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>
                                Transfer SMS & Call Logs</h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>
                                Easily share or transfer your SMS backups to another device, keeping control over your message data with simple sharing options.</p>
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
                            Save Your Backup on Cloud
                        </h2>
                        <p className={style.para}>1.Easily sync and upload your backups to Google Drive.
                            <br />
                            2.Access your backups anytime from any device with internet access.
                            <br />
                            3.Ensure your data is safe even if you lose or change your device.
                            <br />
                            4.Enjoy seamless cloud integration without complex setups.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
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
                            Manual Backup
                        </h2>
                        <p className={style.para}>1. Initiate backups with a single tap whenever you need.
                            <br />
                            2. Choose specific messages or call logs to back up on-demand.
                            <br />
                            3. Store your manual backups in a secure location of your choice.
                            <br />
                            4. Quickly export manual backups via email or file-sharing apps.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.rightbackground}>
                <div className={style.rightcontainer}>
                    <div className={style['col-righttext']}>
                        <h2 className={style.heading}>
                            Schedule Backup                        </h2>
                        <p className={style.para}>1. Set automatic backups to run daily, weekly, or monthly.
                            <br />
                            2. Customize the timing to suit your schedule and needs.
                            <br />
                            3. Receive notifications to confirm that your scheduled backups are complete.
                            <br />
                            4. Never worry about losing data with consistent, automatic backups.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
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
                            Backup History
                        </h2>
                        <p className={style.para}>1. View a detailed log of all past backups, including dates and times.
                            <br />
                            2. Restore from any previous backup directly from the history tab.
                            <br />
                            3. Keep track of your backup frequency and manage old files easily.
                            <br />
                            4. Export your backup history for record-keeping or transfer to other devices.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
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
                <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
                    <img className={style.playstore} src={play} alt="Play Store" />
                </a>
            </div>
        </>
    );
}

export default Application;
