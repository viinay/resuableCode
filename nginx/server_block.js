server {
	listen 80;
	server_name stagging.loadforms.com;
	
	gzip on;
	gzip_disable "msie6";

	gzip_vary on;
	gzip_proxied any;
	gzip_comp_level 6;
	gzip_buffers 16 8k;
	gzip_http_version 1.1;
	gzip_min_length 256;
	gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon;

	#proxy_buffering off;
	#proxy_buffer_size 4k;
	
	location / {
            proxy_pass http://localhost:3022;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-NginX-Proxy true;
            proxy_ssl_session_reuse off;
            proxy_cache_bypass $http_upgrade;
            proxy_read_timeout 90;
            proxy_buffering off;

            location ~*  \.(jpg|jpeg|png|gif|ico|css|js)$ {
                    expires 365d;
                    proxy_pass http://localhost:3002;
                    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                    proxy_set_header Host $http_host;
                    proxy_set_header X-Forwarded-Proto $scheme;
                    proxy_buffering off;
            }
    }
}
