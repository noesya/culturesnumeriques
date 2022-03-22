Jekyll::Hooks.register(:site, :post_write) do |_site|
    system("./node_modules/.bin/purgecss --config ./purgecss.config.js --output _site/assets/css")
end