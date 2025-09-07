import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import './Self.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { selfData } from '../../data/selfData'
import SingleSelf from './SingleSelf/SingleSelf';

function Self() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.tertiary,
            backgroundColor: theme.primary,
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.primary,
            }
        },
        viewArr: {
            color: theme.tertiary,
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.tertiary,
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {selfData.length > 0 && (
                <div className="self" id="self" style={{ backgroundColor: theme.secondary }}>
                    <div className="self--header">
                        <h1 style={{ color: theme.primary }}>Self</h1>
                    </div>
                    <div className="self--body">
                        <div className="self--bodyContainer">
                            {selfData.sort(() => 0.5 - Math.random()).slice(0, 3).map(self => (
                                <SingleSelf
                                    theme={theme}
                                    title={self.title}
                                    desc={self.description}
                                    date={self.date}
                                    image={self.image}
                                    url={self.url}
                                    key={self.id}
                                    id={self.id}
                                />
                            ))}
                        </div>

                        {selfData.length > 3 && (
                            <div className="self--viewAll">
                                <Link to="/self">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Self
