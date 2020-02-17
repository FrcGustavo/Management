const ArticlesModel = require('./ArticlesModel');

class ArticlesService {
    constructor() {
        this.article = ArticlesModel;
    }

    async findAll() {
        const articles = await this.article.findAll({ include: ["category"] });
        return articles;
    }
    
    async finOne(articleKey) {
        const article = await this.article.findOne({ where: { article_key: articleKey }, include: ["category"] });
        return article;

    }

    async create(article) {
        const createdArticle = await this.article.create(article);
        return createdArticle;
    }

    async update(article, articleKey) {
        const updatedArticle = await this.article.update(article, { where: { key: articleKey } });
        return updatedArticle;
    }

    async count() {
        const count = await this.article.count();
        return count;
    }
}

module.exports = new ArticlesService();