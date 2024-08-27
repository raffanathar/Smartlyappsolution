import React from 'react';
import style from './Remote.module.css';
import frontimg from '../Free/Remote/1.webp';
import play from '../Free/play.svg';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import logo from '../Free/Remote/logo.webp';
import img2 from '../Free/Remote/2.webp';
import img3 from '../Free/Remote/3.webp';
import img4 from '../Free/Remote/4.webp';
import img5 from '../Free/Remote/5.webp';
import img6 from '../Free/Remote/6.webp';
import F1 from '../Free/Remote/Features/1.png';
import F2 from '../Free/Remote/Features/2.jpg';
import F3 from '../Free/Remote/Features/3.png';
import F4 from '../Free/Remote/Features/4.png';
const Application = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style['col-r']}>
                    <h2 className={style.heading}>
                        Remote Control for TV - AC
                    </h2>
                    <p className={style.headpara}>"Remote Control for TV - AC" is a user-friendly app that transforms your Android device into a universal remote for various TV models,
                        including smart and IR TVs. Using your phone's built-in Infrared (IR) blaster, the app lets you control TV functions like power, volume, channels, and menus
                        with a simple tap. Perfect for those who often misplace their remotes, ReMo makes TV management seamless and convenient right from your smartphone.</p>
                    <div className={style.side}>
                        <IoCloudDownloadOutline className={style.icon} /><h3 className={style.h3}>1+ Million Download</h3>
                        <MdRateReview className={style.icon} /><h3 className={style.h3}>Rating: <FaStar className={style.star} /><FaStar className={style.star} />
                            <FaStar className={style.star} /><FaStar className={style.star} /><FaStarHalf className={style.star} /></h3>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
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
                                <h3 className={style.col2h3}>Universal Compatibility</h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Control various TV models, including Smart and IR TVs, directly from your smartphone, with seamless compatibility for devices with an IR blaster.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F2} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Simple One-Tap Connection</h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Connect to your TV with a single tap and control all functions directly from your mobile device—no more searching for lost remotes.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F3} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Comprehensive Control</h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Easily manage volume, channels, power, and navigation with an intuitive interface. Open apps, search content, and navigate menus effortlessly.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col2}>
                        <div className={style.feature}>
                            <div className={style.img}>
                                <img src={F4} alt="Data Recovery Feature" />
                            </div>
                            <div className={style.col2h3}>
                                <h3 className={style.col2h3}>Custom Room Setup</h3>
                            </div>
                            <div className={style.para}>
                                <p className={style.para}>Organize your remotes by creating custom rooms for quick access. Control multiple TVs across different rooms effortlessly
                                    from a single device.</p>
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
                            Universal TV Remote Control
                        </h2>
                        <p className={style.para}>1. Easily control all your TVs with one app, including Smart TVs and IR-based TVs.
                            <br />
                            2. Access power, volume, channel, and input functions seamlessly.
                            <br />
                            3. Switch between different TVs in your home without the need for multiple remotes.
                            <br />
                            4. Navigate through menus, apps, and settings with just a few taps.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
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
                            Make Your Own Remote
                        </h2>
                        <p className={style.para}>1. Customize your remote control layout to suit your preferences.
                            <br />
                            2. Add buttons for your favorite channels, apps, and functions.
                            <br />
                            3. Personalize the look and feel of your remote with different themes and colors.
                            <br />
                            4. Save and switch between custom remotes for different rooms or devices.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
                            <img className={style.playstore} src={play} alt="Play Store" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.rightbackground}>
                <div className={style.rightcontainer}>
                    <div className={style['col-righttext']}>
                        <h2 className={style.heading}>
                            Touchpad TV Remote Control
                        </h2>
                        <p className={style.para}>1. Use your smartphone's screen as a touchpad to control your TV.
                            <br />
                            2. Enjoy smooth and responsive navigation, similar to using a laptop trackpad.
                            <br />
                            3. Easily swipe, scroll, and tap to access apps, settings, and menus.
                            <br />
                            4. Ideal for browsing content, playing games, or navigating streaming services.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
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
                            Universal AC Remote Control
                        </h2>
                        <p className={style.para}>1. Control your air conditioner with the same app you use for your TV.
                            <br />
                            2. Compatible with a wide range of AC brands and models.
                            <br />
                            3. Adjust temperature, fan speed, and mode settings with ease.
                            <br />
                            4. Create custom settings and schedules for optimal comfort.</p>
                        <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
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
                <a href="https://play.google.com/store/apps/details?id=com.fas.universal.remote.control" target="_blank" rel="noopener noreferrer">
                    <img className={style.playstore} src={play} alt="Play Store" />
                </a>
            </div>
        </>
    );
}

export default Application;
