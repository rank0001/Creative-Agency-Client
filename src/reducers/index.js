const userState = {
	user: {
		isSignedIn: false,
		name:'',
		email:'',
        photo:''
	},
};

const user = (state = userState, action) => {
	switch (action.type) {
		case "FETCH_USER":
			return action.payload;
		default:
			return state;
	}
};

export default user;

