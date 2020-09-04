#!/bin/sh
read_var() {
     VAR=$(grep -w $1 $2 | xargs)
     IFS="=" read -ra VAR <<< "$VAR"
     echo ${VAR[1]}
}

if [ ${NODE_ENV} == "development" ];then
     REACT_APP_API=$(read_var REACT_APP_STAGING_API .env)
     REACT_APP_SEGMENT_KEY=$(read_var REACT_APP_STAGING_SEGMENT_KEY .env)
     REACT_APP_YODLEE_FASTLINK=$(read_var REACT_APP_YODLEE_FASTLINK_SANDBOX .env)
     REACT_APP_YODLEE_API=$(read_var REACT_APP_YODLEE_SANDBOX_API .env)
fi

if [ ${NODE_ENV} == "uat" ];then
     branch_name=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
     echo "Current Branch is:" ${branch_name}

     if [ ${branch_name} != "uat" ];then
          echo "Please, Check out uat branch first!!"
          exit
     fi

     echo "This is UAT environment, Please take care of anything that you do."
     read -p "Do you wish to continue this program? (y/N) " yn

     case $yn in
        [Yy]* )
               REACT_APP_API=$(read_var REACT_APP_UAT_API .env)
               REACT_APP_SEGMENT_KEY=$(read_var REACT_APP_UAT_SEGMENT_KEY .env)  
               REACT_APP_YODLEE_FASTLINK=$(read_var REACT_APP_YODLEE_FASTLINK_SANDBOX .env)
               REACT_APP_YODLEE_API=$(read_var REACT_APP_YODLEE_SANDBOX_API .env)
               break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac

fi

if [ ${NODE_ENV} == "production" ];then
     branch_name=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
     echo "Current Branch is:" ${branch_name}

     if [ ${branch_name} != "master" ];then
          echo "Please, Check out master branch first!!"
          exit
     fi

     echo "This is PRODUCTION environment, Please take care of anything that you do."
     read -p "Do you wish to continue this program? (y/N) " yn

     case $yn in
        [Yy]* )
               REACT_APP_API=$(read_var REACT_APP_PRODUCTION_API .env)
               REACT_APP_SEGMENT_KEY=$(read_var REACT_APP_UAT_SEGMENT_KEY .env)     
               REACT_APP_YODLEE_FASTLINK=$(read_var REACT_APP_YODLEE_FASTLINK_PRODUCTION .env)
               REACT_APP_YODLEE_API=$(read_var REACT_APP_YODLEE_PRODUCTION_API .env)   
               break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac

fi
 
NODE_ENV=development \
REACT_APP_API=${REACT_APP_API} \
REACT_APP_YODLEE_FASTLINK=${REACT_APP_YODLEE_FASTLINK} \
REACT_APP_YODLEE_API=${REACT_APP_YODLEE_API} \
REACT_APP_SEGMENT_KEY=${REACT_APP_SEGMENT_KEY} \
node scripts/start.js 