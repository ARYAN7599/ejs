#!/bin/sh
chmod +x deploy.sh
<<EOF
   cd /var/www/html/
   git pull origin main
   npm install --production
   pm2 restart all
   exit
EOF
