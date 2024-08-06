import User from '../modal/user-modal.js'


export const SignUp = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            return response.status(400).json({ msg: 'All fields are required' });
        }

        const newUser = await new User({
            name,
            email,
            password,
            user_photo: req.file.filename, // Assuming this is the field to store the filename
        });

        // const user = await new User(req.body);
        newUser.save();
        res.status(200).json({ msg: 'Sign Up successfully' });
    } catch (error) {
        res.status(500).json(error);
    }
}


export const GetUsers = async (req, res) => {
    let users;
    try {
        users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const Login = async (request, response) => {

    let user = await User.findOne({ email: request.body.email })


    if (!user) {
        return response.status(400).json({ msg: 'user not found' })
    }
    try {
        // let match = await bcrypt.compare(request.body.password, user.password)
        let match = request.body.password == user.password
        if (match == true) {
            // const accessToken = jwt.sign(user.toJSON(), ACCESS_SECRET_KEY, { expiresIn: '15m' })
            // const refreshToken = jwt.sign(user.toJSON(), REFRESH_SECERT_KEY)
            // const newToken = new Token({ token: refreshToken })
            // await newToken.save();
            return response.status(200).json(
                {
                    // accessToken: accessToken,
                    // refreshToken: refreshToken,
                    msg: 'Login Successfull',
                    userData: user
                }
            )
        } else {
            return response.status(400).json({
                msg: 'Password not matched'
            })
        }
    } catch (error) {
        return response.status(500).json({
            msg: 'Error while login'
        })
    }
}