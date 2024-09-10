import React from 'react'
import styles from './footer.module.css';
import { LiaTelegram } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <>
      <footer className={styles['footer']}>
        <div className={styles['row']}>
          <div className={styles['col']}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1 className={styles['logo']}>Smarty App Solution</h1>
            </Link>
            <p className={styles['para']}>Professional Quality Mobile Applications at no cost</p>
            <a className={styles['email']} href="mailto:freeappsstoodio@gmail.com"> <LiaTelegram className={styles['mailicon']} />freeappsstoodio@gmail.com</a>
          </div>
          <div className={styles['col']}>
            <h3>Quick Links<div className={styles['underline']}><span></span></div></h3>
            <ul className={styles['ul']}>
              <li className={styles['li']}><a href="/">Home</a></li>
              <li className={styles['li']}><a href="/apps/file-manager">File Manger</a></li>
              <li className={styles['li']}><a href="/apps/sms-backup">SMS Backup & Restore</a></li>
              <li className={styles['li']}><a href="/apps/remote">Remote</a></li>
              <li className={styles['li']}><a href="/apps/qr-reader">QR-Reader</a></li>
            </ul>
          </div>
          <div className={styles['col']}>
            <h3>Legal<div className={styles['underline']}><span></span></div></h3>
            <ul className={styles['ul']}>
              <li className={styles['li']}><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>

          </div>
          <div className={styles['col']}>
            <h3>Follow us<div className={styles['underline']}><span></span></div></h3>
            <div className={styles['social-media']}>
              <a href="https://www.facebook.com/SmartyAppSol?mibextid=ZbWKwL" target='_blank' rel='noopener noreferrer'>
                <FaFacebook className={styles['icon']} />
              </a>
              <a href="https://x.com/SmartyAppSol?t=4NSMArbWKskM_mcsWdDVyg&s=09" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className={styles['icon']} />
              </a>
              <a href="https://youtube.com/@smartyappsolutions?si=1HqEesD0k1sTbveK" target="_blank" rel="noopener noreferrer">
                <FaYoutube className={styles['icon']} />
              </a>
              <a href="https://www.instagram.com/smartyappsolutions?igsh=MXBmaW1kaGRzZGk0OA==" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className={styles['icon']} />
              </a>
            </div>
          </div>
        </div>
        <hr className={styles['line']} />
        <div className={styles['hrrow']}>
          <div className={styles['hrcol']}>
            <p className={styles['copyright']}>Copyright © 2021  Smartly Apps Solution | All Right Reserved</p>
          </div>
          <div className={styles['hrcol']}>
            <a href="https://www.linkedin.com/in/affan-athar-284a2721b/" style={{textDecoration:'none'}} target='_blank' rel='noopener noreferrer'>
            <p className={styles['poweredby']}>Developed By Affan</p>
            </a>
          </div>
        </div>
      </footer>
  

    </>
  )
}

export default footer
