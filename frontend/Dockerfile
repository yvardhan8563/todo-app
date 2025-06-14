
# 1. Use an official Nginx image to serve static files ==> Nginx is great for serving static files like HTML/CSS/JS
From nginx:alpine


# 2. Remove the default Nginx static files ==> So your app files can be served instead
RUN rm -rf /usr/share/nginx/html/*


# 3. Copy your frontend files into the Nginx web directory ==> So Nginx can serve them
COPY . /usr/share/nginx/html


# 4. Expose port 80 (default for Nginx) ==> So you can access the frontend in a browser
EXPOSE 80




