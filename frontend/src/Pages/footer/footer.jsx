import React from 'react'
import style from './footer.module.css';
import { LiaTelegram } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const footer = () => {
  return (
    <>
      <footer className={style['footer']}>
        <div className={style['row']}>
          <div className={style['col']}>
            <h1 className={style['logo']}>Smarty App Solution</h1>
            <p className={style['para']}>Professional Quality Mobile Applications at no cost</p>
            <a className={style['email']} href="mailto:FreeAppStoodio@gmail.com"> <LiaTelegram className={style['mailicon']} />FreeAppStoodio@gmail.com</a>
          </div>
          <div className={style['col']}>
            <h3>Quick Links<div className={style['underline']}><span></span></div></h3>
            <ul className={style['ul']}>
              <li className={style['li']}><a href="/">Home</a></li>
              <li className={style['li']}><a href="/apps/file-manager">File Manger</a></li>
              <li className={style['li']}><a href="/apps/sms-backup">SMS Backup & Restore</a></li>
              <li className={style['li']}><a href="/apps/remote">Remote</a></li>
              <li className={style['li']}><a href="/apps/qr-reader">QR-Reader</a></li>
            </ul>
          </div>
          <div className={style['col']}>
            <h3>Legal<div className={style['underline']}><span></span></div></h3>
            <ul className={style['ul']}>
              <li className={style['li']}><a href="">Privacy Policy</a></li>
            </ul>

          </div>
          <div className={style['col']}>
            <h3>Follow us<div className={style['underline']}><span></span></div></h3>
            <div className={style['social-media']}>
              <a href="https://www.facebook.com/SmartyAppSol?mibextid=ZbWKwL" target='_blank' rel='noopener noreferrer'>
                <FaFacebook className={style['icon']} />
              </a>
              <a href="https://x.com/SmartyAppSol?t=4NSMArbWKskM_mcsWdDVyg&s=09" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className={style['icon']} />
              </a>
              <a href="https://youtube.com/@smartyappsolutions?si=1HqEesD0k1sTbveK" target="_blank" rel="noopener noreferrer">
                <FaYoutube className={style['icon']} />
              </a>
              <a href="https://www.instagram.com/smartyappsolutions?igsh=MXBmaW1kaGRzZGk0OA==" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram className={style['icon']} />
              </a>
            </div>
          </div>
        </div>
        <hr className={style['line']} />
        <div className={style['hrrow']}>
          <div className={style['hrcol']}>
            <p className={style['copyright']}>Copyright © 2021  Smartly Apps Solution | All Right Reserved</p>
          </div>
          <div className={style['hrcol']}>
            <p className={style['poweredby']}>Powered By WordSitebuilder</p>
          </div>
        </div>
      </footer>


    </>
  )
}

export default footer
