const ArticlesService = require('./ArticlesService');

class ArticlesController {
    constructor() {
        this.article = ArticlesService;
        this.index = this.index.bind(this);
        this.create = this.create.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.count = this.count.bind(this);
    }

    async index(req, res, next) {
        try {
            const articles = await this.article.findAll();
            res.status(200).json({
                data: articles,
                message: 'listed articles'
            });
        } catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        const { body: article } = req;        
        try {
            const createdArticle = await this.article.create(article);
            res.status(201).json({
                data: createdArticle,
                message: 'article created'
            });
        } catch (error) {
            next(error);
        }
    }
    async show(req, res, next) {
        const { id: articleKey } = req.params;
        try {
            const article = await this.article.finOne(articleKey);
            res.status(200).json({
                data: article,
                message: 'retreived article'
            });
        } catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        const { id: articleKey } = req.params;
        const { body: article } = req;
        try {
            const updatedArticle = await this.article.update(article, articleKey);
            res.status(200).json({
                data: updatedArticle,
                message: 'updated article'
            });
        } catch (error) {
            next(error);
        }
    } 

    async count(req, res, next) {
        try {
            const count = await this.article.count()
            res.status(200).json({
                data: count + 1,
                message: 'articles counted'
            }); 
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ArticlesController();