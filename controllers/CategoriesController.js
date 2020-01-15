const CategoriesService = require('../services/CategoriesService');

class CategoriesController {
    constructor() {
        this.category = CategoriesService;
        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.count = this.count.bind(this);
    }

    async index(req, res, next) {
        try {
            const categories = await this.category.findAll();
            res.status(200).json({
                data: categories,
                message: 'listed categories'
            });
        } catch (error) {
            next(error);
        }
    }

    async show(req, res, next) {
        const { id: categoryId } = req.params;
        try {
            const category = await this.category.findCategory(categoryId);
            res.status(200).json({
                data: category,
                message: 'retreived category'
            });
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { body: category } = req;
        try {
            const createdCategory = await this.category.createCategory(category);
            res.status(200).json({
                data: createdCategory,
                message: 'category created'
            });        
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        const { body: category } = req;
        const { id: categoryId } = req.params;
        try {
            const updatedCategory = await this.category.updateCategory(category, categoryId);
            res.status(200).json({
                data: updatedCategory,
                message: 'category updated'
            });        
        } catch (error) {
            next(error);
        }
    }

    async count(req, res, next) {
        try {
            const count = await this.category.countCategories();
            res.status(200).json({
                data: count + 1,
                message: 'categories counted'
            }); 
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();