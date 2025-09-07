import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png'
import './SingleSelf.css'

function SingleSelf({ theme, title, desc, date, image, url, id }) {
    return (
        <Fade bottom>
            <a className="singleSelf" key={id} href={url} target="_blank" rel="noreferrer" style={{ backgroundColor: theme.primary400 }}>
                <div className="singleSelf--image" style={{ backgroundColor: theme.secondary }}>
                    <img src={image ? image : placeholder} alt={title} />
                </div>
                <div className="singleSelf--body">
                    <p style={{ color: theme.tertiary }}>{date}</p>
                    <h3 style={{ color: theme.secondary }}>{title}</h3>
                </div>
            </a>
        </Fade>
    )
}

export default SingleSelf
