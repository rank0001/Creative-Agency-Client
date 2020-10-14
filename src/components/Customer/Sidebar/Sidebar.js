import React from 'react';
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from '../../../logos/logo.png';

import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));


export default function Sidebar() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
       <img src={logo} alt="" style={{width:'150px',height:'47px'}}/>
       <br/>
					<Link
						component="button"
						variant="body2"
						className="link"
                        onClick={()=>history.push("/customer/order")}
					>
						Order
					</Link>
					<br />
					<Link
						component="button"
						variant="body2"
						 onClick={()=>history.push("/customer/service")}
						className="link"
					>
						Service List
					</Link>
                    <br/>
                    <Link
						component="button"
						variant="body2"
						 onClick={()=>history.push("/customer/review")}
						className="link"
					>
						Review
					</Link>
				
        </div>
    )
}
