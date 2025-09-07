import { forwardRef, useContext, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

import emailjs from "@emailjs/browser";

const Contacts = forwardRef((props, ref) => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;

    emailjs.init(publicKey)

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [contact, setContact] = useState('+91');

    const [successMsg, setSuccessMsg] = useState('');

    const [nameErr, setNameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [messageErr, setMessageErr] = useState('');
    const [contactErr, setContactErr] = useState('');

    const clearSuccessMsg = () => {
        setTimeout(() => {
            setSuccessMsg('')
        }, 18000);
    };

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    const validateName = (value) => {
        const pattern = /^[A-Za-z\s]+$/;
        return pattern.test(value);
    };

    const validateEmail = (value) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value);
    };

    const validateMessage = (message) => {
        if (!message.trim()) {
            return 'Your message field looks empty—share your thoughts!';
        }
        if (message.trim().length < 10) {
            return "Your message is too short—could you add more details?";
        }
        if (message.trim().length > 500) {
            return "Your message is too long—please keep it concise.";
        }
        return "";
    };

    const validateContact = (value) => {
        const numberPart = value.slice(3);
        const contactRegex = /^(?:\+91[6-9][0-9]{9}|[6-9][0-9]{9})$/;

        if (!value) {
            setContactErr("Please enter your contact number.");
        } else if (!contactRegex.test(value) && numberPart.length !== 10) {
            setContactErr("Please enter a valid 10-digit mobile number.");
        } else setContactErr("");
    };

    const inputChangeHandler = (inputName, inputValue) => {
        setSuccessMsg('')
        if (inputName === 'name') {
            setName(inputValue.trim());
            if (inputValue.length <= 0) {
                setNameErr('A name helps me address you better—please type yours.')
            } else {
                if (!validateName(inputValue)) {
                    setNameErr('Kindly enter a valid name using letters only.')
                } else setNameErr('')
            }
        }
        if (inputName === 'email') {
            setEmail(inputValue.trim());
            if (inputValue.length <= 0) {
                setEmailErr('I’ll need your email to reply—please enter it.')
            } else {
                if (!validateEmail(inputValue)) {
                    setEmailErr('Oops! The email format seems off—try again?')
                } else setEmailErr('')
            }
        }
        if (inputName === 'message') {
            setMessage(inputValue.trim());
            setMessageErr(validateMessage(inputValue))
        }
        if (inputName === 'contact') {
            setContact(inputValue.trim());
            if (inputValue.length <= 0) {
                setContactErr('I’ll need your contact to connect on whatsapp.')
            } else {
                validateContact(inputValue)
            }
        }
    }

    const contactFormHandler = () => {
        if (!name) {
            setNameErr('A name helps me address you better—please type yours.')
        } if (!email) {
            setEmailErr('I’ll need your email to reply—please enter it.')
        } if (!message) {
            setMessageErr('Your message field looks empty—share your thoughts!');
        } if (!contact || contact.length <= 3) {
            setContactErr('Provide your number so i can reach you on whatsApp too.');
        }

        if (!nameErr && !emailErr && !messageErr && !contactErr && name && email && message && contact) {

            setName('')
            setEmail('')
            setMessage('')
            setContact('')

            emailjs.sendForm(serviceId, templateId, form.current)
                .then(() => {
                    setSuccessMsg('Thank you! Your message has been sent successfully. I’ll get back to you soon.')
                }, (error) => {
                    setSuccessMsg(error.text);
                });
            clearSuccessMsg();
        } else setSuccessMsg('');
    }

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
            ref={ref}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <form ref={form}>
                            <div className='input-container'>
                                <label htmlFor='Name' className={classes.label}>
                                    Name
                                </label>
                                <input
                                    placeholder='What’s your good name?'
                                    value={name}
                                    onChange={(e) => inputChangeHandler('name', e.target.value)}
                                    type='text'
                                    name='name'
                                    className={`form-input ${classes.input}`}
                                />
                                {nameErr.length ? <p className='contact-error'>{nameErr}</p> : null}
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Email'
                                    className={classes.label}
                                >
                                    Email
                                </label>
                                <input
                                    placeholder='Type your email to get in touch'
                                    value={email}
                                    onChange={(e) => inputChangeHandler('email', e.target.value)}
                                    type='text'
                                    name='email'
                                    className={`form-input ${classes.input}`}
                                />
                                {emailErr.length ? <p className='contact-error'>{emailErr}</p> : null}
                            </div>
                            <div className='input-container'>
                                <label
                                    htmlFor='Message'
                                    className={classes.label}
                                >
                                    Message
                                </label>
                                <textarea
                                    placeholder='Tell me how I can help you.'
                                    value={message}
                                    onChange={(e) => inputChangeHandler('message', e.target.value)}
                                    type='text'
                                    name='message'
                                    className={`form-message ${classes.message}`}
                                />
                                {messageErr.length ? <p className='contact-error'>{messageErr}</p> : null}
                            </div>

                            <div className='input-container'>
                                <label
                                    htmlFor='Contact'
                                    className={classes.label}
                                >
                                    Contact
                                </label>
                                <input
                                    placeholder='Type your contact to get in touch'
                                    value={contact}
                                    onChange={(e) => inputChangeHandler('contact', e.target.value)}
                                    type='text'
                                    name='contact'
                                    className={`form-input ${classes.input}`}
                                />
                                {contactErr.length ? <p className='contact-error'>{contactErr}</p> : null}
                            </div>

                            <div className='submit-btn'>
                                <button
                                    type='button'
                                    className={classes.submitBtn}
                                    onClick={contactFormHandler}
                                >
                                    <p>{successMsg.length ? 'Sent' : 'Send'}</p>
                                    <div className='submit-icon'>
                                        <AiOutlineSend
                                            className='send-icon'
                                            style={{
                                                animation: successMsg.length
                                                    ? 'initial'
                                                    : 'fly 0.8s linear both',
                                                position: !successMsg.length
                                                    ? 'absolute'
                                                    : 'initial',
                                            }}
                                        />
                                        <AiOutlineCheckCircle
                                            className='success-icon'
                                            style={{
                                                display: successMsg.length
                                                    ? 'none'
                                                    : 'inline-flex',
                                                opacity: successMsg.length ? '0' : '1',
                                            }}
                                        />
                                    </div>
                                </button>

                                <p className='contact-success'>{successMsg.length ? successMsg : null}</p>
                            </div>
                        </form>
                        {/* <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar> */}
                    </div>

                    <div className='contacts-details'>
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a>
                        {/* <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div> */}

                        <div className='socialmedia-icons'>
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaTwitter aria-label='Twitter' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a
                                    href={socialsData.blogger}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaBloggerB aria-label='Blogger' />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaYoutube aria-label='YouTube' />
                                </a>
                            )}
                            {socialsData.reddit && (
                                <a
                                    href={socialsData.reddit}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaRedditAlien aria-label='Reddit' />
                                </a>
                            )}
                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.codepen && (
                                <a
                                    href={socialsData.codepen}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaCodepen aria-label='CodePen' />
                                </a>
                            )}
                            {socialsData.gitlab && (
                                <a
                                    href={socialsData.gitlab}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGitlab aria-label='GitLab' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
});

export default Contacts;
