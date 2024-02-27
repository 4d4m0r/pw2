if ["$NODE_ENV" = "production"]
    echo "Frontend em produção"
    npm run build
    npm start
else
    echo "Frontend em desenvolvimento."
    npm run dev
fi