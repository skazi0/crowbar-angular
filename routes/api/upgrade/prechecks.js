var express = require('express'),
    router = express.Router();

var errors = {
        error_code1: { data: 'error1 data', help: 'error1 help' },
        error_code2: { data: 'error2 data', help: 'error2 help' },
    },
    checksPass = false,
    bestMethod = false;

/* GET users listing. */
router.get('/', function(req, res) {
    if('fail' in req.query && JSON.parse(req.query.fail) === true) {
        res.status(500).json({'errors': errors});
    } else {
        // fail some checks first, then succeed on second call
        res.status(200).json({
            'checks': {
                'maintenance_updates_installed': { required: true, passed: true },
                'network_checks': { required: true, passed: checksPass, errors: checksPass ? {} : errors },
                'cloud_healthy': { required: true, passed: checksPass, errors: checksPass ? {} : errors },
                'clusters_healthy': { required: false, passed: true },
                'ceph_healthy': { required: false, passed: checksPass, errors: checksPass ? {} : errors },
                'compute_status': { required: true, passed: true }
            },
            'best_method': bestMethod ? 'non-disruptive' : 'disruptive'
        });
    }
    checksPass = true;
    bestMethod = !bestMethod;
});

module.exports = router;
