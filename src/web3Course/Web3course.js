import React, { useState, useRef } from "react";
import './web3course.css'
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import sealCheck from '../images/SealCheck.svg'
import Sauransh from '../images/sauransh.jpeg'
import Chirag from '../images/chirag.png'
import Yashika from '../images/yashika.png'

const courses = [
    {
        id: 1,
        time: "3 Chapters / 23 Episodes",
        header: "Introduction to the Web3",
        text: <div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>The Story of Web1</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>The Story of Web2</h6>
                    <p style={{textAlign:"right"}}>Episodes: 9</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Difference between Web2 and Web3</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
            </div>
    },
    {
        id: 2,
        time: "16 Chapters / 98 Episodes",
        header: "Blockchain Technology",
        text: <div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Client-Server Model Explanation</h6>
                <p style={{textAlign:"right"}}>Episodes: 7</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>P2P Model Explanation</h6>
                <p style={{textAlign:"right"}}>Episodes: 5</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Case Study of Instagram</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Case Study of U-Torrent</h6>
                <p style={{textAlign:"right"}}>Episodes: 7</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Open Source Project</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>What is Ledger?</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>What is Immutability?</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>What is Cryptography?</h6>
                <p style={{textAlign:"right"}}>Episodes: 8</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>What is SHA-256?</h6>
                <p style={{textAlign:"right"}}>Episodes: 7</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>What is a Block?</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>What is Blockchain?</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Different Census Mechanisms in Blockchain</h6>
                <p style={{textAlign:"right"}}>Episodes: 5</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Public and Private Blockchain</h6>
                <p style={{textAlign:"right"}}>Episodes: 5</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Layer 1 and Layer 2 Blockchain</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Case Study of Ethereum</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>
            <div className="flexbox">
                <h6 style={{textAlign:"left"}}>Case Study of Polygon</h6>
                <p style={{textAlign:"right"}}>Episodes: 6</p>
            </div>  
        </div>
        },
        
    {
        id: 3,
        time: "12 Chapters / 69 Episodes",
        header: "Cryptocurrencies",
        text: <div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>How does the Banking System work?</h6>
            <p style={{textAlign:"right"}}>Episodes: 6</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>What are Cryptocurrencies?</h6>
            <p style={{textAlign:"right"}}>Episodes: 6</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>Case Study of Bitcoin</h6>
            <p style={{textAlign:"right"}}>Episodes: 6</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>Case Study of Solana</h6>
            <p style={{textAlign:"right"}}>Episodes: 7</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>Case Study of USDT</h6>
            <p style={{textAlign:"right"}}>Episodes: 6</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>Case Study of Dogecoin</h6>
            <p style={{textAlign:"right"}}>Episodes: 7</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>How to setup a Metamask Account?</h6>
            <p style={{textAlign:"right"}}>Episodes: 1</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>How to Buy Cryptocurrency?</h6>
            <p style={{textAlign:"right"}}>Episodes: 8</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>What is Private Key?</h6>
            <p style={{textAlign:"right"}}>Episodes: 6</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>What is Public Key?</h6>
            <p style={{textAlign:"right"}}>Episodes: 5</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>How to make transactions in Crypto?</h6>
            <p style={{textAlign:"right"}}>Episodes: 6</p>
        </div>
        <div className="flexbox">
            <h6 style={{textAlign:"left"}}>Blockchain Explorer</h6>
            <p style={{textAlign:"right"}}>Episodes: 5</p>
        </div>        
    </div>
    },
    {
        id: 4,
        time: "2 Chapters / 13 Episodes",
        header: "Smart Contract",
        text: <div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>What are Smart Contracts?</h6>
                    <p style={{textAlign:"right"}}>Episodes: 6</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Languages used in Smart Contract Development</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
            </div>
    },
    {
        id: 5,
        time: "8 Chapters / 51 Episodes",
        header: "DApps, DeFi, Web3 Gaming, etc.",
        text: <div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>What is DApp?</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>What is DeFi?</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Case Study of DeFi Protocol: UniSwap</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>What are NFTs?</h6>
                    <p style={{textAlign:"right"}}>Episodes: 6</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Case Study of an NFT Project: BAYC</h6>
                    <p style={{textAlign:"right"}}>Episodes: 8</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Web3 Gaming</h6>
                    <p style={{textAlign:"right"}}>Episodes: 6</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Web3 Social Media</h6>
                    <p style={{textAlign:"right"}}>Episodes: 7</p>
                </div>
                <div className="flexbox">
                    <h6 style={{textAlign:"left"}}>Supply Chain Management</h6>
                    <p style={{textAlign:"right"}}>Episodes: 3</p>
                </div>
            </div>
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, course } = props;
    const { header, id, text, time} = course;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle px-5 p-3 d-flex justify-content-between align-items-center px-5 w-100 web2course-courseContent-curri-row ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <span className="accordiontitle">
                        <i className="fa fa-chevron-down rc-accordion-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.0307 9.53063L12.5307 17.0306C12.4611 17.1004 12.3784 17.1557 12.2873 17.1934C12.1963 17.2312 12.0987 17.2506 12.0001 17.2506C11.9015 17.2506 11.8039 17.2312 11.7129 17.1934C11.6218 17.1557 11.5391 17.1004 11.4695 17.0306L3.96948 9.53063C3.86447 9.42573 3.79294 9.29204 3.76396 9.14648C3.73497 9.00092 3.74982 8.85002 3.80664 8.71291C3.86345 8.57579 3.95967 8.45861 4.08312 8.37621C4.20656 8.29381 4.35168 8.24988 4.5001 8.25H19.5001C19.6485 8.24988 19.7936 8.29381 19.9171 8.37621C20.0405 8.45861 20.1368 8.57579 20.1936 8.71291C20.2504 8.85002 20.2652 9.00092 20.2362 9.14648C20.2073 9.29204 20.1357 9.42573 20.0307 9.53063Z" fill="#AD00FF"></path></svg></i>
                        <span>{header}</span>
                    </span>
                    <span className="accordiontime"> {time} </span>

                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <p className='mb-0'>{text}</p>
                </div>
            </div>
        </div>
    )
}

const Web3course = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    return (
        <div style={{ paddingTop: "20px" }}>
            <Navbar />
            <section className="mt-2 contact-section mb-2 mx-1" >
                <div className="web2course-container m-auto">
                    <p className="web2course-course-enroll mt-5"><span className="web2course-course-subenroll">Web3 Course</span> <strong>// Course Enroll //</strong></p>
                    <div className="web2course-course">
                        <div className="web2course-courseContent">
                            <h1 className="web2course-courseContent-head">Web3 for GenZ: Master Course</h1>
                            <p className="web2course-courseContent-prag">Explore how Web3 revolutionizes digital interactions. Learn its core principles, tech, and applications. Step into the future of the internet!</p>
                            <button className="web2course-courseContent-launchbtn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                    <path d="M14.58 10.208L10.9263 8.86395C10.9079 8.85693 10.8911 8.84612 10.8771 8.83223C10.8631 8.81835 10.8522 8.80168 10.845 8.78331L9.50093 5.12891C9.43125 4.93999 9.30533 4.77697 9.14014 4.66183C8.97495 4.54669 8.77843 4.48496 8.57707 4.48496C8.37572 4.48496 8.1792 4.54669 8.01401 4.66183C7.84882 4.77697 7.7229 4.93999 7.65322 5.12891L6.30917 8.7826C6.30214 8.80104 6.29133 8.81779 6.27745 8.8318C6.26356 8.84581 6.24689 8.85677 6.22852 8.86395L2.57412 10.208C2.3852 10.2777 2.22219 10.4036 2.10705 10.5688C1.99191 10.734 1.93018 10.9305 1.93018 11.1319C1.93018 11.3332 1.99191 11.5297 2.10705 11.6949C2.22219 11.8601 2.3852 11.986 2.57412 12.0557L6.22782 13.3998C6.24625 13.4068 6.26301 13.4176 6.27702 13.4315C6.29103 13.4454 6.30198 13.462 6.30917 13.4804L7.65322 17.1348C7.7229 17.3237 7.84882 17.4867 8.01401 17.6019C8.1792 17.717 8.37572 17.7788 8.57707 17.7788C8.77843 17.7788 8.97495 17.717 9.14014 17.6019C9.30533 17.4867 9.43125 17.3237 9.50093 17.1348L10.845 13.4811C10.852 13.4627 10.8628 13.4459 10.8767 13.4319C10.8906 13.4179 10.9073 13.407 10.9256 13.3998L14.58 12.0557C14.7689 11.986 14.932 11.8601 15.0471 11.6949C15.1622 11.5297 15.224 11.3332 15.224 11.1319C15.224 10.9305 15.1622 10.734 15.0471 10.5688C14.932 10.4036 14.7689 10.2777 14.58 10.208ZM14.2865 11.2592L10.6321 12.6032C10.4983 12.6527 10.3769 12.7305 10.2761 12.8314C10.1754 12.9322 10.0977 13.0538 10.0485 13.1876L8.70441 16.8412C8.69476 16.8672 8.67739 16.8897 8.65462 16.9055C8.63186 16.9213 8.6048 16.9298 8.57707 16.9298C8.54935 16.9298 8.52229 16.9213 8.49952 16.9055C8.47676 16.8897 8.45939 16.8672 8.44974 16.8412L7.10569 13.1868C7.0561 13.0533 6.9783 12.9321 6.87758 12.8314C6.77687 12.7306 6.65561 12.6528 6.52209 12.6032L2.8684 11.2592C2.84241 11.2495 2.81999 11.2322 2.80416 11.2094C2.78833 11.1866 2.77984 11.1596 2.77984 11.1319C2.77984 11.1041 2.78833 11.0771 2.80416 11.0543C2.81999 11.0315 2.84241 11.0142 2.8684 11.0045L6.5228 9.66048C6.65653 9.61106 6.77796 9.53324 6.87871 9.43236C6.97947 9.33149 7.05715 9.20997 7.1064 9.07617L8.45045 5.42248C8.4601 5.39649 8.47747 5.37407 8.50023 5.35824C8.52299 5.34241 8.55006 5.33392 8.57778 5.33392C8.60551 5.33392 8.63257 5.34241 8.65533 5.35824C8.67809 5.37407 8.69546 5.39649 8.70511 5.42248L10.0492 9.07688C10.0986 9.21061 10.1764 9.33204 10.2773 9.43279C10.3782 9.53355 10.4997 9.61123 10.6335 9.66048L14.2872 11.0045C14.3132 11.0142 14.3356 11.0315 14.3514 11.0543C14.3672 11.0771 14.3757 11.1041 14.3757 11.1319C14.3757 11.1596 14.3672 11.1866 14.3514 11.2094C14.3356 11.2322 14.3132 11.2495 14.2872 11.2592H14.2865ZM10.9801 3.77496C10.9801 3.66239 11.0248 3.55443 11.1044 3.47483C11.184 3.39524 11.292 3.35052 11.4045 3.35052H12.6778V2.07721C12.6778 1.96464 12.7226 1.85668 12.8022 1.77709C12.8818 1.69749 12.9897 1.65277 13.1023 1.65277C13.2148 1.65277 13.3228 1.69749 13.4024 1.77709C13.482 1.85668 13.5267 1.96464 13.5267 2.07721V3.35052H14.8C14.9126 3.35052 15.0206 3.39524 15.1001 3.47483C15.1797 3.55443 15.2245 3.66239 15.2245 3.77496C15.2245 3.88752 15.1797 3.99548 15.1001 4.07508C15.0206 4.15468 14.9126 4.19939 14.8 4.19939H13.5267V5.4727C13.5267 5.58527 13.482 5.69323 13.4024 5.77282C13.3228 5.85242 13.2148 5.89714 13.1023 5.89714C12.9897 5.89714 12.8818 5.85242 12.8022 5.77282C12.7226 5.69323 12.6778 5.58527 12.6778 5.4727V4.19939H11.4045C11.292 4.19939 11.184 4.15468 11.1044 4.07508C11.0248 3.99548 10.9801 3.88752 10.9801 3.77496ZM18.054 7.17045C18.054 7.28302 18.0093 7.39097 17.9297 7.47057C17.8501 7.55017 17.7422 7.59489 17.6296 7.59489H16.9222V8.30228C16.9222 8.41485 16.8775 8.52281 16.7979 8.6024C16.7183 8.682 16.6103 8.72672 16.4978 8.72672C16.3852 8.72672 16.2772 8.682 16.1976 8.6024C16.1181 8.52281 16.0733 8.41485 16.0733 8.30228V7.59489H15.3659C15.2534 7.59489 15.1454 7.55017 15.0658 7.47057C14.9862 7.39097 14.9415 7.28302 14.9415 7.17045C14.9415 7.05788 14.9862 6.94993 15.0658 6.87033C15.1454 6.79073 15.2534 6.74601 15.3659 6.74601H16.0733V6.03862C16.0733 5.92605 16.1181 5.81809 16.1976 5.7385C16.2772 5.6589 16.3852 5.61418 16.4978 5.61418C16.6103 5.61418 16.7183 5.6589 16.7979 5.7385C16.8775 5.81809 16.9222 5.92605 16.9222 6.03862V6.74601H17.6296C17.7422 6.74601 17.8501 6.79073 17.9297 6.87033C18.0093 6.94993 18.054 7.05788 18.054 7.17045Z" fill="#AC00FF" />
                                </svg>
                                <span>New Launch</span>
                            </button>
                            <p className="mt-3">Created by <a className="web2course-courseContent-owner" href="/">VidyaVerse</a></p>
                            {/* <div>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M21.1744 10.1394C20.8209 9.77 20.4553 9.38938 20.3175 9.05469C20.19 8.74813 20.1825 8.24 20.175 7.74781C20.1609 6.83281 20.1459 5.79594 19.425 5.075C18.7041 4.35406 17.6672 4.33906 16.7522 4.325C16.26 4.3175 15.7519 4.31 15.4453 4.1825C15.1116 4.04469 14.73 3.67906 14.3606 3.32562C13.7137 2.70406 12.9788 2 12 2C11.0212 2 10.2872 2.70406 9.63937 3.32562C9.27 3.67906 8.88938 4.04469 8.55469 4.1825C8.25 4.31 7.74 4.3175 7.24781 4.325C6.33281 4.33906 5.29594 4.35406 4.575 5.075C3.85406 5.79594 3.84375 6.83281 3.825 7.74781C3.8175 8.24 3.81 8.74813 3.6825 9.05469C3.54469 9.38844 3.17906 9.77 2.82562 10.1394C2.20406 10.7863 1.5 11.5212 1.5 12.5C1.5 13.4788 2.20406 14.2128 2.82562 14.8606C3.17906 15.23 3.54469 15.6106 3.6825 15.9453C3.81 16.2519 3.8175 16.76 3.825 17.2522C3.83906 18.1672 3.85406 19.2041 4.575 19.925C5.29594 20.6459 6.33281 20.6609 7.24781 20.675C7.74 20.6825 8.24813 20.69 8.55469 20.8175C8.88844 20.9553 9.27 21.3209 9.63937 21.6744C10.2863 22.2959 11.0212 23 12 23C12.9788 23 13.7128 22.2959 14.3606 21.6744C14.73 21.3209 15.1106 20.9553 15.4453 20.8175C15.7519 20.69 16.26 20.6825 16.7522 20.675C17.6672 20.6609 18.7041 20.6459 19.425 19.925C20.1459 19.2041 20.1609 18.1672 20.175 17.2522C20.1825 16.76 20.19 16.2519 20.3175 15.9453C20.4553 15.6116 20.8209 15.23 21.1744 14.8606C21.7959 14.2137 22.5 13.4788 22.5 12.5C22.5 11.5212 21.7959 10.7872 21.1744 10.1394ZM11.25 8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V13.25C12.75 13.4489 12.671 13.6397 12.5303 13.7803C12.3897 13.921 12.1989 14 12 14C11.8011 14 11.6103 13.921 11.4697 13.7803C11.329 13.6397 11.25 13.4489 11.25 13.25V8ZM12 17.75C11.7775 17.75 11.56 17.684 11.375 17.5604C11.19 17.4368 11.0458 17.2611 10.9606 17.0555C10.8755 16.85 10.8532 16.6238 10.8966 16.4055C10.94 16.1873 11.0472 15.9868 11.2045 15.8295C11.3618 15.6722 11.5623 15.565 11.7805 15.5216C11.9988 15.4782 12.225 15.5005 12.4305 15.5856C12.6361 15.6708 12.8118 15.815 12.9354 16C13.059 16.185 13.125 16.4025 13.125 16.625C13.125 16.9234 13.0065 17.2095 12.7955 17.4205C12.5845 17.6315 12.2984 17.75 12 17.75Z" fill="#B519FF" />
                                    </svg>
                                    <span className="mx-2">Last updated on 01/2024</span>
                                </span>
                                <span className="mx-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M12 2.75C10.0716 2.75 8.18657 3.32183 6.58319 4.39317C4.97982 5.46451 3.73013 6.98726 2.99218 8.76884C2.25422 10.5504 2.06114 12.5108 2.43735 14.4021C2.81355 16.2934 3.74215 18.0307 5.10571 19.3943C6.46928 20.7579 8.20656 21.6865 10.0979 22.0627C11.9892 22.4389 13.9496 22.2458 15.7312 21.5078C17.5127 20.7699 19.0355 19.5202 20.1068 17.9168C21.1782 16.3134 21.75 14.4284 21.75 12.5C21.7473 9.91498 20.7192 7.43661 18.8913 5.60872C17.0634 3.78084 14.585 2.75273 12 2.75ZM19.3472 8.75H16.0256C15.6429 7.24392 15.0001 5.81623 14.1263 4.53125C15.2427 4.83127 16.2839 5.36162 17.1831 6.08818C18.0823 6.81475 18.8194 7.72146 19.3472 8.75ZM12 4.26031C13.125 5.47906 13.9688 7.03062 14.4722 8.75H9.52782C10.0313 7.03062 10.875 5.48094 12 4.26031ZM9 12.5C9.00013 11.7461 9.06285 10.9935 9.1875 10.25H14.8125C15.0613 11.7397 15.0613 13.2603 14.8125 14.75H9.1875C9.06285 14.0065 9.00013 13.2539 9 12.5ZM9.52782 16.25H14.4722C13.9688 17.9694 13.125 19.5191 12 20.7397C10.875 19.5191 10.0313 17.9694 9.52782 16.25ZM14.1263 20.4688C15.0001 19.1838 15.6429 17.7561 16.0256 16.25H19.3472C18.8194 17.2785 18.0823 18.1852 17.1831 18.9118C16.2839 19.6384 15.2427 20.1687 14.1263 20.4688ZM16.3322 14.75C16.5559 13.2583 16.5559 11.7417 16.3322 10.25H19.9378C20.3541 11.7211 20.3541 13.2789 19.9378 14.75H16.3322Z" fill="#B519FF" />
                                    </svg>
                                    <span className="mx-2">English</span>
                                </span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M21 5H3C2.60218 5 2.22064 5.15804 1.93934 5.43934C1.65804 5.72064 1.5 6.10218 1.5 6.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H21C21.3978 20 21.7794 19.842 22.0607 19.5607C22.342 19.2794 22.5 18.8978 22.5 18.5V6.5C22.5 6.10218 22.342 5.72064 22.0607 5.43934C21.7794 5.15804 21.3978 5 21 5ZM10.875 15.7475C10.3049 16.0767 9.65826 16.25 8.99998 16.25C8.3417 16.25 7.69501 16.0768 7.12492 15.7476C6.55482 15.4185 6.08141 14.9451 5.75226 14.375C5.42312 13.805 5.24984 13.1583 5.24984 12.5C5.24984 11.8417 5.42312 11.195 5.75226 10.625C6.08141 10.0549 6.55482 9.58148 7.12492 9.25236C7.69501 8.92323 8.3417 8.74997 8.99998 8.75C9.65826 8.75003 10.3049 8.92333 10.875 9.2525C10.963 9.30029 11.0406 9.36523 11.1031 9.44348C11.1656 9.52173 11.2118 9.61171 11.239 9.70811C11.2661 9.8045 11.2737 9.90536 11.2613 10.0047C11.2489 10.1041 11.2166 10.2 11.1665 10.2867C11.1165 10.3735 11.0495 10.4493 10.9696 10.5097C10.8898 10.5701 10.7986 10.6139 10.7015 10.6386C10.6044 10.6632 10.5034 10.6681 10.4044 10.6531C10.3054 10.638 10.2104 10.6033 10.125 10.5509C9.78294 10.3537 9.39499 10.2499 9.00012 10.25C8.60525 10.2501 8.21736 10.3542 7.87544 10.5517C7.53351 10.7492 7.24959 11.0332 7.05219 11.3752C6.85479 11.7172 6.75088 12.1051 6.75088 12.5C6.75088 12.8949 6.85479 13.2828 7.05219 13.6248C7.24959 13.9668 7.53351 14.2508 7.87544 14.4483C8.21736 14.6458 8.60525 14.7499 9.00012 14.75C9.39499 14.7501 9.78294 14.6463 10.125 14.4491C10.2968 14.3558 10.4982 14.3333 10.6864 14.3863C10.8745 14.4393 11.0346 14.5637 11.1323 14.733C11.2301 14.9023 11.2579 15.1031 11.2099 15.2926C11.1618 15.4821 11.0416 15.6453 10.875 15.7475ZM18.375 15.7475C17.8049 16.0767 17.1583 16.25 16.5 16.25C15.8417 16.25 15.195 16.0768 14.6249 15.7476C14.0548 15.4185 13.5814 14.9451 13.2523 14.375C12.9231 13.805 12.7498 13.1583 12.7498 12.5C12.7498 11.8417 12.9231 11.195 13.2523 10.625C13.5814 10.0549 14.0548 9.58148 14.6249 9.25236C15.195 8.92323 15.8417 8.74997 16.5 8.75C17.1583 8.75003 17.8049 8.92333 18.375 9.2525C18.463 9.30029 18.5406 9.36523 18.6031 9.44348C18.6656 9.52173 18.7118 9.61171 18.739 9.70811C18.7661 9.8045 18.7737 9.90536 18.7613 10.0047C18.7489 10.1041 18.7166 10.2 18.6665 10.2867C18.6165 10.3735 18.5495 10.4493 18.4696 10.5097C18.3898 10.5701 18.2986 10.6139 18.2015 10.6386C18.1044 10.6632 18.0034 10.6681 17.9044 10.6531C17.8054 10.638 17.7104 10.6033 17.625 10.5509C17.2829 10.3537 16.895 10.2499 16.5001 10.25C16.1052 10.2501 15.7174 10.3542 15.3754 10.5517C15.0335 10.7492 14.7496 11.0332 14.5522 11.3752C14.3548 11.7172 14.2509 12.1051 14.2509 12.5C14.2509 12.8949 14.3548 13.2828 14.5522 13.6248C14.7496 13.9668 15.0335 14.2508 15.3754 14.4483C15.7174 14.6458 16.1052 14.7499 16.5001 14.75C16.895 14.7501 17.2829 14.6463 17.625 14.4491C17.7968 14.3558 17.9982 14.3333 18.1864 14.3863C18.3745 14.4393 18.5346 14.5637 18.6323 14.733C18.7301 14.9023 18.7579 15.1031 18.7099 15.2926C18.6618 15.4821 18.5416 15.6453 18.375 15.7475Z" fill="#B519FF" />
                                    </svg>
                                    <span className="mx-2">English, Hindi, Gujarati</span>
                                </span>
                            </div> */}
                            {/* what you lear */}
                            <div className="web2course-courseContent-learn mt-4">
                                <h1 className="web2course-courseContent-learn-head">What you’ll learn</h1>
                                <div className="web2course-courseContent-list-container">
                                    <ul className="web2course-courseContent-list-container-ul">
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Web1, Web2 & Web3</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Client Server & P2P Model</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Ledger, Immutability & Cryptography</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Blockchain & Census Mechanisms</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Ethereum & Polygon</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Bitcoin, Solana, USDT & Dogcoin</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Private & Public key</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;How to make a Crypto Transaction</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Smart Contract</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Smart Contract Coding</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;DApp & DeFi Protocol</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;NFT & NFT Projects</span>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Web3 Gaming & Web3 Social Media</span>
                                            <span className="w-50 d-flex"><img src={sealCheck} />&nbsp;Supply Chain Management</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* This Course includes: */}
                            <div className="web2course-courseContent-learn mt-3">
                                <h1 className="web2course-courseContent-learn-head">This Course Includes:</h1>
                                <div className="web2course-courseContent-list-container mt-3">
                                    <ul className="web2course-courseContent-inclu">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1223 7.84594 17.2654 5.78088 15.7423 4.25773C14.2191 2.73457 12.1541 1.87769 10 1.875ZM12.8469 10.5203L9.09688 13.0203C8.99403 13.0885 8.87339 13.1249 8.75 13.125C8.58424 13.125 8.42527 13.0592 8.30806 12.9419C8.19085 12.8247 8.125 12.6658 8.125 12.5V7.5C8.12493 7.38682 8.15559 7.27575 8.21371 7.17863C8.27183 7.08152 8.35523 7.00201 8.45501 6.94859C8.55479 6.89517 8.6672 6.86985 8.78025 6.87533C8.89329 6.8808 9.00273 6.91687 9.09688 6.97969L12.8469 9.47969C12.9326 9.53674 13.0029 9.61409 13.0515 9.70487C13.1002 9.79564 13.1256 9.89702 13.1256 10C13.1256 10.103 13.1002 10.2044 13.0515 10.2951C13.0029 10.3859 12.9326 10.4633 12.8469 10.5203Z" fill="#AD00FF" />
                                            </svg>
                                            <span className="mx-2">10 hours Pre-Recorded Content</span>
                                        </li>
                                        <li className="my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.6922 6.43281L12.3172 2.05781C12.2591 1.99979 12.1902 1.95378 12.1143 1.92241C12.0384 1.89105 11.9571 1.87494 11.875 1.875H4.375C4.04348 1.875 3.72554 2.0067 3.49112 2.24112C3.2567 2.47554 3.125 2.79348 3.125 3.125V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V6.875C16.8751 6.7929 16.859 6.71159 16.8276 6.63572C16.7962 6.55985 16.7502 6.4909 16.6922 6.43281ZM11.875 6.875V3.4375L15.3125 6.875H11.875Z" fill="#AD00FF" />
                                            </svg>
                                            <span className="mx-2">250+ Questions</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M16.6922 6.43281L12.3172 2.05781C12.2591 1.99979 12.1902 1.95378 12.1143 1.92241C12.0384 1.89105 11.9571 1.87494 11.875 1.875H4.375C4.04348 1.875 3.72554 2.0067 3.49112 2.24112C3.2567 2.47554 3.125 2.79348 3.125 3.125V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V6.875C16.8751 6.7929 16.859 6.71159 16.8276 6.63572C16.7962 6.55985 16.7502 6.4909 16.6922 6.43281ZM12.3172 12.9422L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.68281 12.9422C7.56554 12.8249 7.49965 12.6659 7.49965 12.5C7.49965 12.3341 7.56554 12.1751 7.68281 12.0578C7.80009 11.9405 7.95915 11.8747 8.125 11.8747C8.29085 11.8747 8.44991 11.9405 8.56719 12.0578L9.375 12.8664V9.375C9.375 9.20924 9.44085 9.05027 9.55806 8.93306C9.67527 8.81585 9.83424 8.75 10 8.75C10.1658 8.75 10.3247 8.81585 10.4419 8.93306C10.5592 9.05027 10.625 9.20924 10.625 9.375V12.8664L11.4328 12.0578C11.5501 11.9405 11.7091 11.8747 11.875 11.8747C12.0409 11.8747 12.1999 11.9405 12.3172 12.0578C12.4345 12.1751 12.5003 12.3341 12.5003 12.5C12.5003 12.6659 12.4345 12.8249 12.3172 12.9422ZM11.875 6.875V3.4375L15.3125 6.875H11.875Z" fill="#AD00FF" />
                                            </svg>
                                            <span className="mx-2">Downloadable Resources</span>
                                        </li>
                                    </ul>
                                    <ul className="web2course-courseContent-inclu">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M13.75 1.25H6.25C5.75272 1.25 5.27581 1.44754 4.92417 1.79917C4.57254 2.15081 4.375 2.62772 4.375 3.125V16.875C4.375 17.3723 4.57254 17.8492 4.92417 18.2008C5.27581 18.5525 5.75272 18.75 6.25 18.75H13.75C14.2473 18.75 14.7242 18.5525 15.0758 18.2008C15.4275 17.8492 15.625 17.3723 15.625 16.875V3.125C15.625 2.62772 15.4275 2.15081 15.0758 1.79917C14.7242 1.44754 14.2473 1.25 13.75 1.25ZM6.25 2.5H13.75C13.9158 2.5 14.0747 2.56585 14.1919 2.68306C14.3092 2.80027 14.375 2.95924 14.375 3.125V3.75H5.625V3.125C5.625 2.95924 5.69085 2.80027 5.80806 2.68306C5.92527 2.56585 6.08424 2.5 6.25 2.5ZM13.75 17.5H6.25C6.08424 17.5 5.92527 17.4342 5.80806 17.3169C5.69085 17.1997 5.625 17.0408 5.625 16.875V16.25H14.375V16.875C14.375 17.0408 14.3092 17.1997 14.1919 17.3169C14.0747 17.4342 13.9158 17.5 13.75 17.5Z" fill="#AD00FF" />
                                            </svg>
                                            <span className="mx-2">Access on Mobile & TV</span>
                                        </li>
                                        <li className="my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M17.5 3.75H2.5C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75ZM9.0625 12.7063C8.58744 12.9806 8.04855 13.125 7.49998 13.125C6.95142 13.125 6.41251 12.9806 5.93743 12.7064C5.46235 12.4321 5.06784 12.0376 4.79355 11.5625C4.51926 11.0875 4.37486 10.5486 4.37486 10C4.37486 9.45143 4.51926 8.91253 4.79355 8.43747C5.06784 7.9624 5.46235 7.5679 5.93743 7.29363C6.41251 7.01936 6.95142 6.87498 7.49998 6.875C8.04855 6.87502 8.58744 7.01944 9.0625 7.29375C9.13585 7.33358 9.20047 7.38769 9.25256 7.4529C9.30466 7.51811 9.34316 7.59309 9.36581 7.67342C9.38845 7.75375 9.39478 7.8378 9.38441 7.92062C9.37405 8.00343 9.3472 8.08333 9.30545 8.15561C9.26371 8.22788 9.20791 8.29105 9.14135 8.34141C9.0748 8.39177 8.99883 8.42829 8.91793 8.44881C8.83703 8.46933 8.75284 8.47344 8.67033 8.4609C8.58781 8.44836 8.50865 8.41941 8.4375 8.37578C8.15245 8.21138 7.82916 8.12489 7.5001 8.125C7.17104 8.12511 6.8478 8.21182 6.56286 8.37641C6.27793 8.54101 6.04132 8.77769 5.87683 9.06268C5.71233 9.34767 5.62573 9.67094 5.62573 10C5.62573 10.3291 5.71233 10.6523 5.87683 10.9373C6.04132 11.2223 6.27793 11.459 6.56286 11.6236C6.8478 11.7882 7.17104 11.8749 7.5001 11.875C7.82916 11.8751 8.15245 11.7886 8.4375 11.6242C8.58067 11.5465 8.74853 11.5277 8.90533 11.5719C9.06212 11.6161 9.19547 11.7198 9.27695 11.8609C9.35844 12.0019 9.38162 12.1692 9.34156 12.3271C9.3015 12.4851 9.20137 12.6211 9.0625 12.7063ZM15.3125 12.7063C14.8374 12.9806 14.2985 13.125 13.75 13.125C13.2014 13.125 12.6625 12.9806 12.1874 12.7064C11.7124 12.4321 11.3178 12.0376 11.0436 11.5625C10.7693 11.0875 10.6249 10.5486 10.6249 10C10.6249 9.45143 10.7693 8.91253 11.0436 8.43747C11.3178 7.9624 11.7124 7.5679 12.1874 7.29363C12.6625 7.01936 13.2014 6.87498 13.75 6.875C14.2985 6.87502 14.8374 7.01944 15.3125 7.29375C15.3858 7.33358 15.4505 7.38769 15.5026 7.4529C15.5547 7.51811 15.5932 7.59309 15.6158 7.67342C15.6385 7.75375 15.6448 7.8378 15.6344 7.92062C15.624 8.00343 15.5972 8.08333 15.5555 8.15561C15.5137 8.22788 15.4579 8.29105 15.3914 8.34141C15.3248 8.39177 15.2488 8.42829 15.1679 8.44881C15.087 8.46933 15.0028 8.47344 14.9203 8.4609C14.8378 8.44836 14.7586 8.41941 14.6875 8.37578C14.4025 8.21138 14.0792 8.12489 13.7501 8.125C13.421 8.12511 13.0978 8.21182 12.8129 8.37641C12.5279 8.54101 12.2913 8.77769 12.1268 9.06268C11.9623 9.34767 11.8757 9.67094 11.8757 10C11.8757 10.3291 11.9623 10.6523 12.1268 10.9373C12.2913 11.2223 12.5279 11.459 12.8129 11.6236C13.0978 11.7882 13.421 11.8749 13.7501 11.875C14.0792 11.8751 14.4025 11.7886 14.6875 11.6242C14.8307 11.5465 14.9985 11.5277 15.1553 11.5719C15.3121 11.6161 15.4455 11.7198 15.527 11.8609C15.6084 12.0019 15.6316 12.1692 15.5916 12.3271C15.5515 12.4851 15.4514 12.6211 15.3125 12.7063Z" fill="#B519FF" />
                                            </svg>
                                            <span className="mx-2">Closed Captions</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M18.125 6.94219V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V14.375C1.875 14.7065 2.0067 15.0245 2.24112 15.2589C2.47554 15.4933 2.79348 15.625 3.125 15.625H11.875V17.5C11.8749 17.6066 11.9021 17.7114 11.954 17.8046C12.0058 17.8977 12.0807 17.976 12.1713 18.032C12.262 18.0881 12.3655 18.12 12.4719 18.1248C12.5784 18.1296 12.6844 18.1071 12.7797 18.0594L15 16.9484L17.2203 18.0594C17.3156 18.1071 17.4216 18.1296 17.5281 18.1248C17.6345 18.12 17.738 18.0881 17.8287 18.032C17.9193 17.976 17.9942 17.8977 18.046 17.8046C18.0979 17.7114 18.1251 17.6066 18.125 17.5V13.0578C18.9262 12.2417 19.3751 11.1437 19.3751 10C19.3751 8.85632 18.9262 7.75832 18.125 6.94219ZM10 11.25H5.625C5.45924 11.25 5.30027 11.1842 5.18306 11.0669C5.06585 10.9497 5 10.7908 5 10.625C5 10.4592 5.06585 10.3003 5.18306 10.1831C5.30027 10.0658 5.45924 10 5.625 10H10C10.1658 10 10.3247 10.0658 10.4419 10.1831C10.5592 10.3003 10.625 10.4592 10.625 10.625C10.625 10.7908 10.5592 10.9497 10.4419 11.0669C10.3247 11.1842 10.1658 11.25 10 11.25ZM10 8.75H5.625C5.45924 8.75 5.30027 8.68415 5.18306 8.56694C5.06585 8.44973 5 8.29076 5 8.125C5 7.95924 5.06585 7.80027 5.18306 7.68306C5.30027 7.56585 5.45924 7.5 5.625 7.5H10C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125C10.625 8.29076 10.5592 8.44973 10.4419 8.56694C10.3247 8.68415 10.1658 8.75 10 8.75ZM16.875 16.4891L15.2797 15.6906C15.1929 15.6472 15.0971 15.6246 15 15.6246C14.9029 15.6246 14.8071 15.6472 14.7203 15.6906L13.125 16.4891V13.9523C13.7109 14.2306 14.3514 14.375 15 14.375C15.6486 14.375 16.2891 14.2306 16.875 13.9523V16.4891ZM15 13.125C14.3819 13.125 13.7777 12.9417 13.2638 12.5983C12.7499 12.255 12.3494 11.7669 12.1129 11.1959C11.8764 10.6249 11.8145 9.99653 11.935 9.39034C12.0556 8.78415 12.3533 8.22733 12.7903 7.79029C13.2273 7.35325 13.7842 7.05562 14.3903 6.93505C14.9965 6.81447 15.6249 6.87635 16.1959 7.11288C16.7669 7.3494 17.255 7.74994 17.5983 8.26384C17.9417 8.77775 18.125 9.38193 18.125 10C18.125 10.8288 17.7958 11.6237 17.2097 12.2097C16.6237 12.7958 15.8288 13.125 15 13.125Z" fill="#AD00FF" />
                                            </svg>
                                            <span className="mx-2">Certificate of Completion</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="web2course-courseDesc">
                            <div className="web2course-courseDesc-video2">
                            </div>
                            <div className="px-2 web2course-courseDesc-price flex">
                                <span className="web2course-courseDesc-video-rupee px-2">₹ 2499</span>
                                <del className="web2course-courseDesc-video-delrupee px-2 mx-2">₹ 4999</del>
                                <span className="web2course-courseDesc-video-off px-2">50% off</span>
                            </div>
                            <a href="https://academy.vidyaverse.in/account/expresscheckout?redirectfrom=signup&course=36909fdb-27e2-45fa-b9cc-f5295c221165">
                            <button className="web2course-courseDesc-add-cart">Buy Now</button></a>
                            {/* <button className="web2course-courseDesc-enroll my-2">Coming Soon</button> */}

                              {/*<h6 className="web2course-courseDesc-feat mt-3">This Course includes:</h6>
                           <ul className="web2course-courseDesc-ul">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1223 7.84594 17.2654 5.78088 15.7423 4.25773C14.2191 2.73457 12.1541 1.87769 10 1.875ZM12.8469 10.5203L9.09688 13.0203C8.99403 13.0885 8.87339 13.1249 8.75 13.125C8.58424 13.125 8.42527 13.0592 8.30806 12.9419C8.19085 12.8247 8.125 12.6658 8.125 12.5V7.5C8.12493 7.38682 8.15559 7.27575 8.21371 7.17863C8.27183 7.08152 8.35523 7.00201 8.45501 6.94859C8.55479 6.89517 8.6672 6.86985 8.78025 6.87533C8.89329 6.8808 9.00273 6.91687 9.09688 6.97969L12.8469 9.47969C12.9326 9.53674 13.0029 9.61409 13.0515 9.70487C13.1002 9.79564 13.1256 9.89702 13.1256 10C13.1256 10.103 13.1002 10.2044 13.0515 10.2951C13.0029 10.3859 12.9326 10.4633 12.8469 10.5203Z" fill="#AD00FF" />
                                    </svg>
                                    <span>20 hours pre-recorded course</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6922 6.43281L12.3172 2.05781C12.2591 1.99979 12.1902 1.95378 12.1143 1.92241C12.0384 1.89105 11.9571 1.87494 11.875 1.875H4.375C4.04348 1.875 3.72554 2.0067 3.49112 2.24112C3.2567 2.47554 3.125 2.79348 3.125 3.125V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V6.875C16.8751 6.7929 16.859 6.71159 16.8276 6.63572C16.7962 6.55985 16.7502 6.4909 16.6922 6.43281ZM11.875 6.875V3.4375L15.3125 6.875H11.875Z" fill="#AD00FF" />
                                    </svg>
                                    <span>11 Articles</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.6922 6.43281L12.3172 2.05781C12.2591 1.99979 12.1902 1.95378 12.1143 1.92241C12.0384 1.89105 11.9571 1.87494 11.875 1.875H4.375C4.04348 1.875 3.72554 2.0067 3.49112 2.24112C3.2567 2.47554 3.125 2.79348 3.125 3.125V16.875C3.125 17.2065 3.2567 17.5245 3.49112 17.7589C3.72554 17.9933 4.04348 18.125 4.375 18.125H15.625C15.9565 18.125 16.2745 17.9933 16.5089 17.7589C16.7433 17.5245 16.875 17.2065 16.875 16.875V6.875C16.8751 6.7929 16.859 6.71159 16.8276 6.63572C16.7962 6.55985 16.7502 6.4909 16.6922 6.43281ZM12.3172 12.9422L10.4422 14.8172C10.3841 14.8753 10.3152 14.9214 10.2393 14.9529C10.1635 14.9843 10.0821 15.0005 10 15.0005C9.91787 15.0005 9.83654 14.9843 9.76066 14.9529C9.68479 14.9214 9.61586 14.8753 9.55781 14.8172L7.68281 12.9422C7.56554 12.8249 7.49965 12.6659 7.49965 12.5C7.49965 12.3341 7.56554 12.1751 7.68281 12.0578C7.80009 11.9405 7.95915 11.8747 8.125 11.8747C8.29085 11.8747 8.44991 11.9405 8.56719 12.0578L9.375 12.8664V9.375C9.375 9.20924 9.44085 9.05027 9.55806 8.93306C9.67527 8.81585 9.83424 8.75 10 8.75C10.1658 8.75 10.3247 8.81585 10.4419 8.93306C10.5592 9.05027 10.625 9.20924 10.625 9.375V12.8664L11.4328 12.0578C11.5501 11.9405 11.7091 11.8747 11.875 11.8747C12.0409 11.8747 12.1999 11.9405 12.3172 12.0578C12.4345 12.1751 12.5003 12.3341 12.5003 12.5C12.5003 12.6659 12.4345 12.8249 12.3172 12.9422ZM11.875 6.875V3.4375L15.3125 6.875H11.875Z" fill="#AD00FF" />
                                    </svg>
                                    <span>3 Downloadable resources</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M18.125 6.94219V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125H3.125C2.79348 3.125 2.47554 3.2567 2.24112 3.49112C2.0067 3.72554 1.875 4.04348 1.875 4.375V14.375C1.875 14.7065 2.0067 15.0245 2.24112 15.2589C2.47554 15.4933 2.79348 15.625 3.125 15.625H11.875V17.5C11.8749 17.6066 11.9021 17.7114 11.954 17.8046C12.0058 17.8977 12.0807 17.976 12.1713 18.032C12.262 18.0881 12.3655 18.12 12.4719 18.1248C12.5784 18.1296 12.6844 18.1071 12.7797 18.0594L15 16.9484L17.2203 18.0594C17.3156 18.1071 17.4216 18.1296 17.5281 18.1248C17.6345 18.12 17.738 18.0881 17.8287 18.032C17.9193 17.976 17.9942 17.8977 18.046 17.8046C18.0979 17.7114 18.1251 17.6066 18.125 17.5V13.0578C18.9262 12.2417 19.3751 11.1437 19.3751 10C19.3751 8.85632 18.9262 7.75832 18.125 6.94219ZM10 11.25H5.625C5.45924 11.25 5.30027 11.1842 5.18306 11.0669C5.06585 10.9497 5 10.7908 5 10.625C5 10.4592 5.06585 10.3003 5.18306 10.1831C5.30027 10.0658 5.45924 10 5.625 10H10C10.1658 10 10.3247 10.0658 10.4419 10.1831C10.5592 10.3003 10.625 10.4592 10.625 10.625C10.625 10.7908 10.5592 10.9497 10.4419 11.0669C10.3247 11.1842 10.1658 11.25 10 11.25ZM10 8.75H5.625C5.45924 8.75 5.30027 8.68415 5.18306 8.56694C5.06585 8.44973 5 8.29076 5 8.125C5 7.95924 5.06585 7.80027 5.18306 7.68306C5.30027 7.56585 5.45924 7.5 5.625 7.5H10C10.1658 7.5 10.3247 7.56585 10.4419 7.68306C10.5592 7.80027 10.625 7.95924 10.625 8.125C10.625 8.29076 10.5592 8.44973 10.4419 8.56694C10.3247 8.68415 10.1658 8.75 10 8.75ZM16.875 16.4891L15.2797 15.6906C15.1929 15.6472 15.0971 15.6246 15 15.6246C14.9029 15.6246 14.8071 15.6472 14.7203 15.6906L13.125 16.4891V13.9523C13.7109 14.2306 14.3514 14.375 15 14.375C15.6486 14.375 16.2891 14.2306 16.875 13.9523V16.4891ZM15 13.125C14.3819 13.125 13.7777 12.9417 13.2638 12.5983C12.7499 12.255 12.3494 11.7669 12.1129 11.1959C11.8764 10.6249 11.8145 9.99653 11.935 9.39034C12.0556 8.78415 12.3533 8.22733 12.7903 7.79029C13.2273 7.35325 13.7842 7.05562 14.3903 6.93505C14.9965 6.81447 15.6249 6.87635 16.1959 7.11288C16.7669 7.3494 17.255 7.74994 17.5983 8.26384C17.9417 8.77775 18.125 9.38193 18.125 10C18.125 10.8288 17.7958 11.6237 17.2097 12.2097C16.6237 12.7958 15.8288 13.125 15 13.125Z" fill="#AD00FF" />
                                    </svg>
                                    <span>Certificate of completion</span>
                                </li>
                            </ul> */}
                            {/* <h6 className="web2course-courseDesc-feat mt-4">More Options:</h6> */}
                            {/* <div className="web2course-courseDesc-share-div mt-2">
                                <div className="web2course-courseDesc-share-card">
                                    <span className="text-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M19.8752 18.75C19.8753 19.2427 19.7675 19.7293 19.5594 20.1758C19.3514 20.6223 19.0482 21.0179 18.671 21.3347C18.2938 21.6516 17.8518 21.882 17.3761 22.0099C16.9003 22.1377 16.4024 22.1598 15.9172 22.0748C15.432 21.9897 14.9713 21.7994 14.5675 21.5173C14.1636 21.2352 13.8264 20.8681 13.5796 20.4418C13.3327 20.0156 13.1822 19.5404 13.1385 19.0497C13.0948 18.5591 13.1591 18.0648 13.3268 17.6016L8.358 14.4094C7.88345 14.8749 7.282 15.1899 6.62911 15.3149C5.97622 15.4398 5.30097 15.3692 4.68806 15.1119C4.07515 14.8545 3.55189 14.4219 3.18391 13.8683C2.81593 13.3147 2.61963 12.6648 2.61963 12C2.61963 11.3353 2.81593 10.6854 3.18391 10.1318C3.55189 9.57816 4.07515 9.14556 4.68806 8.88821C5.30097 8.63087 5.97622 8.56025 6.62911 8.68522C7.282 8.81019 7.88345 9.12518 8.358 9.59067L13.3268 6.40317C13.0422 5.62134 13.0558 4.76208 13.3647 3.98959C13.6737 3.2171 14.2565 2.58553 15.0017 2.21557C15.7469 1.84562 16.6023 1.76321 17.4045 1.98409C18.2066 2.20498 18.8992 2.71367 19.35 3.41297C19.8008 4.11227 19.9781 4.95314 19.8481 5.77491C19.718 6.59668 19.2898 7.34173 18.6451 7.86769C18.0005 8.39366 17.1846 8.66366 16.3535 8.6261C15.5223 8.58855 14.7342 8.24607 14.1396 7.66411L9.17082 10.8563C9.43935 11.5984 9.43935 12.4111 9.17082 13.1532L14.1396 16.3454C14.614 15.8811 15.2147 15.567 15.8667 15.4424C16.5187 15.3178 17.193 15.3882 17.8051 15.6449C18.4173 15.9016 18.9402 16.333 19.3084 16.8853C19.6766 17.4376 19.8737 18.0863 19.8752 18.75Z" fill="#AD00FF" />
                                            </svg>
                                        </span><br />
                                        <span>Share</span>
                                    </span >
                                </div>
                                {/* <div className="web2course-courseDesc-share-card">
                                    <span className="text-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20.25 6.74997H16.9613C16.9978 6.71903 17.0353 6.68903 17.0709 6.65622C17.3557 6.40326 17.5851 6.09427 17.745 5.74858C17.9049 5.40289 17.9917 5.02793 18 4.64715C18.0123 4.2306 17.9394 3.81592 17.7856 3.42858C17.6319 3.04124 17.4006 2.68941 17.106 2.39468C16.8113 2.09996 16.4596 1.86857 16.0723 1.71471C15.685 1.56085 15.2703 1.48778 14.8538 1.49997C14.4728 1.50817 14.0977 1.59492 13.7518 1.75479C13.406 1.91465 13.0968 2.14419 12.8438 2.42903C12.4936 2.83487 12.2089 3.29288 12 3.78653C11.7911 3.29288 11.5064 2.83487 11.1562 2.42903C10.9032 2.14419 10.594 1.91465 10.2482 1.75479C9.90232 1.59492 9.52718 1.50817 9.14625 1.49997C8.72969 1.48778 8.31503 1.56085 7.92774 1.71471C7.54044 1.86857 7.18868 2.09996 6.89405 2.39468C6.59941 2.68941 6.36812 3.04124 6.21438 3.42858C6.06064 3.81592 5.98768 4.2306 6 4.64715C6.00833 5.02793 6.09514 5.40289 6.255 5.74858C6.41486 6.09427 6.64434 6.40326 6.92906 6.65622C6.96469 6.68715 7.00219 6.71715 7.03875 6.74997H3.75C3.35218 6.74997 2.97064 6.908 2.68934 7.18931C2.40804 7.47061 2.25 7.85214 2.25 8.24997V11.25C2.25 11.6478 2.40804 12.0293 2.68934 12.3106C2.97064 12.5919 3.35218 12.75 3.75 12.75V18.75C3.75 19.1478 3.90804 19.5293 4.18934 19.8106C4.47064 20.0919 4.85218 20.25 5.25 20.25H10.875C10.9745 20.25 11.0698 20.2105 11.1402 20.1401C11.2105 20.0698 11.25 19.9744 11.25 19.875V11.25H3.75V8.24997H11.25V11.25H12.75V8.24997H20.25V11.25H12.75V19.875C12.75 19.9744 12.7895 20.0698 12.8598 20.1401C12.9302 20.2105 13.0255 20.25 13.125 20.25H18.75C19.1478 20.25 19.5294 20.0919 19.8107 19.8106C20.092 19.5293 20.25 19.1478 20.25 18.75V12.75C20.6478 12.75 21.0294 12.5919 21.3107 12.3106C21.592 12.0293 21.75 11.6478 21.75 11.25V8.24997C21.75 7.85214 21.592 7.47061 21.3107 7.18931C21.0294 6.908 20.6478 6.74997 20.25 6.74997ZM7.92281 5.53122C7.79168 5.41246 7.68651 5.26788 7.61391 5.10655C7.54131 4.94522 7.50285 4.77062 7.50094 4.59372C7.4962 4.38644 7.53287 4.1803 7.60881 3.98737C7.68476 3.79445 7.79844 3.61862 7.9432 3.47019C8.08796 3.32176 8.26089 3.20372 8.45186 3.12297C8.64282 3.04223 8.84798 3.00041 9.05531 2.99997H9.10125C9.27815 3.00187 9.45275 3.04034 9.61409 3.11293C9.77542 3.18553 9.92 3.2907 10.0388 3.42184C10.8253 4.31059 11.1028 5.78434 11.2003 6.69559C10.2853 6.59903 8.8125 6.32153 7.92281 5.53122ZM16.0791 5.53122C15.1894 6.31872 13.7128 6.59622 12.7978 6.69372C12.9094 5.7084 13.2188 4.26559 13.9688 3.42278C14.0875 3.29164 14.2321 3.18647 14.3934 3.11387C14.5547 3.04127 14.7293 3.00281 14.9062 3.0009H14.9522C15.1595 3.0022 15.3645 3.04487 15.5552 3.12641C15.7458 3.20795 15.9183 3.32672 16.0624 3.47576C16.2066 3.6248 16.3195 3.80112 16.3947 3.99438C16.4698 4.18763 16.5056 4.39394 16.5 4.60122C16.4969 4.77692 16.4578 4.95012 16.3851 5.1101C16.3124 5.27007 16.2076 5.4134 16.0772 5.53122H16.0791Z" fill="#AD00FF" />
                                            </svg>
                                        </span><br />
                                        <span>Gift</span>
                                    </span >
                                </div> 
                                <div className="web2course-courseDesc-share-card">
                                    <span className="text-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21.2991 9.795C21.6379 9.72606 21.9425 9.54219 22.1613 9.27449C22.3802 9.00679 22.4998 8.6717 22.5 8.32594V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3C2.60218 4.5 2.22065 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V8.32594C1.50019 8.6717 1.61983 9.00679 1.83867 9.27449C2.05751 9.54219 2.36212 9.72606 2.70094 9.795C3.20757 9.90006 3.66251 10.1765 3.98912 10.5778C4.31573 10.9791 4.49406 11.4807 4.49406 11.9981C4.49406 12.5155 4.31573 13.0171 3.98912 13.4184C3.66251 13.8197 3.20757 14.0962 2.70094 14.2013C2.36148 14.2703 2.0564 14.4547 1.83748 14.7232C1.61857 14.9917 1.49933 15.3277 1.5 15.6741V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22065 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V15.6741C22.4998 15.3283 22.3802 14.9932 22.1613 14.7255C21.9425 14.4578 21.6379 14.2739 21.2991 14.205C20.7924 14.0999 20.3375 13.8235 20.0109 13.4222C19.6843 13.0209 19.5059 12.5193 19.5059 12.0019C19.5059 11.4845 19.6843 10.9829 20.0109 10.5816C20.3375 10.1803 20.7924 9.90381 21.2991 9.79875V9.795ZM3 15.675C3.84722 15.5024 4.60876 15.0424 5.15573 14.3728C5.70269 13.7031 6.00146 12.8651 6.00146 12.0005C6.00146 11.1359 5.70269 10.2978 5.15573 9.62819C4.60876 8.95857 3.84722 8.49852 3 8.32594V6H8.25V18H3V15.675Z" fill="#AD00FF" />
                                            </svg>
                                        </span><br />
                                        <span>Apply Coupon</span>
                                    </span >
                                </div>
                            </div> */}
                        </div>

                    </div>
                    <h1 className="web2course-courseContent-curri-head mt-4">Course curriculum</h1>
                    <div className="d-flex justify-content-between">
                        <div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1223 7.84594 17.2654 5.78088 15.7423 4.25773C14.2191 2.73457 12.1541 1.87769 10 1.875ZM12.8469 10.5203L9.09688 13.0203C8.99403 13.0885 8.87339 13.1249 8.75 13.125C8.58424 13.125 8.42527 13.0592 8.30806 12.9419C8.19085 12.8247 8.125 12.6658 8.125 12.5V7.5C8.12493 7.38682 8.15559 7.27575 8.21371 7.17863C8.27183 7.08152 8.35523 7.00201 8.45501 6.94859C8.55479 6.89517 8.6672 6.86985 8.78025 6.87533C8.89329 6.8808 9.00273 6.91687 9.09688 6.97969L12.8469 9.47969C12.9326 9.53674 13.0029 9.61409 13.0515 9.70487C13.1002 9.79564 13.1256 9.89702 13.1256 10C13.1256 10.103 13.1002 10.2044 13.0515 10.2951C13.0029 10.3859 12.9326 10.4633 12.8469 10.5203Z" fill="#AD00FF" />
                                </svg>
                                <span className="mx-2">5 Modules</span>
                            </span>
                            <span className="mx-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.25 2.5H3.75C3.41848 2.5 3.10054 2.6317 2.86612 2.86612C2.6317 3.10054 2.5 3.41848 2.5 3.75V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.25C16.5815 17.5 16.8995 17.3683 17.1339 17.1339C17.3683 16.8995 17.5 16.5815 17.5 16.25V3.75C17.5 3.41848 17.3683 3.10054 17.1339 2.86612C16.8995 2.6317 16.5815 2.5 16.25 2.5ZM6.25 16.25H3.75V3.75H6.25V16.25ZM13.75 11.875H8.75C8.58424 11.875 8.42527 11.8092 8.30806 11.6919C8.19085 11.5747 8.125 11.4158 8.125 11.25C8.125 11.0842 8.19085 10.9253 8.30806 10.8081C8.42527 10.6908 8.58424 10.625 8.75 10.625H13.75C13.9158 10.625 14.0747 10.6908 14.1919 10.8081C14.3092 10.9253 14.375 11.0842 14.375 11.25C14.375 11.4158 14.3092 11.5747 14.1919 11.6919C14.0747 11.8092 13.9158 11.875 13.75 11.875ZM13.75 9.375H8.75C8.58424 9.375 8.42527 9.30915 8.30806 9.19194C8.19085 9.07473 8.125 8.91576 8.125 8.75C8.125 8.58424 8.19085 8.42527 8.30806 8.30806C8.42527 8.19085 8.58424 8.125 8.75 8.125H13.75C13.9158 8.125 14.0747 8.19085 14.1919 8.30806C14.3092 8.42527 14.375 8.58424 14.375 8.75C14.375 8.91576 14.3092 9.07473 14.1919 9.19194C14.0747 9.30915 13.9158 9.375 13.75 9.375Z" fill="#AD00FF" />
                                </svg>
                                <span className="mx-2">254 Episodes</span>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM14.375 10.625H10C9.83424 10.625 9.67527 10.5592 9.55806 10.4419C9.44085 10.3247 9.375 10.1658 9.375 10V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625Z" fill="#AD00FF" />
                                </svg>
                                <span className="mx-2">10 hours</span>
                            </span>
                        </div>
                        {/*<div>
                            <span>Expand all Modules</span> &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M16.6922 7.94219L10.4422 14.1922C10.3841 14.2503 10.3152 14.2964 10.2393 14.3279C10.1635 14.3593 10.0821 14.3755 10 14.3755C9.91787 14.3755 9.83654 14.3593 9.76067 14.3279C9.68479 14.2964 9.61586 14.2503 9.55782 14.1922L3.30782 7.94219C3.22031 7.85478 3.1607 7.74337 3.13655 7.62207C3.11239 7.50076 3.12477 7.37502 3.17211 7.26076C3.21946 7.14649 3.29964 7.04884 3.40252 6.98017C3.50539 6.91151 3.62632 6.8749 3.75 6.875H16.25C16.3737 6.8749 16.4946 6.91151 16.5975 6.98017C16.7004 7.04884 16.7805 7.14649 16.8279 7.26076C16.8752 7.37502 16.8876 7.50076 16.8635 7.62207C16.8393 7.74337 16.7797 7.85478 16.6922 7.94219Z" fill="#AD00FF" />
                            </svg>
                        </div>*/}
                    </div>

                        <div className="web2course-courseContent-curri-table">

                        {courses.map((course, index) => {
                                         return (
                                                <AccordionItem key={index} active={active} handleToggle={handleToggle} course={course} />
                                            )
                                        })
                                    }
                        </div>
                    
                    <h1 className="web2course-courseContent-curri-head mt-4">Instructors</h1>
                    <div className="web2course-courseContent-about-inst my-4 d-flex justify-content-center align-items-center p-3 ">
                        
                        <div className="web2course-courseContent-inst-img"><img src={Sauransh} /></div>
                        <div className="web2course-courseContent-inst-detail">
                            <h2>Sauransh Bhardwaj</h2>
                            <p>Co-Founder & CEO</p>
                            {/* <ul>
                                <li> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3203 8.93603L14.7969 12.011L15.8524 16.5892C15.9082 16.8285 15.8923 17.079 15.8065 17.3093C15.7208 17.5396 15.5691 17.7396 15.3703 17.8841C15.1716 18.0287 14.9346 18.1114 14.6891 18.1221C14.4436 18.1327 14.2004 18.0707 13.9899 17.9438L9.99689 15.522L6.01252 17.9438C5.80202 18.0707 5.55881 18.1327 5.31328 18.1221C5.06775 18.1114 4.83079 18.0287 4.63204 17.8841C4.4333 17.7396 4.28157 17.5396 4.19584 17.3093C4.1101 17.079 4.09416 16.8285 4.15002 16.5892L5.20392 12.0157L1.6797 8.93603C1.49331 8.77526 1.35852 8.56304 1.29225 8.32598C1.22598 8.08892 1.23117 7.83757 1.30718 7.60345C1.38319 7.36933 1.52663 7.16287 1.71952 7.00994C1.9124 6.85702 2.14614 6.76445 2.39142 6.74384L7.03674 6.34149L8.85002 2.01649C8.94471 1.78955 9.10443 1.5957 9.30907 1.45935C9.51371 1.323 9.75411 1.25024 10 1.25024C10.2459 1.25024 10.4863 1.323 10.691 1.45935C10.8956 1.5957 11.0553 1.78955 11.15 2.01649L12.9688 6.34149L17.6125 6.74384C17.8578 6.76445 18.0915 6.85702 18.2844 7.00994C18.4773 7.16287 18.6207 7.36933 18.6968 7.60345C18.7728 7.83757 18.778 8.08892 18.7117 8.32598C18.6454 8.56304 18.5106 8.77526 18.3242 8.93603H18.3203Z" fill="#AD00FF" />
                                </svg> &nbsp;<span>4.5 Instructor rating</span></li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.875 7.49993C16.8757 6.34134 16.5836 5.20136 16.0258 4.18589C15.468 3.17041 14.6626 2.31237 13.6844 1.69147C12.7062 1.07057 11.587 0.706936 10.4307 0.634355C9.27438 0.561774 8.11847 0.782595 7.07034 1.27631C6.02221 1.77002 5.11584 2.52062 4.43544 3.45837C3.75503 4.39612 3.32265 5.49062 3.17846 6.64021C3.03426 7.78979 3.18293 8.95717 3.61065 10.0339C4.03837 11.1107 4.73128 12.0619 5.625 12.7992V18.7499C5.62492 18.8565 5.65211 18.9614 5.70397 19.0545C5.75584 19.1476 5.83065 19.2259 5.92131 19.282C6.01197 19.338 6.11546 19.37 6.22195 19.3748C6.32843 19.3795 6.43437 19.357 6.52969 19.3093L10 17.5781L13.4711 19.3132C13.5581 19.3549 13.6535 19.376 13.75 19.3749C13.9158 19.3749 14.0747 19.3091 14.1919 19.1919C14.3092 19.0747 14.375 18.9157 14.375 18.7499V12.7992C15.157 12.1551 15.7867 11.3459 16.2189 10.4297C16.6512 9.51352 16.8752 8.51298 16.875 7.49993ZM4.375 7.49993C4.375 6.38741 4.7049 5.29988 5.32298 4.37485C5.94107 3.44982 6.81957 2.72885 7.84741 2.30311C8.87524 1.87737 10.0062 1.76597 11.0974 1.98301C12.1885 2.20006 13.1908 2.73579 13.9775 3.52246C14.7641 4.30913 15.2999 5.31141 15.5169 6.40255C15.734 7.49369 15.6226 8.62469 15.1968 9.65253C14.7711 10.6804 14.0501 11.5589 13.1251 12.1769C12.2001 12.795 11.1125 13.1249 10 13.1249C8.50867 13.1233 7.07889 12.5301 6.02435 11.4756C4.96982 10.421 4.37666 8.99127 4.375 7.49993ZM5.625 7.49993C5.625 6.63464 5.88159 5.78878 6.36232 5.06931C6.84305 4.34985 7.52633 3.78909 8.32576 3.45796C9.12519 3.12683 10.0049 3.04019 10.8535 3.209C11.7022 3.37781 12.4817 3.79449 13.0936 4.40634C13.7054 5.01819 14.1221 5.79775 14.2909 6.64641C14.4597 7.49508 14.3731 8.37475 14.042 9.17417C13.7108 9.9736 13.1501 10.6569 12.4306 11.1376C11.7112 11.6183 10.8653 11.8749 10 11.8749C8.84006 11.8737 7.72798 11.4124 6.90778 10.5922C6.08758 9.77195 5.62624 8.65987 5.625 7.49993Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;321,139 Reviews</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12.8492 15.2835C12.9107 15.3778 12.9456 15.487 12.9502 15.5995C12.9548 15.712 12.9289 15.8236 12.8753 15.9226C12.8217 16.0216 12.7423 16.1043 12.6456 16.1619C12.5489 16.2195 12.4384 16.2499 12.3258 16.2499H0.79924C0.686659 16.2499 0.576171 16.2195 0.479451 16.1619C0.382731 16.1043 0.303369 16.0216 0.249751 15.9226C0.196133 15.8236 0.17025 15.712 0.174835 15.5995C0.179421 15.487 0.214305 15.3778 0.275803 15.2835C1.15557 13.9293 2.44962 12.8959 3.96487 12.3374C3.12721 11.7798 2.49125 10.9674 2.15104 10.0203C1.81082 9.07325 1.78441 8.04185 2.07572 7.07862C2.36702 6.1154 2.96057 5.27149 3.76859 4.67169C4.57662 4.07189 5.55621 3.74805 6.56252 3.74805C7.56883 3.74805 8.54843 4.07189 9.35645 4.67169C10.1645 5.27149 10.758 6.1154 11.0493 7.07862C11.3406 8.04185 11.3142 9.07325 10.974 10.0203C10.6338 10.9674 9.99784 11.7798 9.16018 12.3374C10.6754 12.8959 11.9695 13.9293 12.8492 15.2835ZM19.7172 15.2718C18.8372 13.9233 17.546 12.8943 16.0352 12.3374C17.0241 11.6713 17.722 10.6534 17.9868 9.49084C18.2516 8.3283 18.0635 7.10853 17.4607 6.07981C16.8578 5.0511 15.8857 4.29076 14.742 3.95357C13.5984 3.61637 12.3692 3.72766 11.3047 4.26479C11.264 4.28581 11.2284 4.31552 11.2005 4.35182C11.1725 4.38811 11.1529 4.43011 11.143 4.47483C11.1331 4.51956 11.1331 4.56592 11.1431 4.61062C11.1531 4.65533 11.1728 4.69729 11.2008 4.73354C11.9923 5.72089 12.4469 6.93576 12.498 8.20019C12.549 9.46463 12.1938 10.7122 11.4844 11.7601C11.4385 11.8286 11.4216 11.9124 11.4373 11.9933C11.4529 12.0742 11.4999 12.1457 11.568 12.1921C12.4929 12.8377 13.2847 13.6554 13.9 14.6007C14.1482 14.9808 14.2495 15.4381 14.1852 15.8874C14.1779 15.9321 14.1805 15.9779 14.1927 16.0215C14.2048 16.0651 14.2263 16.1055 14.2557 16.14C14.285 16.1745 14.3215 16.2022 14.3626 16.2212C14.4038 16.2401 14.4485 16.25 14.4938 16.2499H19.2047C19.3423 16.25 19.4761 16.2046 19.5853 16.1208C19.6945 16.0371 19.773 15.9196 19.8086 15.7867C19.8303 15.6992 19.8334 15.6082 19.8177 15.5195C19.8019 15.4308 19.7677 15.3464 19.7172 15.2718Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;1,00,000 Students</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1223 7.84594 17.2654 5.78088 15.7423 4.25773C14.2191 2.73457 12.1541 1.87769 10 1.875ZM12.8469 10.5203L9.09688 13.0203C8.99403 13.0885 8.87339 13.1249 8.75 13.125C8.58424 13.125 8.42527 13.0592 8.30806 12.9419C8.19085 12.8247 8.125 12.6658 8.125 12.5V7.5C8.12493 7.38682 8.15559 7.27575 8.21371 7.17863C8.27183 7.08152 8.35523 7.00201 8.45501 6.94859C8.55479 6.89517 8.6672 6.86985 8.78025 6.87533C8.89329 6.8808 9.00273 6.91687 9.09688 6.97969L12.8469 9.47969C12.9326 9.53674 13.0029 9.61409 13.0515 9.70487C13.1002 9.79564 13.1256 9.89702 13.1256 10C13.1256 10.103 13.1002 10.2044 13.0515 10.2951C13.0029 10.3859 12.9326 10.4633 12.8469 10.5203Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;20+ Courses</li>
                            </ul> */}
                        </div>
                        <p className="web2course-courseContent-inst-desc">A college freshman at Drexel University, and a lifelong learner focusing on web3, artificial intelligence, and finance.
                        My role at VidyaVerse includes building products, managing teams, and talking to users every week!
                        </p>
                    </div><div className="web2course-courseContent-about-inst my-4 d-flex justify-content-center align-items-center p-3 ">
                        
                        <div className="web2course-courseContent-inst-img"><img src={Chirag} /></div>
                        <div className="web2course-courseContent-inst-detail">
                            <h2>Chirag Ravishankar</h2>
                            <p>Web3 Instructor</p>
                            {/* <ul>
                                <li> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3203 8.93603L14.7969 12.011L15.8524 16.5892C15.9082 16.8285 15.8923 17.079 15.8065 17.3093C15.7208 17.5396 15.5691 17.7396 15.3703 17.8841C15.1716 18.0287 14.9346 18.1114 14.6891 18.1221C14.4436 18.1327 14.2004 18.0707 13.9899 17.9438L9.99689 15.522L6.01252 17.9438C5.80202 18.0707 5.55881 18.1327 5.31328 18.1221C5.06775 18.1114 4.83079 18.0287 4.63204 17.8841C4.4333 17.7396 4.28157 17.5396 4.19584 17.3093C4.1101 17.079 4.09416 16.8285 4.15002 16.5892L5.20392 12.0157L1.6797 8.93603C1.49331 8.77526 1.35852 8.56304 1.29225 8.32598C1.22598 8.08892 1.23117 7.83757 1.30718 7.60345C1.38319 7.36933 1.52663 7.16287 1.71952 7.00994C1.9124 6.85702 2.14614 6.76445 2.39142 6.74384L7.03674 6.34149L8.85002 2.01649C8.94471 1.78955 9.10443 1.5957 9.30907 1.45935C9.51371 1.323 9.75411 1.25024 10 1.25024C10.2459 1.25024 10.4863 1.323 10.691 1.45935C10.8956 1.5957 11.0553 1.78955 11.15 2.01649L12.9688 6.34149L17.6125 6.74384C17.8578 6.76445 18.0915 6.85702 18.2844 7.00994C18.4773 7.16287 18.6207 7.36933 18.6968 7.60345C18.7728 7.83757 18.778 8.08892 18.7117 8.32598C18.6454 8.56304 18.5106 8.77526 18.3242 8.93603H18.3203Z" fill="#AD00FF" />
                                </svg> &nbsp;<span>4.5 Instructor rating</span></li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.875 7.49993C16.8757 6.34134 16.5836 5.20136 16.0258 4.18589C15.468 3.17041 14.6626 2.31237 13.6844 1.69147C12.7062 1.07057 11.587 0.706936 10.4307 0.634355C9.27438 0.561774 8.11847 0.782595 7.07034 1.27631C6.02221 1.77002 5.11584 2.52062 4.43544 3.45837C3.75503 4.39612 3.32265 5.49062 3.17846 6.64021C3.03426 7.78979 3.18293 8.95717 3.61065 10.0339C4.03837 11.1107 4.73128 12.0619 5.625 12.7992V18.7499C5.62492 18.8565 5.65211 18.9614 5.70397 19.0545C5.75584 19.1476 5.83065 19.2259 5.92131 19.282C6.01197 19.338 6.11546 19.37 6.22195 19.3748C6.32843 19.3795 6.43437 19.357 6.52969 19.3093L10 17.5781L13.4711 19.3132C13.5581 19.3549 13.6535 19.376 13.75 19.3749C13.9158 19.3749 14.0747 19.3091 14.1919 19.1919C14.3092 19.0747 14.375 18.9157 14.375 18.7499V12.7992C15.157 12.1551 15.7867 11.3459 16.2189 10.4297C16.6512 9.51352 16.8752 8.51298 16.875 7.49993ZM4.375 7.49993C4.375 6.38741 4.7049 5.29988 5.32298 4.37485C5.94107 3.44982 6.81957 2.72885 7.84741 2.30311C8.87524 1.87737 10.0062 1.76597 11.0974 1.98301C12.1885 2.20006 13.1908 2.73579 13.9775 3.52246C14.7641 4.30913 15.2999 5.31141 15.5169 6.40255C15.734 7.49369 15.6226 8.62469 15.1968 9.65253C14.7711 10.6804 14.0501 11.5589 13.1251 12.1769C12.2001 12.795 11.1125 13.1249 10 13.1249C8.50867 13.1233 7.07889 12.5301 6.02435 11.4756C4.96982 10.421 4.37666 8.99127 4.375 7.49993ZM5.625 7.49993C5.625 6.63464 5.88159 5.78878 6.36232 5.06931C6.84305 4.34985 7.52633 3.78909 8.32576 3.45796C9.12519 3.12683 10.0049 3.04019 10.8535 3.209C11.7022 3.37781 12.4817 3.79449 13.0936 4.40634C13.7054 5.01819 14.1221 5.79775 14.2909 6.64641C14.4597 7.49508 14.3731 8.37475 14.042 9.17417C13.7108 9.9736 13.1501 10.6569 12.4306 11.1376C11.7112 11.6183 10.8653 11.8749 10 11.8749C8.84006 11.8737 7.72798 11.4124 6.90778 10.5922C6.08758 9.77195 5.62624 8.65987 5.625 7.49993Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;321,139 Reviews</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12.8492 15.2835C12.9107 15.3778 12.9456 15.487 12.9502 15.5995C12.9548 15.712 12.9289 15.8236 12.8753 15.9226C12.8217 16.0216 12.7423 16.1043 12.6456 16.1619C12.5489 16.2195 12.4384 16.2499 12.3258 16.2499H0.79924C0.686659 16.2499 0.576171 16.2195 0.479451 16.1619C0.382731 16.1043 0.303369 16.0216 0.249751 15.9226C0.196133 15.8236 0.17025 15.712 0.174835 15.5995C0.179421 15.487 0.214305 15.3778 0.275803 15.2835C1.15557 13.9293 2.44962 12.8959 3.96487 12.3374C3.12721 11.7798 2.49125 10.9674 2.15104 10.0203C1.81082 9.07325 1.78441 8.04185 2.07572 7.07862C2.36702 6.1154 2.96057 5.27149 3.76859 4.67169C4.57662 4.07189 5.55621 3.74805 6.56252 3.74805C7.56883 3.74805 8.54843 4.07189 9.35645 4.67169C10.1645 5.27149 10.758 6.1154 11.0493 7.07862C11.3406 8.04185 11.3142 9.07325 10.974 10.0203C10.6338 10.9674 9.99784 11.7798 9.16018 12.3374C10.6754 12.8959 11.9695 13.9293 12.8492 15.2835ZM19.7172 15.2718C18.8372 13.9233 17.546 12.8943 16.0352 12.3374C17.0241 11.6713 17.722 10.6534 17.9868 9.49084C18.2516 8.3283 18.0635 7.10853 17.4607 6.07981C16.8578 5.0511 15.8857 4.29076 14.742 3.95357C13.5984 3.61637 12.3692 3.72766 11.3047 4.26479C11.264 4.28581 11.2284 4.31552 11.2005 4.35182C11.1725 4.38811 11.1529 4.43011 11.143 4.47483C11.1331 4.51956 11.1331 4.56592 11.1431 4.61062C11.1531 4.65533 11.1728 4.69729 11.2008 4.73354C11.9923 5.72089 12.4469 6.93576 12.498 8.20019C12.549 9.46463 12.1938 10.7122 11.4844 11.7601C11.4385 11.8286 11.4216 11.9124 11.4373 11.9933C11.4529 12.0742 11.4999 12.1457 11.568 12.1921C12.4929 12.8377 13.2847 13.6554 13.9 14.6007C14.1482 14.9808 14.2495 15.4381 14.1852 15.8874C14.1779 15.9321 14.1805 15.9779 14.1927 16.0215C14.2048 16.0651 14.2263 16.1055 14.2557 16.14C14.285 16.1745 14.3215 16.2022 14.3626 16.2212C14.4038 16.2401 14.4485 16.25 14.4938 16.2499H19.2047C19.3423 16.25 19.4761 16.2046 19.5853 16.1208C19.6945 16.0371 19.773 15.9196 19.8086 15.7867C19.8303 15.6992 19.8334 15.6082 19.8177 15.5195C19.8019 15.4308 19.7677 15.3464 19.7172 15.2718Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;1,00,000 Students</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1223 7.84594 17.2654 5.78088 15.7423 4.25773C14.2191 2.73457 12.1541 1.87769 10 1.875ZM12.8469 10.5203L9.09688 13.0203C8.99403 13.0885 8.87339 13.1249 8.75 13.125C8.58424 13.125 8.42527 13.0592 8.30806 12.9419C8.19085 12.8247 8.125 12.6658 8.125 12.5V7.5C8.12493 7.38682 8.15559 7.27575 8.21371 7.17863C8.27183 7.08152 8.35523 7.00201 8.45501 6.94859C8.55479 6.89517 8.6672 6.86985 8.78025 6.87533C8.89329 6.8808 9.00273 6.91687 9.09688 6.97969L12.8469 9.47969C12.9326 9.53674 13.0029 9.61409 13.0515 9.70487C13.1002 9.79564 13.1256 9.89702 13.1256 10C13.1256 10.103 13.1002 10.2044 13.0515 10.2951C13.0029 10.3859 12.9326 10.4633 12.8469 10.5203Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;20+ Courses</li>
                            </ul> */}
                        </div>
                        <p className="web2course-courseContent-inst-desc">Marketing and Community at Shardeum. A Layer 1 EVM based Blockchain. My role includes Building Organic Community for Shardeum Mainly in India and Vietnam along with other APAC countries like Japan,South Korea etc.</p>
                    </div><div className="web2course-courseContent-about-inst my-4 d-flex justify-content-center align-items-center p-3 ">
                        
                        <div className="web2course-courseContent-inst-img"><img src={Yashika} /></div>
                        <div className="web2course-courseContent-inst-detail">
                            <h2>Yashika Chugh</h2>
                            <p>Web3 Instructor</p>
                            {/* <ul>
                                <li> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3203 8.93603L14.7969 12.011L15.8524 16.5892C15.9082 16.8285 15.8923 17.079 15.8065 17.3093C15.7208 17.5396 15.5691 17.7396 15.3703 17.8841C15.1716 18.0287 14.9346 18.1114 14.6891 18.1221C14.4436 18.1327 14.2004 18.0707 13.9899 17.9438L9.99689 15.522L6.01252 17.9438C5.80202 18.0707 5.55881 18.1327 5.31328 18.1221C5.06775 18.1114 4.83079 18.0287 4.63204 17.8841C4.4333 17.7396 4.28157 17.5396 4.19584 17.3093C4.1101 17.079 4.09416 16.8285 4.15002 16.5892L5.20392 12.0157L1.6797 8.93603C1.49331 8.77526 1.35852 8.56304 1.29225 8.32598C1.22598 8.08892 1.23117 7.83757 1.30718 7.60345C1.38319 7.36933 1.52663 7.16287 1.71952 7.00994C1.9124 6.85702 2.14614 6.76445 2.39142 6.74384L7.03674 6.34149L8.85002 2.01649C8.94471 1.78955 9.10443 1.5957 9.30907 1.45935C9.51371 1.323 9.75411 1.25024 10 1.25024C10.2459 1.25024 10.4863 1.323 10.691 1.45935C10.8956 1.5957 11.0553 1.78955 11.15 2.01649L12.9688 6.34149L17.6125 6.74384C17.8578 6.76445 18.0915 6.85702 18.2844 7.00994C18.4773 7.16287 18.6207 7.36933 18.6968 7.60345C18.7728 7.83757 18.778 8.08892 18.7117 8.32598C18.6454 8.56304 18.5106 8.77526 18.3242 8.93603H18.3203Z" fill="#AD00FF" />
                                </svg> &nbsp;<span>4.5 Instructor rating</span></li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.875 7.49993C16.8757 6.34134 16.5836 5.20136 16.0258 4.18589C15.468 3.17041 14.6626 2.31237 13.6844 1.69147C12.7062 1.07057 11.587 0.706936 10.4307 0.634355C9.27438 0.561774 8.11847 0.782595 7.07034 1.27631C6.02221 1.77002 5.11584 2.52062 4.43544 3.45837C3.75503 4.39612 3.32265 5.49062 3.17846 6.64021C3.03426 7.78979 3.18293 8.95717 3.61065 10.0339C4.03837 11.1107 4.73128 12.0619 5.625 12.7992V18.7499C5.62492 18.8565 5.65211 18.9614 5.70397 19.0545C5.75584 19.1476 5.83065 19.2259 5.92131 19.282C6.01197 19.338 6.11546 19.37 6.22195 19.3748C6.32843 19.3795 6.43437 19.357 6.52969 19.3093L10 17.5781L13.4711 19.3132C13.5581 19.3549 13.6535 19.376 13.75 19.3749C13.9158 19.3749 14.0747 19.3091 14.1919 19.1919C14.3092 19.0747 14.375 18.9157 14.375 18.7499V12.7992C15.157 12.1551 15.7867 11.3459 16.2189 10.4297C16.6512 9.51352 16.8752 8.51298 16.875 7.49993ZM4.375 7.49993C4.375 6.38741 4.7049 5.29988 5.32298 4.37485C5.94107 3.44982 6.81957 2.72885 7.84741 2.30311C8.87524 1.87737 10.0062 1.76597 11.0974 1.98301C12.1885 2.20006 13.1908 2.73579 13.9775 3.52246C14.7641 4.30913 15.2999 5.31141 15.5169 6.40255C15.734 7.49369 15.6226 8.62469 15.1968 9.65253C14.7711 10.6804 14.0501 11.5589 13.1251 12.1769C12.2001 12.795 11.1125 13.1249 10 13.1249C8.50867 13.1233 7.07889 12.5301 6.02435 11.4756C4.96982 10.421 4.37666 8.99127 4.375 7.49993ZM5.625 7.49993C5.625 6.63464 5.88159 5.78878 6.36232 5.06931C6.84305 4.34985 7.52633 3.78909 8.32576 3.45796C9.12519 3.12683 10.0049 3.04019 10.8535 3.209C11.7022 3.37781 12.4817 3.79449 13.0936 4.40634C13.7054 5.01819 14.1221 5.79775 14.2909 6.64641C14.4597 7.49508 14.3731 8.37475 14.042 9.17417C13.7108 9.9736 13.1501 10.6569 12.4306 11.1376C11.7112 11.6183 10.8653 11.8749 10 11.8749C8.84006 11.8737 7.72798 11.4124 6.90778 10.5922C6.08758 9.77195 5.62624 8.65987 5.625 7.49993Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;321,139 Reviews</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M12.8492 15.2835C12.9107 15.3778 12.9456 15.487 12.9502 15.5995C12.9548 15.712 12.9289 15.8236 12.8753 15.9226C12.8217 16.0216 12.7423 16.1043 12.6456 16.1619C12.5489 16.2195 12.4384 16.2499 12.3258 16.2499H0.79924C0.686659 16.2499 0.576171 16.2195 0.479451 16.1619C0.382731 16.1043 0.303369 16.0216 0.249751 15.9226C0.196133 15.8236 0.17025 15.712 0.174835 15.5995C0.179421 15.487 0.214305 15.3778 0.275803 15.2835C1.15557 13.9293 2.44962 12.8959 3.96487 12.3374C3.12721 11.7798 2.49125 10.9674 2.15104 10.0203C1.81082 9.07325 1.78441 8.04185 2.07572 7.07862C2.36702 6.1154 2.96057 5.27149 3.76859 4.67169C4.57662 4.07189 5.55621 3.74805 6.56252 3.74805C7.56883 3.74805 8.54843 4.07189 9.35645 4.67169C10.1645 5.27149 10.758 6.1154 11.0493 7.07862C11.3406 8.04185 11.3142 9.07325 10.974 10.0203C10.6338 10.9674 9.99784 11.7798 9.16018 12.3374C10.6754 12.8959 11.9695 13.9293 12.8492 15.2835ZM19.7172 15.2718C18.8372 13.9233 17.546 12.8943 16.0352 12.3374C17.0241 11.6713 17.722 10.6534 17.9868 9.49084C18.2516 8.3283 18.0635 7.10853 17.4607 6.07981C16.8578 5.0511 15.8857 4.29076 14.742 3.95357C13.5984 3.61637 12.3692 3.72766 11.3047 4.26479C11.264 4.28581 11.2284 4.31552 11.2005 4.35182C11.1725 4.38811 11.1529 4.43011 11.143 4.47483C11.1331 4.51956 11.1331 4.56592 11.1431 4.61062C11.1531 4.65533 11.1728 4.69729 11.2008 4.73354C11.9923 5.72089 12.4469 6.93576 12.498 8.20019C12.549 9.46463 12.1938 10.7122 11.4844 11.7601C11.4385 11.8286 11.4216 11.9124 11.4373 11.9933C11.4529 12.0742 11.4999 12.1457 11.568 12.1921C12.4929 12.8377 13.2847 13.6554 13.9 14.6007C14.1482 14.9808 14.2495 15.4381 14.1852 15.8874C14.1779 15.9321 14.1805 15.9779 14.1927 16.0215C14.2048 16.0651 14.2263 16.1055 14.2557 16.14C14.285 16.1745 14.3215 16.2022 14.3626 16.2212C14.4038 16.2401 14.4485 16.25 14.4938 16.2499H19.2047C19.3423 16.25 19.4761 16.2046 19.5853 16.1208C19.6945 16.0371 19.773 15.9196 19.8086 15.7867C19.8303 15.6992 19.8334 15.6082 19.8177 15.5195C19.8019 15.4308 19.7677 15.3464 19.7172 15.2718Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;1,00,000 Students</li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1223 7.84594 17.2654 5.78088 15.7423 4.25773C14.2191 2.73457 12.1541 1.87769 10 1.875ZM12.8469 10.5203L9.09688 13.0203C8.99403 13.0885 8.87339 13.1249 8.75 13.125C8.58424 13.125 8.42527 13.0592 8.30806 12.9419C8.19085 12.8247 8.125 12.6658 8.125 12.5V7.5C8.12493 7.38682 8.15559 7.27575 8.21371 7.17863C8.27183 7.08152 8.35523 7.00201 8.45501 6.94859C8.55479 6.89517 8.6672 6.86985 8.78025 6.87533C8.89329 6.8808 9.00273 6.91687 9.09688 6.97969L12.8469 9.47969C12.9326 9.53674 13.0029 9.61409 13.0515 9.70487C13.1002 9.79564 13.1256 9.89702 13.1256 10C13.1256 10.103 13.1002 10.2044 13.0515 10.2951C13.0029 10.3859 12.9326 10.4633 12.8469 10.5203Z" fill="#AD00FF" />
                                    </svg>
                                    &nbsp;&nbsp;20+ Courses</li>
                            </ul> */}
                        </div>
                        <p className="web2course-courseContent-inst-desc">Marketing and Community Building professional at a leading decentralised finance infrastructure firm. Driving brand impact and community engagement in the dynamic blockchain space.</p>
                    </div>
                    
                </div>

            </section>
            <Footer />
        </div>
    );
};

export default Web3course;
