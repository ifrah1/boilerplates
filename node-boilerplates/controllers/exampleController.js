import db from "../Models/index.js";

const exampleIndex = async (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            example: 'This is example data',
            requestedAt: new Date().toLocaleString(),
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error,
            requestedAt: new Date().toLocaleString(),
        });

    }
}


/* example call to create a object in DB */
const createExample = async (req, res) => {
    try {
        const { firstName, email, age, password } = req.body;

        // check of the user exists in DB already by email
        const foundUser = await db.ExampleModel.findOne({ email });

        if (foundUser) {
            return res.status(400).json({
                status: 400,
                message: 'User exists already'
            });
        }

        //create the new user in db
        const newUser = {
            firstName,
            email,
            age,
            password, //make sure to salt and encrypt password, NEVER STORE CLEAR TEXT PASSWORD
        }
        await db.ExampleModel.create(newUser);

        res.status(201).json({
            status: 201,
            example: 'User was created successfully',
            requestedAt: new Date().toLocaleString(),
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            error,
            requestedAt: new Date().toLocaleString(),
        });

    }
}

const exampleCtrl = {
    exampleIndex,
    createExample
};

export default exampleCtrl;