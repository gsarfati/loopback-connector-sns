var AWS = require('aws-sdk');
var assert = require('assert');

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
    Sns.prototype = sns = connector.sns = new AWS.SNS()
}

SnsConnector.initialize = function (dataSource, callback) {
    dataSource.connector = new SnsConnector(dataSource.settings);
    callback();
}
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
        'PlatformApplicationArn': settings.platformApplicationArn[options.platform],
        'Token': options.token
    }, function (err, data) {
        fn(err, data);
    });
}

Sns.addPermission = function (params, fn) {sns.addPermission(params, fn)}
Sns.confirmSubscription = function (params, fn) {sns.confirmSubscription(params, fn)}
Sns.createPlatformApplication = function (params, fn) {sns.createPlatformApplication(params, fn)}
Sns.createPlatformEndpoint = function (params, fn) {sns.createPlatformEndpoint(params, fn)}
Sns.createTopic = function (params, fn) {sns.createTopic(params, fn)}
Sns.deleteEndpoint = function (params, fn) {sns.deleteEndpoint(params, fn)}
Sns.deletePlatformApplication = function (params, fn) {sns.deletePlatformApplication(params, fn)}
Sns.deleteTopic = function (params, fn) {sns.deleteTopic(params, fn)}
Sns.getEndpointAttributes = function (params, fn) {sns.getEndpointAttributes(params, fn)}
Sns.getPlatformApplicationAttributes = function (params, fn) {sns.getPlatformApplicationAttributes(params, fn)}
Sns.getSubscriptionAttributes = function (params, fn) {sns.getSubscriptionAttributes(params, fn)}
Sns.getTopicAttributes = function (params, fn) {sns.getTopicAttributes(params, fn)}
Sns.listEndpointsByPlatformApplication = function (params, fn) {sns.listEndpointsByPlatformApplication(params, fn)}
Sns.listPlatformApplications = function (params, fn) {sns.listPlatformApplications(params, fn)}
Sns.listSubscriptions = function (params, fn) {sns.listSubscriptions(params, fn)}
Sns.listSubscriptionsByTopic = function (params, fn) {sns.listSubscriptionsByTopic(params, fn)}
Sns.listTopics = function (params, fn) {sns.listTopics(params, fn)}
Sns.publish = function (params, fn) {sns.publish(params, fn)}
Sns.removePermission = function (params, fn) {sns.removePermission(params, fn)}
Sns.setEndpointAttributes = function (params, fn) {sns.setEndpointAttributes(params, fn)}
Sns.setPlatformApplicationAttributes = function (params, fn) {sns.setPlatformApplicationAttributes(params, fn)}
Sns.setSubscriptionAttributes = function (params, fn) {sns.setSubscriptionAttributes(params, fn)}
Sns.setTopicAttributes = function (params, fn) {sns.setTopicAttributes(params, fn)}
Sns.subscribe = function (params, fn) {sns.subscribe(params, fn)}
Sns.unsubscribe = function (params, fn) {sns.unsubscribe(params, fn)}

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

Sns.prototype.createEndpoint = function (fn) {this.constructor.createEndpoint(this, fn);}

Sns.prototype.addPermission = function (fn) { this.constructor.addPermission(this, fn);}
Sns.prototype.confirmSubscription = function (fn) { this.constructor.confirmSubscription(this, fn);}
Sns.prototype.createPlatformApplication = function (fn) { this.constructor.createPlatformApplication(this, fn);}
Sns.prototype.createPlatformEndpoint = function (fn) { this.constructor.createPlatformEndpoint(this, fn);}
Sns.prototype.createTopic = function (fn) { this.constructor.createTopic(this, fn);}
Sns.prototype.deleteEndpoint = function (fn) { this.constructor.deleteEndpoint(this, fn);}
Sns.prototype.deletePlatformApplication = function (fn) { this.constructor.deletePlatformApplication(this, fn);}
Sns.prototype.deleteTopic = function (fn) { this.constructor.deleteTopic(this, fn);}
Sns.prototype.getEndpointAttributes = function (fn) { this.constructor.getEndpointAttributes(this, fn);}
Sns.prototype.getPlatformApplicationAttributes = function (fn) { this.constructor.getPlatformApplicationAttributes(this, fn);}
Sns.prototype.getSubscriptionAttributes = function (fn) { this.constructor.getSubscriptionAttributes(this, fn);}
Sns.prototype.getTopicAttributes = function (fn) { this.constructor.getTopicAttributes(this, fn);}
Sns.prototype.listEndpointsByPlatformApplication = function (fn) { this.constructor.listEndpointsByPlatformApplication(this, fn);}
Sns.prototype.listPlatformApplications = function (fn) { this.constructor.listPlatformApplications(this, fn);}
Sns.prototype.listSubscriptions = function (fn) { this.constructor.listSubscriptions(this, fn);}
Sns.prototype.listSubscriptionsByTopic = function (fn) { this.constructor.listSubscriptionsByTopic(this, fn);}
Sns.prototype.listTopics = function (fn) { this.constructor.listTopics(this, fn);}
Sns.prototype.publish = function (fn) { this.constructor.publish(this, fn);}
Sns.prototype.removePermission = function (fn) { this.constructor.removePermission(this, fn);}
Sns.prototype.setEndpointAttributes = function (fn) { this.constructor.setEndpointAttributes(this, fn);}
Sns.prototype.setPlatformApplicationAttributes = function (fn) { this.constructor.setPlatformApplicationAttributes(this, fn);}
Sns.prototype.setSubscriptionAttributes = function (fn) { this.constructor.setSubscriptionAttributes(this, fn);}
Sns.prototype.setTopicAttributes = function (fn) { this.constructor.setTopicAttributes(this, fn);}
Sns.prototype.subscribe = function (fn) { this.constructor.subscribe(this, fn);}
Sns.prototype.unsubscribe = function (fn) { this.constructor.unsubscribe(this, fn);}
