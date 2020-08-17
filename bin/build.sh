#!/bin/sh
env="$1"

find_port() {
  ID=$(\
    docker container ls --format="{{.ID}}\t{{.Ports}}" |\
    grep $1 |\
    awk '{print $1}')
}

if [ ${env} == "staging" ];then
  find_port 1337
fi

if [ ${env} == "uat" ];then
  find_port 1338
fi

if [ ${env} == "production" ];then
  find_port 1339
fi

if [[ ! -z ${ID} ]];then
  echo "Stopping and removing it"
  docker container stop ${ID} && docker container rm ${ID}
fi

