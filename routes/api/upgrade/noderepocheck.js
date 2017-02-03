var express = require('express'),
    router = express.Router();

/* GET Nodes Repo Checks. */
router.get('/', function(req, res) {
    res.status(200).json({
        'ceph': {
            'available': true,
            'repos': [
                'SUSE-Enterprise-Storage-4-Pool',
                'SUSE-Enterprise-Storage-4-Updates'
            ],
            'errors': {}
        },
        'ha': {
            'available': true,
            'repos': [
                'SLE12-SP2-HA-Pool',
                'SLE12-SP2-HA-Updates'
            ],
            'errors': {}
        },
        'os': {
            'available': true,
            'repos': [
                'SLES12-SP2-Pool',
                'SLES12-SP2-Updates'
            ],
            'errors': {}
        },
        'openstack': {
            'available': true,
            'repos': [
                'SUSE-OpenStack-Cloud-7-Pool',
                'SUSE-OpenStack-Cloud-7-Updates'
            ],
            'errors': {}
        }
    });
});

module.exports = router;
