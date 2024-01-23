if [ "$NODE_ENV" = "production" ]; then
    echo "API inicializada em produção"
    npm start
else 
    echo "API inicializada em desenvolvimento"
    npm run dev
fi