var NetcatClient = require('node-netcat').client;
var client = NetcatClient(30003, 'dump1090host');

var kafka = require('kafka-node');
const kafkaclient = new kafka.KafkaClient({kafkaHost: 'kafkahost:9092'});
var Producer = kafka.Producer,
    producer = new Producer(kafkaclient);

producer.on('ready', function () {

  client.on('open', function () {
    console.log('connected');
  });

  client.on('data', function (data) {
    var br = data.toString().replace(/[\r\n]/g, '').split(',');
    var i = 0;
    producer.send([{
      topic: "BaseStation",
      messages: JSON.stringify({
        MSG: br[i++],
        MSG_TYPE: br[i++],
        C1: br[i++],
        C2: br[i++],
        C3: br[i++],
        C4: br[i++],
        C5: br[i++],
        C6: br[i++],
        C7: br[i++],
        C8: br[i++],
        C9: br[i++],
        C10: br[i++],
        C11: br[i++],
        C12: br[i++],
        C13: br[i++],
        C14: br[i++],
        C15: br[i++],
        C16: br[i++],
        C17: br[i++],
        C18: br[i++],
        C19: br[i++],
        C20: (br[i++])
      })
    }], function (err, data) {
        console.log(data);
    });
    console.log(br);
  });

  client.on('error', function (err) {
    console.log(err);
  });

  client.on('close', function () {
    console.log('close');
  });

  client.start();

});