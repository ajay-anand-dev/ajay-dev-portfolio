import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

import './SelfPage.css'
import { SingleSelf } from '../../components'
import { ThemeContext } from '../../contexts/ThemeContext';
import { selfData } from '../../data/selfData'
import { headerData } from '../../data/headerData'

function SelfPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = selfData.filter((self) => {
        const content = self.title + self.description + self.date
        return content.toLowerCase().includes(search.toLowerCase())
    })

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            "&::placeholder": {
                color: theme.tertiary80,
            },
            [t.breakpoints.down('sm')]: {
                width: '350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            "&:hover":
            {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="selfPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Self</title>
            </Helmet>
            <div className="selfPage--header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Selfs</h1>
            </div>
            <div className="selfPage--container">
                <div className="self--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach self..." className={classes.search} />
                </div>
                <div className="selfs--container">
                    <Grid className="self-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.map(self => (
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
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default SelfPage
