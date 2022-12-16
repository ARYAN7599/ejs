#!/bin/sh
ssh root@159.65.147.222<<EOF
   cd /var/www/html/
   git pull origin main
   npm install --production
   pm2 restart all
   exit
EOF
