import server from '../server/server'
import chai from 'chai'
import chaiHttp from 'chai-http'

// Assertion
chai.should();
chai.use(chaiHttp);

describe('regions API', () => {
    // get all regions
    describe('Test GET route /api/regions', () => {
        it('it should return all regions', (done) => {
            chai.request(server)
                .get('/api/regions')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.not.be.eq(0);
                    done();
                })
        });
    });
});