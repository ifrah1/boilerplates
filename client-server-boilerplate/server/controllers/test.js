const testGetData = async (req, res) => {
    try {
        // const someData = {
        //     firstName: 'John',
        //     lastName: 'Doe',
        //     age: 69,
        //     weight: 200
        // };

        // res.status(200).json({
        //     status: 200,
        //     // someData,
        //     requestedAt: new Date().stoLocaleString(),
        // });

        res.status(200).json({
            status: 200,
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

const testCtrl = {
    testGetData
};


export default testCtrl; 