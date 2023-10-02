const base = require('./base');

const user_locations_GET = async (token) => base.request
    .get('/api/v1/location')
    .set('content-type', 'application/json')
    .auth(token, {type: 'bearer'})
    .then((res) => {
        if (res.body.data && res.body.data.error) {
            throw Error(JSON.stringify(res.body.data.error.details));
        }
        // console.log(JSON.stringify(res.body.id));
        res.should.have.status(200);


        let locationIDs = [];
        let json = res.body;
        for(let i = 0; i < json.length; i++) {
            locationIDs.push(json[i].id);
        }
        return locationIDs;
    });

const user_address_DELETE = async (token, locationIDs) => {
    for(let i in locationIDs) {
        console.log(locationIDs[i]);
        const res = await base.request
            .delete(`/api/v1/location/${locationIDs[i]}`)
            .auth(token, {type: 'bearer'})
            .set('content-type', 'application/json')
            .send({
                "id": locationIDs[i],
            });
        res.should.have.status(200);
    }
}


module.exports ={
    user_locations_GET,
    user_address_DELETE
}