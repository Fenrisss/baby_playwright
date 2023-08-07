const base = require('./base');

const user_locations_GET = async (token) => base.request
    .get('/api/v1/location')
    .set('content-type', 'application/json')
    .auth(token, {type: 'bearer'})
    .then((res) => {
        if (res.body.data && res.body.data.error) {
            throw Error(JSON.stringify(res.body.data.error.details));
        }
        console.log(token)
        console.log(res.body)
        res.should.have.status(200);


        // let locationIDs = [];
        // let json = res.body;
        // for(let i = 0; i < json.length; i++) {
        //     locationIDs.push(json[i].id);
        // }
        // return locationIDs;
    });

module.exports ={
    user_locations_GET
}