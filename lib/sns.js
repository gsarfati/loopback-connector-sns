var AWS = require('aws-sdk');
var assert = require('assert');
var loopback = require('../../loopback');

var sns;

/**
 * Export the SnsConnector class.
 */

module.exports = SnsConnector;
/**
 * Create an instance of the connector with the given `settings`.
 */

function SnsConnector(settings) {

    assert(typeof settings === 'object', 'cannot initialize SnsConnector without a settings object');
    var connector = this;

    var accessKeyId = this.accessKeyId = settings.accessKeyId;
    var secretAccessKey = this.secretAccessKey = settings.secretAccessKey;
    var region = this.region = settings.region;
    var platformApplicationArn = this.platformApplicationArn = settings.platformApplicationArn
    
    AWS.config.update({
        'accessKeyId': accessKeyId,
        'secretAccessKey': secretAccessKey,
        'region': region
    })
    sns = connector.sns = new AWS.SNS()
}

SnsConnector.initialize = function (dataSource, callback) {
    dataSource.connector = new SnsConnector(dataSource.settings);
    callback();
}
SnsConnector.prototype = sns
SnsConnector.prototype.DataAccessObject = Sns;


function Sns() {

}

/**
 * Create a Sns Arn Device Endpoint
 */

Sns.createEndpoint = function (options, fn) {
    var dataSource = this.dataSource;
    var settings = dataSource && dataSource.settings;
    var connector = dataSource.connector;
    assert(connector, 'Cannot use this module without a connector!');

    sns.createPlatformEndpoint({
        'PlatformApplicationArn': settings.platformApplicationArn,
        'Token': options.token
    }, function (err, data) {
        fn(err, data);
    });
}

/**
 * Initialize the connector for the given data source
 * @param {DataSource} dataSource The data source instance
 * @param {Function} [callback] The callback function
 */
exports.initialize = function (dataSource, callback) {
    console.log("Hi");
};

/**
 * Send using `modelInstance.send()`.
 */
Sns.prototype = sns
Sns.prototype.createEndpoint = function (fn) {
    this.constructor.createEndpoint(this, fn);
}




