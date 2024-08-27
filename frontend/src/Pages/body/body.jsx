import React from 'react'
import styles from './body.module.css'
import FM from '../Free/File Manger/1.png';
import SMS from '../Free/SMS backup/1.webp';
import RM from '../Free/Remote/1.webp';
import QR from '../Free/QR Code/1.webp'
import play from '../Free/play.svg';
import CustomSlider from '../Slider/Slider'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

import logo from '../Free/logo bg 2.png';
function body() {
  const scrollToSlider = (e) => {
    e.preventDefault();
    const element = document.getElementById('slider');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Element not found');
    }
  };
  return (
    <>
      <div className={styles.main} >
        <img className={styles.logo} src={logo} alt="Logo" />
        <h1 className={styles.h1}>Smarty Apps Solution</h1>
        <h6 className={styles.h6}>Professional Quality Apps At No Cost</h6>
        <h6 className={styles.h6}>A nice Collection of some daily use application to make your life a lot easier!</h6>
        <p className={styles.p1}>
          At SmartyAppsSolution, we're dedicated to developing high-quality apps that make your everyday tasks easier and more efficient. Our diverse range of applications
          is designed to cater to the practical needs of modern life. Whether you're looking to manage and organize your files with ease, back up and restore your important
          SMS messages, control your TV seamlessly with your smartphone, or quickly scan and generate QR codes, we have an app for you.</p>
        <br />
        <p className={styles.p2}>
          Our commitment to user experience drives us to create intuitive, reliable, and secure apps that you can trust. We understand the importance of convenience in
          today's fast-paced world, which is why our apps are designed to be straightforward and accessible to everyone. At SmartyAppsSolution, our goal is to empower users
          with tools that enhance their digital lives, offering simplicity and functionality in every app we create.
        </p>
        <a href="slider" className={styles.button} onClick={scrollToSlider}>Explore Apps</a>

      </div>
      <div id="slider">
      <CustomSlider id="slider" />
      </div>
      <div className={styles.midtext}>
        <h2>Apps</h2>
      </div>
      <div className={styles.rightbackground}>
        <div className={styles.rightcontainer}>
          <div className={styles['col-righttext']}>
            <a href="apps/file-manager" style={{textDecoration:'none'}}>
            <h2 className={styles.heading}>
              File Explorer: Manager & Clean
            </h2>
            </a>
            <p className={styles.para}>"File Explorer: Manager & Clean" is a fast and easy-to-use file organizer for Android devices. This app allows you to manage files and 
              folders with ease, featuring tools to sort, search, rename, move, and delete files. It also acts as a storage cleaner, identifying and removing duplicate or 
              unnecessary files, even if the names differ. The app categorizes files by type, date, or size, and offers a convenient way to locate and manage APKs. Simplify 
              file management and free up space on your phone with this efficient file explorer.</p>

            <a href="https://play.google.com/store/apps/details?id=com.fas.file.manager.explorer" target="_blank" rel="noopener noreferrer">

              <img className={styles.playstore} src={play} alt="Play Store" />
            </a>
          </div>
          <div className={styles['col-img']}>
            <a href="apps/file-manager">
            <img src={FM} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.leftbackground}>
        <div className={styles.leftcontainer}>
          <div className={styles['col-img']}>
            <a href="apps/sms-backup">
            <img src={SMS} alt="" />
            </a>
          </div>
          <div className={styles['col-lefttext']}>
            <a href="apps/sms-backup" style={{textDecoration:'none'}}>
            <h2 className={styles.heading}>
              Recover Deleted Message, Calls
            </h2>
            </a>
            <p className={styles.para}>"EZ Restore: Recover Deleted Messages & Call Log" is a fast and easy-to-use app that helps you back up and restore SMS and call logs
               effortlessly. With just a click, you can create backup files, restore messages, and even upload your data to Google Drive. Perfect for those switching phones
                or wanting peace of mind, this app ensures your important messages and call logs are safely stored and easily recoverable. Enjoy a hassle-free experience with
                 intuitive features designed to make backup and recovery simple.</p>
            <a href="https://play.google.com/store/apps/details?id=com.fas.ez.recover.deleted.messages" target="_blank" rel="noopener noreferrer">
              <img className={styles.playstore} src={play} alt="Play Store" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightbackground}>
        <div className={styles.rightcontainer}>
          <div className={styles['col-righttext']}>
            <a href="apps/remote" style={{textDecoration:'none'}}>
            <h2 className={styles.heading}>
              Remote Control for TV - AC
            </h2>
            </a>
            <p className={styles.para}>"Remote Control for TV - AC" is a user-friendly app that transforms your Android device into a universal remote for various TV models,
               including smart and IR TVs. Using your phone's built-in Infrared (IR) blaster, the app lets you control TV functions like power, volume, channels, and menus 
               with a simple tap. Perfect for those who often misplace their remotes, ReMo makes TV management seamless and convenient right from your smartphone.</p>
            <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
              <img className={styles.playstore} src={play} alt="Play Store" />
            </a>
          </div>
          <div className={styles['col-img']}>
            <a href="apps/remote">
            <img src={RM} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.leftbackground}>
        <div className={styles.leftcontainer}>
          <div className={styles['col-img']}>
            <a href="/apps/qr-reader">
            <img src={QR} alt="" />
            </a>
          </div>
          <div className={styles['col-lefttext']}>
            <a href="apps/qr-reader" style={{textDecoration:'none'}}>
            <h2 className={styles.heading}>
              QR, Barcode Scanner & Reader
            </h2>
            </a>
            <p className={styles.para}>"QR, Barcode Scanner & Reader" is an intuitive app that allows you to effortlessly scan and generate QR codes and barcodes. Customize 
              your QR codes with colors, patterns, and logos for promotional use. The app provides quick access to information, payments, and connectivity by scanning codes 
              for products, Wi-Fi, contacts, and more. Additionally, it ensures security by protecting against malicious links. Perfect for both personal and business use, 
              this app makes QR code creation and scanning easy, secure, and customizable.</p>
            <a href="https://play.google.com/store/apps/details?id=qrcode.generator.qr.wifi.password.barcode.generator" target="_blank" rel="noopener noreferrer">
              <img className={styles.playstore} src={play} alt="Play Store" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.midtext}>
        <h3 className={styles.assistanceHeading}>Need Some Assistance</h3>
        <div className={styles.buttonContainer}>
          <a href="mailto:freeappsstudio@gmail.com">
            <button className={styles.contactButton}>Contact Us</button>
          </a>
        </div>
        <h3 className={styles.assistanceHeading}>Get in Touch with Us</h3>
        <div className={styles.socialContainer}>
          <a href="https://www.facebook.com/SmartyAppSol?mibextid=ZbWKwL" target='_blank' rel='noopener noreferrer'>
            <FaFacebookSquare className={styles.fb} />
          </a>
          <a href="https://www.instagram.com/smartyappsolutions?igsh=MXBmaW1kaGRzZGk0OA==" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className={styles.in} />
          </a>
          <a href="https://x.com/SmartyAppSol?t=4NSMArbWKskM_mcsWdDVyg&s=09" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className={styles.x} />
          </a>
          <a href="https://youtube.com/@smartyappsolutions?si=1HqEesD0k1sTbveK" target="_blank" rel="noopener noreferrer">
            <FaYoutubeSquare className={styles.y} />
          </a>
        </div>
        <h3 className={styles.assistanceHeading}>Check Us Out</h3>
        <div className={styles.buttonContainer}>
          <a href="https://play.google.com/store/apps/dev?id=9016490473864804847" target="_blank" rel="noopener noreferrer"><button className={styles.contactButton}>
            <FaGooglePlay className={styles.googleIcon} />
            Google Play
          </button>
          </a>
        </div>
      </div>

    </>
  )
}

export default body
