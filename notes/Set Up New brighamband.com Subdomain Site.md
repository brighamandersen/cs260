Set up server to redirect to your subdomain

    cd /etc/nginx/sites-available
    sudo nano {subdomain}.brighamband.com
        Add to file
        
        server {
            listen 80;
            server_name lab1.emmasmith.org;
            root /var/www/lab1.emmasmith.org;
            index index.html;
            default_type "text/html";
            location / {
                try_files $uri $uri/ =404;
            }
        }

    sudo ln -s /etc/nginx/sites-available/{subdomain}.brighamband.com /etc/nginx/sites-enabled/

Set up new directory for subdomain website files

    sudo mkdir /var/www/{subdomain}.brighamband.com
    sudo chown brighamband /var/www/{subdomain}.brighamband.com

    sudo service nginx reload

Get website files on server
    cd ~
    git clone {subdomain_project_repo_name}

    cp -r * /var/www/{subdomain}.brighamband.com/

Add HTTPS certification using CertBot

    sudo certbot --nginx -d {subdomain}.brighamband.com

