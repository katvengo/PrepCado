var dynamodb = new AWS.DynamoDB();

var docClient = new AWS.DynamoDB.DocumentClient();

function createItem() {
    var params = {
        TableName :"Movies",
        Item:{
            "year": 2015,
            "title": "The Big New Movie",
            "info":{
                "plot": "Nothing happens at all.",
                "rating": 0
            }
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });
}