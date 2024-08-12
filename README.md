On main machine:
```
npm run build
```

On webserver:
```
echo ENSURE YOU HAVE BUILT BEFORE UPLOADING TO GITHUB. AND THAT YOU HAVE UPLOADED THE RELEVANT BUILD.
sudo apt update
sudo apt upgrade 
pm2 l
pm2 stop portfolio
pm2 delete portfolio
pm2 l
rm -r portfolio
git clone https://github.com/logancammish/portfolio
cd portfolio
npm i
pm2 start ./start.sh --name portfolio
pm2 l
pm2 save
echo COMPLETE
```