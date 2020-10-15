import React from "react";
import Button from "@material-ui/core/Button";
import { userInfo } from "../../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "../../configs/FirebaseConfig";
import { Typography, Paper, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import googleLogo from "../../logos/google1.png";
import logo from "../../logos/logo.png";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: "auto",
			width: "570px",
			height: "457px",
			background: "whitesmoke",
		},
	},
	btn: {
		width: "461px",
		[theme.breakpoints.down("sm")]: {
			width: "321px",
			marginRight: "40px",
		},
	},
	text: {
		[theme.breakpoints.down("sm")]: {
			//width:'321px',
			marginRight: "80px",
		},
	},
}));

const Login = (props) => {
	//console.log(props.user);
	const [admin, setAdmin] = React.useState([]);

	React.useEffect(() => {
		fetch("http://localhost:5000/admin")
			.then((response) => response.json())
			.then((data) => {
				//console.log(data);
				setAdmin(data);
			});
	}, []);

	const classes = useStyles();
	const [errorMessage, setMessage] = React.useState({
		error: "",
	});
	let data = null;
	if (props.location.state) {
		data = props.location.state.data;
		console.log(data);
	}

	const history = useHistory();
	const provider = new firebase.auth.GoogleAuthProvider();
	const handleSignInWithGoogle = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result, result.user.photoURL);
				const { displayName } = result.user;
				const { photoURL } = result.user;
				const signedInUser = {
					user: {
						isSignedIn: true,
						name: displayName,
						email: result.user.email,
						photo: photoURL,
					},
				};
				props.userInfo(signedInUser);
				const location = {
					pathname: "/customer/order",
					state: { data },
				};

				let obj = admin.some((admin) => {
					//console.log(admin.email,result.user.email)
					return admin.email == result.user.email;
				});
				//console.log(obj);
				if (obj) history.push("/admin/service");
				else if (props.location.state) history.push(location);
				else history.push("/customer/order");
			})
			.catch(function (err) {
				const error = err.message;
				const newUserInfo = { ...errorMessage };
				newUserInfo.errorMessage = error;
				setMessage(newUserInfo);
			});
	};

	return (
		<div>
			<img
				src={logo}
				alt=""
				style={{
					margin: "auto",
					display: "block",
					maxWidth: "100%",
					maxHeight: "100%",
					height: "80px",
					marginTop: "40px",
				}}
			/>

			<div
				style={{ textAlign: "center", marginTop: "40px" }}
				className={classes.root}
			>
				<Paper variant="outlined">
					<Typography variant="h5" style={{ marginTop: "150px" }}>
						Login
					</Typography>

					<Button
						style={{
							background: "#FFFFFF",
							border: "1px solid #C7C7C7",
							boxSizing: "border-box",
							borderRadius: "57px",
							marginTop: "10px",

							height: "58.93px",
						}}
						className={classes.btn}
						startIcon={
							<img
								src={googleLogo}
								alt=""
								style={{ width: "31.27px", height: "36.67px" }}
							></img>
						}
						variant="contained"
						color="black"
						onClick={handleSignInWithGoogle}
					>
						Continue With Google
					</Button>
					<Typography
						className={classes.text}
						variant="h6"
						align="center"
						style={{ marginTop: "20px" }}
					>
						Don't have an account?
						<Link
							onClick={handleSignInWithGoogle}
							style={{ cursor: "pointer", color: "blue" }}
						>
							Create an Account
						</Link>
					</Typography>
					<Typography variant="h6" style={{ marginTop: "100px" }}>
						{errorMessage.error}
					</Typography>
				</Paper>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};
export default connect(mapStateToProps, { userInfo })(Login);
