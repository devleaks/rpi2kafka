sudo yum group install "Development Tools"
# git clone https://github.com/edenhill/librdkafka.git
# ( cd librdkafka ; ./configure ; make ; sudo make install )
# export LD_LIBRARY_PATH=/usr/local/lib
# git clone https://github.com/edenhill/kafkacat.git
# ( cd librdkafka ; ./configure ; make ; sudo make install )
export PATH=$PATH:/home/osacs/runtime/kafka/bin
kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 -partitions 1 --topic BaseStation
kafka-topics.sh --list --zookeeper localhost:2181
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs

