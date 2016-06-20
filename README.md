## loopback-connector-sns

[LoopBack](http://www.loopback.io) connector for [AWS SNS](https://aws.amazon.com/fr/sns/)

### Installation

In your LoopBack project:
    
    $ npm install loopback-connector-sns

## Using the Connector
To use the connector, define the datasource using the connector in your `datasources.json` file:
    
    "sns": {
        "name": "sns",
        "connector": "loopback-connector-sns",
        "accessKeyId": "YOUR_ACCESS_KEY_ID",
        "secretAccessKey": "YOUR_SECRET_ACCESS_KEY",
        "region": "YOUR_REGION",
        "platformApplicationArn": {
            "iOs": "YOUR_PLATFORM_APPLICATION_ARN",
            "Android": "YOUR_PLATFORM_APPLICATION_ARN",
            "xxx": "xxxxx"
        }
    }
  
Next, attach the created datasource to a model in the `model-config.json` file:

    "Sns": {
        "dataSource": "sns",
        "public": false
    }
    
Now, using the created model, you can create arn endpoint, create topic , subscribe to it and many more see the [Official Documentation](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html) for more details.

### Version
0.0.8

License
----

MIT